@echo off
echo Moving files...
xcopy "c:\Users\lomba\Downloads\worldwide-wealth-site" "c:\Users\lomba\World Wide Wealth" /E /I /H /Y
echo Done copying.
rmdir /S /Q "c:\Users\lomba\Downloads\worldwide-wealth-site"
echo Done removing.
