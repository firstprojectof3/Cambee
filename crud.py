# crud.py
from sqlalchemy.orm import Session
from models import UserPreference

def get_user_by_id(db: Session, user_id: str):
    return db.query(UserPreference).filter(UserPreference.user_id == user_id).first()
