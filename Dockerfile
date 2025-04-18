FROM python:3.12-alpine3.20

COPY requirements.txt /opt/app/

WORKDIR /opt/app/

RUN pip install -r requirements.txt

COPY source /opt/app/

CMD ["python", "main.py"]

