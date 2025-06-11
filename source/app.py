"""Welcome to Hammer backend application created with FastAPI"""

from json import load
from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def get_root():
    """This is the main get method"""

    with open('./company/amd.json', 'r', encoding='utf-8') as file:
        data = load(file)
    return {"Facto": "I love you so much Ines. This is the proof that I accomplished my task and I want to go to bed. I wish you a very good night. You deserve the best"}
