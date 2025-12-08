from sqlalchemy.orm import Session
from .. import models, schemas
from fastapi import HTTPException,status

def get_all(db: Session):
    blogs = db.query(models.Tech).all()
    return blogs

def create(request: schemas.Tech,db: Session):
    new_tech = models.Tech(title=request.title, body=request.body,user_id=1)
    db.add(new_tech)
    db.commit()
    db.refresh(new_tech)
    return new_tech

def destroy(id:int,db: Session):
    techs = db.query(models.Tech).filter(models.Tech.id == id)

    if not techs.first():
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,
                            detail=f"Tech with id {id} not found")

    techs.delete(synchronize_session=False)
    db.commit()
    return 'done'

def update(id:int,request:schemas.Tech, db:Session):
    techs = db.query(models.Tech).filter(models.Tech.id == id)

    if not techs.first():
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,
                            detail=f"Tech with id {id} is not available")

    techs.update(request)
    db.commit()
    return 'updated'

def show(id:int,db:Session):
    techs = db.query(models.Tech).filter(models.Tech.id == id).first()
    if not techs:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,
                            detail=f"Tech with id {id} is not available")
    return techs