FROM python:3.12-alpine3.20

COPY source ./source

WORKDIR ./source 

CMD ["python", "main.py"]

