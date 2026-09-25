# GISBA OS - vista previa de un worktree con recarga automatica
#
# Sirve el dist/ de cualquier worktree y recarga el navegador al guardar cambios.
# No instala paquetes globales ni modifica el repositorio.
#
# Uso:
#   powershell -NoProfile -ExecutionPolicy Bypass -File tools\live-preview.ps1
#   powershell -NoProfile -ExecutionPolicy Bypass -File tools\live-preview.ps1 -Worktree C:\ruta\al\worktree -Port 4180
#
# Detener: Ctrl+C.

param(
  [string]$Worktree,
  [ValidateRange(1, 65535)]
  [int]$Port = 4180,
  [switch]$Open
)

$ErrorActionPreference = "Stop"

if ($Port -eq 4173) {
  throw "El puerto 4173 esta reservado para la vista de origin/main. Usa otro puerto, por ejemplo 4180."
}

if (-not $Worktree) {
  $Worktree = (git -C $PSScriptRoot rev-parse --show-toplevel 2>$null).Trim()
  if (-not $Worktree) {
    throw "No se pudo detectar el worktree. Indicalo con -Worktree C:\ruta\al\worktree."
  }
}

$resolvedWorktree = (Resolve-Path -LiteralPath $Worktree).Path
$dist = Join-Path $resolvedWorktree "dist"
if (-not (Test-Path -LiteralPath $dist -PathType Container)) {
  throw "No existe dist/ dentro de '$resolvedWorktree'."
}

$listener = Get-NetTCPConnection -State Listen -LocalPort $Port -ErrorAction SilentlyContinue
if ($listener) {
  throw "El puerto $Port ya esta ocupado. Elige otro con -Port."
}

$npx = $null
foreach ($name in @("npx.ps1", "npx.cmd", "npx")) {
  $npx = Get-Command $name -ErrorAction SilentlyContinue
  if ($npx) { break }
}
if (-not $npx) {
  throw "No se encontro npx. Instala Node.js o agrega npx al PATH."
}

$url = "http://127.0.0.1:$Port/"
Write-Host ""
Write-Host "GISBA OS - live preview" -ForegroundColor Green
Write-Host "  Worktree: $resolvedWorktree"
Write-Host "  Sirviendo: $dist"
Write-Host "  Abre: $url"
Write-Host "  El navegador se recarga al guardar cambios en dist/."
Write-Host "  Detener: Ctrl+C."

if ($Open) {
  Start-Process $url
}

& $npx.Source --yes live-server@1.2.2 $dist `
  "--host=127.0.0.1" `
  "--port=$Port" `
  "--wait=100" `
  --no-browser `
  --quiet

exit $LASTEXITCODE
