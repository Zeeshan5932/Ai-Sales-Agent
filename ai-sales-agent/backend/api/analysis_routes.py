from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from database.db import get_db
from services.social_analyzer import run_social_analysis
from services.lead_service import get_lead_by_id, update_lead_analysis

router = APIRouter()

@router.post("/{lead_id}")
def analyze_lead(lead_id: int, db: Session = Depends(get_db)):
    lead = get_lead_by_id(db, lead_id)

    if not lead:
        raise HTTPException(status_code=404, detail="Lead not found")

    result = run_social_analysis({
        "business_name": lead.business_name,
        "industry": lead.industry,
        "website": lead.website,
        "social_link": lead.social_link,
        "followers": lead.followers,
        "recent_posts": lead.recent_posts
    })

    updated_lead = update_lead_analysis(db, lead_id, result)

    return updated_lead