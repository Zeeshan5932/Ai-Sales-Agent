from pydantic import BaseModel
from typing import Optional

class LeadCreate(BaseModel):
    business_name: str
    industry: str
    website: Optional[str] = None
    social_link: Optional[str] = None
    followers: Optional[str] = None
    recent_posts: Optional[str] = None

class LeadResponse(LeadCreate):
    id: int
    status: str
    analysis: Optional[str] = None
    weaknesses: Optional[str] = None
    opportunity: Optional[str] = None
    pitch: Optional[str] = None
    call_script: Optional[str] = None
    final_report: Optional[str] = None

    class Config:
        from_attributes = True