import enum 
from datetime import datetime
from pydantic import BaseModel

class LangEnum(enum.Enum):
    ko = "ko" # 한글
    en = "en" # 영어 

class UserCreate(BaseModel):
    username: str
    hashpw: str
    profile_pic: str
    lang:str