"""Welcome to Hammer backend application created with FastAPI"""

from json import load
from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def get_root():
    """This is the main get method"""

    with open('backend/amd.json', 'r', encoding='utf-8') as file:
        data = load(file)
    return {
            "Hola": f"{data}"
            }
