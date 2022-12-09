import unittest
from sqlalchemy.orm import declarative_base, relationship
from sqlalchemy import Column, Integer, String, ForeignKey,Boolean,Enum,DateTime
from .database import return_engine, DB_URL, return_session
import enum 
from datetime import datetime
from pydantic import BaseModel

Base = declarative_base()

class LangEnum(enum.Enum):
    ko = "ko" # 한글
    en = "en" # 영어 

class User(Base):
    __tablename__ = 'user'
    id = Column(Integer,primary_key=True,index=True)
    username = Column(String(20),unique=True)
    hashpw = Column(String(40))
    profile_pic = Column(String(100))
    is_active = Column(Boolean,default=False)
    lang = Column(Enum(LangEnum))
    friend_count = Column(Integer,default=0)
    created_at = Column(DateTime,default=datetime.utcnow)
    updated_at = Column(DateTime,default=datetime.utcnow)

    
class Friend(Base):
    __tablename__ = 'friends'
    id = Column(Integer,primary_key=True,index=True)
    user_id = Column(Integer,ForeignKey('user.id'))
    friend_id = Column(Integer,ForeignKey('user.id'))
    is_deleted = Column(Boolean,default=False) # 친구 삭제
    room_id = Column(Integer,ForeignKey('room.id'))
    users = relationship("User",foreign_keys=[user_id])
    friends = relationship("User",foreign_keys=[friend_id])
    

class Room(Base):
    __tablename__ = 'room'
    id = Column(Integer,primary_key=True,index=True)
    created_at = Column(DateTime,default=datetime.utcnow)
    state = Column(Boolean,default=False) # 요청대기: False, 요청완료: True
    friends = relationship("Friend")
    message_historys = relationship("MessageHistory")

class MessageHistory(Base):
    __tablename__ = 'message_history'
    id = Column(Integer,primary_key=True,index=True)
    room_id = Column(Integer,ForeignKey('room.id'))
    from_id = Column(Integer)
    to_id = Column(Integer)

    origin_id = Column(Integer,ForeignKey('origin_message.id'))
    origins = relationship("OriginMessage",foreign_keys=[origin_id])

    result_id = Column(Integer,ForeignKey('result_message.id'))
    results = relationship("ResultMessage",foreign_keys=[result_id])

    created_at = Column(DateTime,default=datetime.utcnow)

class OriginMessage(Base):
    __tablename__ = 'origin_message'
    id = Column(Integer,primary_key=True,index=True)
    body = Column(String(100))
    lang = Column(Enum(LangEnum))

    

class ResultMessage(Base):
    __tablename__ = 'result_message'
    id = Column(Integer,primary_key=True,index=True)
    origin_id = Column(Integer,ForeignKey('origin_message.id'))
    body = Column(String(100))
    lang = Column(Enum(LangEnum))


    


