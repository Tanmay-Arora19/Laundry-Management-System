@echo off
echo Compiling Laundry Order System...
javac LaundryOrderSystem.java
if %errorlevel% neq 0 (
    echo Compilation failed.
    pause
    exit /b %errorlevel%
)
echo Running Laundry Order System...
java LaundryOrderSystem
pause
