@echo off
setlocal

set "WORKTREE=%~1"
if not defined WORKTREE set "WORKTREE=%CD%"

set "PORT=%~2"
if not defined PORT set "PORT=4180"

powershell -NoProfile -ExecutionPolicy Bypass -File "%~dp0live-preview.ps1" -Worktree "%WORKTREE%" -Port %PORT%
exit /b %ERRORLEVEL%
