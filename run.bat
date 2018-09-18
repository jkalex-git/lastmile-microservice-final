start "1" eureka.bat
timeout /t 30 /nobreak
start "2" zuul.bat
timeout /t 30 /nobreak
start "3" gps-1.bat
start "4" gps-2.bat
timeout /t 30 /nobreak
start "5" lastmile.bat
