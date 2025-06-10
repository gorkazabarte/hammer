from json import load
from typing import Union
from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def get_root():

    with open('./company/amd.json', 'r') as file:
        data = load(file)
    return {"data": data}

