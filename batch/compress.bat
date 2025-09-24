@echo off
setlocal

if not exist "dist\" (
    echo Error: La carpeta 'dist' no existe.
    exit /b 1
)

set "ZIP_FILE=dist\dist.zip"

:: Usar ZIP para comprimir el contenido
echo Comprimiendo contenido de dist con ZIP...
cd dist && zip -r -p "..\%ZIP_FILE%" "*" && cd ..

if exist "%ZIP_FILE%" (
    echo ZIP creado: %ZIP_FILE%
) else (
    echo Error. Asegúrate de tener ZIP instalado.
)
