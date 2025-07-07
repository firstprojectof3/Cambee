
# Open AI 호출 + 프롬프트 빌더 함수

from models.chat import User

def build_prompt(user: User, question: str) -> str:
    return f"""너는 AI 챗봇이야. 사용자는 {user.name}, {user.grade}학년 {user.school} 소속이야.
    질문은: {question}
    친근하게, 반말로, 이모티콘도 넣어서 대답해줘.
    """

def call_openai(client, messages):
    return client.chat.completions.create(
        model="gpt-3.5-turbo",
        messages=messages
    )
