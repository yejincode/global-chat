from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
import unittest

DB_URL = 'sqlite:///./global_chat.db' # sqlite
def return_engine(url):
    engine = create_engine(url,connect_args={"check_same_thread": False})
    return engine

ENGINE = return_engine(DB_URL)

def return_session(engine=ENGINE):
    Session = sessionmaker(bind=engine,autocommit=False)
    return Session

SessionLocal = return_session()

