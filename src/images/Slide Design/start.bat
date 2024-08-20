@echo off
setlocal enabledelayedexpansion

set /a count=1

for %%F in (*) do (
    if not "%%F"=="%~nx0" (
        set "extension=%%~xF"
        ren "%%F" "!count!!extension!"
        set /a count+=1
    )
)

echo All files have been renamed.
pause