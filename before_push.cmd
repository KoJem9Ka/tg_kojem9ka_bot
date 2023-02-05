@echo off
cls
docker-compose down -t 2

del /s /q "pg14data.7z"
7z a -t7z "pg14data.7z" -m0=lzma2 -mx=9 "pg_data/"

pause
