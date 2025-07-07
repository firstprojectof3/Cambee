
# Pydantic 모델: 요청/응답/사용자 데이터
# 클래스 구조
# models/chat.py
from pydantic import BaseModel
# import datetime as t

class ChatRequest(BaseModel):
    user_id:str
    message:str

class ChatResponse(BaseModel):
    summary: str
    timestamp: str

class User(BaseModel):
    user_id:str
    name:str
    student_number:int
    gender:str
    grade:int
    school:str
    id:int

class Message(BaseModel):
    user_id:str
    message:str
    timestamp: str

class Summary(BaseModel):
    original_message: str
    summary_text: str
    created_at: str
