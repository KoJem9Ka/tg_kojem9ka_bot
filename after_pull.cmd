@echo off
cls
docker-compose down -t 2

rd /s /q "pg_data/"
7z x "pg14data.7z"

pause
