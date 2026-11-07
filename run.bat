@echo off
setlocal
rem Starts Deutsch B'Darija for development: API (port 4000) and website (port 3000),
rem each in its own window, then opens the site in the browser.
rem Close the two windows (or press Ctrl+C in them) to stop the servers.

cd /d "%~dp0"
title Deutsch B'Darija

where pnpm >nul 2>nul
if errorlevel 1 (
  echo pnpm was not found. Install it with:  npm install -g pnpm
  pause
  exit /b 1
)

rem Stop servers that are still running from an earlier start
for %%P in (3000 4000) do (
  for /f "tokens=5" %%I in ('netstat -ano ^| findstr /r /c:":%%P .*LISTENING"') do (
    echo Stopping the old server on port %%P ...
    taskkill /PID %%I /F >nul 2>nul
  )
)

rem First run: install dependencies
if not exist "node_modules" (
  echo Installing dependencies, this takes a few minutes the first time ...
  call pnpm install
  if errorlevel 1 (
    echo Installing dependencies failed.
    pause
    exit /b 1
  )
)

echo Starting the API on http://localhost:4000 ...
start "Deutsch B'Darija - API" cmd /k "cd /d "%~dp0backend\api-gateway" && pnpm dev"

echo Starting the website on http://localhost:3000 ...
start "Deutsch B'Darija - Website" cmd /k "cd /d "%~dp0frontend" && pnpm dev"

rem Open the browser once the website answers (up to 2 minutes)
echo Waiting for the website ...
for /l %%N in (1,1,60) do (
  curl -s -o nul -m 2 http://localhost:3000/login && goto :ready
  ping -n 3 127.0.0.1 >nul
)
echo The website did not start in time. Check the "Website" window for errors.
pause
exit /b 1

:ready
echo Ready! Opening http://localhost:3000
start "" http://localhost:3000
ping -n 4 127.0.0.1 >nul
exit /b 0
