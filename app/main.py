from fastapi import FastAPI,Depends

from database.database import SessionLocal, ENGINE
from database.model import Base, User
from database.schema import UserCreate
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

# 예시 내 정보 불러오기
# 127.0.0.1:8080/api/v1/users?username=test
@app.get('/api/v1/users/{username}')
async def get_info(username:str, db=Depends(get_db)):
    
    print("이름:",username)

    # DB 조회, 수정, 업데이트, 삭제

    # 정보 조회
    try:
        user_info = db.query(User).filter(User.username == username).first()
        db.close()
        return user_info

    except Exception as e:
        print("에러")
        return "Not User"
    
    
@app.post('/api/v1/join')
async def join(user_form:UserCreate, db=Depends(get_db)):
    user = User(**user_form.dict())
    print(user.username)
    print(user.hashpw)

    try:
        db.add(user)
        db.commit()
        return {'success':'성공'}

    except Exception as e:
        print(e)
        return {'fail':'실패'}


