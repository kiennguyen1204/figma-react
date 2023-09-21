@echo off

REM Convert the images to WebP
for /f "delims=" %%f in ('dir /b *.png *.jpg *.jpeg *.gif') do (
    cwebp -q 70 "%%f" -o "%%~nf.webp"
)

REM Echo a message to the user
echo All images have been renamed to WebP and renumbered.