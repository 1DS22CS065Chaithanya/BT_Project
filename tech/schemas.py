from pydantic import BaseModel
from typing import List
class TechBase(BaseModel):
    title:str
    body:str

    #Response_model is also called as response_schema it is a pydantic model it is used when u want to show only a particular variable such as title,body etc and not the id.
class Tech(TechBase):
    class Config():
        orm_mode=True

class User(BaseModel):
    name:str
    email:str
    password:str

class ShowUser(BaseModel):
    name:str
    email:str
    techs:List[Tech]=[]
    class Config():
        orm_mode=True
    
class ShowTech(BaseModel):
    title:str
    body:str
    creator:ShowUser
    class Config():
        orm_mode=True