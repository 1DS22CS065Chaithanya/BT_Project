from fastapi import FastAPI
from typing import Optional
from pydantic import BaseModel
import uvicorn

app=FastAPI()

@app.get("/tech")
def index(limit=10,required:bool=True,sort:Optional[str]=None):
    if required:
        return {'data':f'{limit} tech stacks returned from db'}
    else:
        return {'data':f'{limit} tech returned from the db'}


@app.get("/tech/{id}")
def show(id:int):
    return {'data':id}

@app.get("/tech/{id}/comments")
def comments(id):
    return {'data':{'1','2'}}

class Tech(BaseModel):
    title:str
    body:str
    required:Optional[bool]

@app.post('/tech')
def create_tech(request:Tech):
    return {'data':f'Blog is created with title as {request.title}'}

if __name__ == "__main__":
    uvicorn.run(app,host="127.0.0.1",port=9000)