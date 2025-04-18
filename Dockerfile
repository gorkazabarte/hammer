FROM python:3.12-alpine3.20

COPY requirements.txt /app/

WORKDIR /app/

RUN pip install --no-cache-dir --upgrade -r requirements.txt

COPY source /app/

CMD ["uvicorn", "app:app",  "--host", "0.0.0.0", "--port", "80"]

