

# main.py
from fastapi import FastAPI
from routers import chat, user

# ✅ DB 관련 import
from database import engine, get_db
from models import Base


# ✅ DB 테이블 생성
Base.metadata.create_all(bind=engine)

# ✅ FastAPI 앱 생성!
=======
# ✅ DB 테이블 생성
Base.metadata.create_all(bind=engine)

# ✅ FastAPI 앱 생성
app = FastAPI()

# 라우터 연결
app.include_router(chat.router, prefix="/api")


app.include_router(user.router, prefix="/api")


app.include_router(user.router, prefix="/api")

# --- 아래는 AI용 라우팅 (필요하면 주석 해제해서 사용) ---
"""
from models.chat import ChatRequest, ChatResponse
from openai import OpenAI 
from datetime import datetime 
from db.fake_users_db import get_user_by_id
from services.ai import build_prompt, call_openai
from dotenv import load_dotenv
import os

load_dotenv()
api_key=os.getenv("OPEN_API_KEY")
client = OpenAI(api_key=api_key) 

@app.post("/chat", response_model=ChatResponse)
def chat(req: ChatRequest):
    user = get_user_by_id(req.user_id)
    prompt = build_prompt(user, req.message)
    
    response = call_openai(client, [
        {"role": "system", "content": prompt},
        {"role": "user", "content": req.message}
    ])
    
    return ChatResponse(
        summary=response.choices[0].message.content,
        timestamp=datetime.now().isoformat()
    )
"""
