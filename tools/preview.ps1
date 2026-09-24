# GISBA OS - vista previa unica y siempre actualizada
#
# Sirve en http://127.0.0.1:<Port> el dist/ del commit al que apunta <Ref> (por defecto origin/main)
# y lo actualiza solo cuando ese commit cambia (hace git fetch cada <Interval> segundos).
# No modifica el repositorio ni ninguna carpeta de trabajo: extrae el commit a una carpeta temporal.
# El commit que se esta mostrando aparece en la consola y en http://127.0.0.1:<Port>/__build.txt
#
# Uso (PowerShell):
#   powershell -ExecutionPolicy Bypass -File tools\preview.ps1
#   powershell -ExecutionPolicy Bypass -File tools\preview.ps1 -Ref release/v1 -Open
#   powershell -ExecutionPolicy Bypass -File tools\preview.ps1 -Ref claude/mi-rama -Port 4180
# Detener: Ctrl+C.

param(
  [string]$Ref = "origin/main",
  [int]$Port = 4173,
  [int]$Interval = 15,
  [switch]$Open
)

$ErrorActionPreference = "Continue"
$repo = (git -C $PSScriptRoot rev-parse --show-toplevel).Trim()
$root = Join-Path $env:TEMP "gisba-preview"
$dist = Join-Path $root "dist"
$server = Join-Path $PSScriptRoot "preview_server.py"
$url = "http://127.0.0.1:$Port/"

function Get-Python {
  foreach ($name in @("python", "py")) {
    $cmd = Get-Command $name -ErrorAction SilentlyContinue
    if ($cmd) { return $cmd.Source }
  }
  throw "No se encontro Python (python o py) en el PATH."
}

function Update-Site([string]$sha) {
  New-Item -ItemType Directory -Path $dist -Force | Out-Null
  Get-ChildItem $dist -Force | Remove-Item -Recurse -Force
  $zip = Join-Path $root "dist.zip"
  if (Test-Path $zip) { Remove-Item $zip -Force }
  git -C $repo archive --format=zip $sha dist -o $zip
  if ($LASTEXITCODE -ne 0) { throw "git archive fallo para $sha (existe dist/ en ese commit?)" }
  Add-Type -AssemblyName System.IO.Compression.FileSystem
  [System.IO.Compression.ZipFile]::ExtractToDirectory($zip, $root)
  Remove-Item $zip -Force
  $subject = (git -C $repo log -1 --format=%s $sha).Trim()
  $info = "ref: $Ref`r`ncommit: $sha`r`nasunto: $subject`r`nactualizado: $(Get-Date -Format 'yyyy-MM-dd HH:mm:ss')"
  Set-Content -Path (Join-Path $dist "__build.txt") -Value $info -Encoding ASCII
  return $subject
}

New-Item -ItemType Directory -Path $root -Force | Out-Null
$python = Get-Python
$pyArgs = @($server, $dist, "$Port")
if ((Split-Path $python -Leaf) -eq "py.exe") { $pyArgs = @("-3") + $pyArgs }

# Primera extraccion antes de levantar el servidor
git -C $repo fetch origin --quiet 2>&1 | Out-Null
$sha = (git -C $repo rev-parse "$Ref^{commit}" 2>&1).Trim()
if ($LASTEXITCODE -ne 0) { throw "No existe la referencia '$Ref'." }
$subject = Update-Site $sha

$proc = Start-Process -FilePath $python -ArgumentList $pyArgs -PassThru -WindowStyle Hidden
Start-Sleep -Seconds 1
if ($proc.HasExited) { throw "El servidor no pudo iniciar (puerto $Port ocupado?). Usa -Port con otro numero." }

Write-Host ""
Write-Host "GISBA OS - vista previa activa" -ForegroundColor Green
Write-Host "  Abre: $url   (siempre este mismo link)"
Write-Host "  Mostrando: $Ref @ $($sha.Substring(0,7))  $subject"
Write-Host "  Se actualiza solo cada $Interval s. Detener: Ctrl+C."
if ($Open) { Start-Process $url }

$last = $sha
try {
  while ($true) {
    Start-Sleep -Seconds $Interval
    git -C $repo fetch origin --quiet 2>&1 | Out-Null
    $now = (git -C $repo rev-parse "$Ref^{commit}" 2>&1).Trim()
    if ($LASTEXITCODE -eq 0 -and $now -ne $last) {
      $subject = Update-Site $now
      $last = $now
      Write-Host ("[{0}] Actualizado: {1} @ {2}  {3}" -f (Get-Date -Format "HH:mm:ss"), $Ref, $now.Substring(0,7), $subject) -ForegroundColor Cyan
    }
  }
}
finally {
  if ($proc -and -not $proc.HasExited) { Stop-Process -Id $proc.Id -Force }
}
