
# FAST API AI 앱 실행, 라우팅 처리
from fastapi import FastAPI
from models.chat import ChatRequest, ChatResponse
from openai import OpenAI 
from datetime import datetime 

from db.fake_users_db import get_user_by_id
from services.ai import build_prompt, call_openai

# pip install python-dotenv
from dotenv import load_dotenv
import os

load_dotenv()
api_key=os.getenv("OPEN_API_KEY")

app = FastAPI()

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

# def summarize(req: ChatRequest):
#     response = client.chat.completions.create(
#         model="gpt-3.5-turbo",
#         messages=[{"role": "user", "content": req.message}]
#     )
#     summary = response.choices[0].message.content
#     return ChatResponse(summary=summary)