from sqlalchemy import Column, Integer, String, Text
from database.db import Base

class Lead(Base):
    __tablename__ = "leads"

    id = Column(Integer, primary_key=True, index=True)
    business_name = Column(String, index=True)
    industry = Column(String)
    website = Column(String, nullable=True)
    social_link = Column(String, nullable=True)
    followers = Column(String, nullable=True)
    recent_posts = Column(Text, nullable=True)

    analysis = Column(Text, nullable=True)
    weaknesses = Column(Text, nullable=True)
    opportunity = Column(Text, nullable=True)
    pitch = Column(Text, nullable=True)
    call_script = Column(Text, nullable=True)
    final_report = Column(Text, nullable=True)

    status = Column(String, default="New")