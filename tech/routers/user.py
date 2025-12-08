from fastapi import APIRouter,Depends,status,HTTPException
from .. import schemas,models
from sqlalchemy.orm import Session
from ..database import get_db
from ..hashing import Hash
from ..repository import user

router=APIRouter(tags=['users'],prefix="/user")


@router.post('/',response_model=schemas.ShowUser)
def create_user(request:schemas.User,db:Session=Depends(get_db)):
    return user.create(request,db)

@router.get('/{id}',response_model=schemas.ShowUser)
def get_user(id:int,db:Session=Depends(get_db)):
    return user.show(id,db)
    


    #to define a routes or the endpoints in proper way in the swagger we use docs tags
