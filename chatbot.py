
# pip install openai OPENAI 라이브러리 설치

import os
import openai

# openai.api_key = os.environ[""]

# AI 행동 방식 결정(role: system)
conversation = [{"role": "system", "content": "You are a helpful assistant."}]
# 사용자의 입력을 받아 동적으로 수행.
while True:
    user_input = input("사용자: ")
    if user_input.lower() == "exit":  
        break
    
    conversation.append({"role": "user", "content": user_input})
    
    response = openai.chat.completions.create(
    model="gpt-4",
    messages=conversation
)


  # 최신 방식으로 데이터 접근하기
    assistant_reply = response.choices[0].message.content
    print("챗봇:", assistant_reply)

    conversation.append({"role": "assistant", "content": assistant_reply})

