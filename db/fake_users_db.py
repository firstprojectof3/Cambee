
# (임시) 사용자 정보 저장/조회용 딕셔너리

from models.chat import User

# 가상의 학생 정보
fake_users_db={
    "user123":User(
        user_id="user123",
        name="민지",
        student_number=20230001,
        gender="F",
        grade=3,
        school="이화여대",
        id=1
    ),
     "user456": User(
        user_id="user456",
        name="지민",
        student_number=20220012,
        gender="F",
        grade=2,
        school="이화여대",
        id=2
    ),
}
#사용자 조회 함수
def get_user_by_id(user_id: str) :
    return fake_users_db.get(user_id)