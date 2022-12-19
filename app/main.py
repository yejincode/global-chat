from fastapi import FastAPI, Depends, status, HTTPException

from database.database import SessionLocal, ENGINE
from database.model import Base, User
from database.schema import UserCreate

from passlib.context import CryptContext

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

app = FastAPI()

Base.metadata.create_all(ENGINE)

def get_db():
    db = SessionLocal()

    try:
        yield db
    except Exception as e:
        pass

    finally:
        db.close()

# 예시
@app.get('/')
async def index():
    return {'hello':'world'}


def get_info(username:str):    
    print("이름:",username)
    db = get_db()

    # DB 조회, 수정, 업데이트, 삭제

    # 정보 조회
    try:
        user_info = next(db).query(User).filter(User.username == username).first()
        db.close()
        return user_info

    except Exception as e:
        print("에러")
        return "Not User"
    

# 중복 가입 검증
def get_existing_user(user_form: UserCreate):
    db = get_db()
    result = next(db).query(User).filter(
        (User.username == user_form.username)
    ).first()
    return result
    

# 회원가입
@app.post('/api/v1/join')
async def join(user_form:UserCreate):
    db = next(get_db())
    user = User(
        username = user_form.username,
        hashpw = pwd_context.hash(user_form.hashpw),
    )
    if get_existing_user(user):
        raise HTTPException(status_code=status.HTTP_409_CONFLICT,
                            detail="이미 존재하는 사용자입니다.")
    
    else:    
        try:
            print(db)
            db.add(user)
            db.commit()
            return {'success':'가입 성공'}

        except Exception as e:
            print(e)
            return {'fail':'가입 실패'}

