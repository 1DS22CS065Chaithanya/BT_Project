from fastapi import APIRouter,Depends,status,HTTPException
from .. import schemas,models
from typing import List
from sqlalchemy.orm import Session
from ..database import get_db
from ..repository import tech

router=APIRouter(tags=['techs'],prefix="/tech")

@router.get('/',response_model=List[schemas.ShowTech])  #here we have used list because we need a response that contains all the data of tech.
def all(db:Session=Depends(get_db)):
    return tech.get_all(db)

@router.post('/',status_code=status.HTTP_201_CREATED)
def create(request:schemas.Tech,db:Session=Depends(get_db)):
    return tech.create(request,db)
@router.delete('/{id}',status_code=status.HTTP_204_NO_CONTENT)
def destroy(id:int,db:Session=Depends(get_db)):
   return tech.destroy(id,db)
@router.put('/{id}',status_code=status.HTTP_202_ACCEPTED)
def update(id:int,request:schemas.Tech,db:Session=Depends(get_db)):
    return tech.update(id,request,db)

@router.get('/{id}',status_code=200,response_model=schemas.ShowTech)
def show(id:int,db:Session=Depends(get_db)):
    return tech.show(id,db)
