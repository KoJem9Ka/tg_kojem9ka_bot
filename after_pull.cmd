@echo off
cls
docker-compose down -t 2

rd /s /q "pg_data/"
7z x "db_data.7z"

pause
