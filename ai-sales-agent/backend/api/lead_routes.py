from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from database.db import get_db
from database.schemas import LeadCreate, LeadResponse
from services.lead_service import create_lead, get_all_leads, get_lead_by_id

router = APIRouter()

@router.post("/", response_model=LeadResponse)
def add_lead(data: LeadCreate, db: Session = Depends(get_db)):
    return create_lead(db, data)

@router.get("/", response_model=list[LeadResponse])
def list_leads(db: Session = Depends(get_db)):
    return get_all_leads(db)

@router.get("/{lead_id}", response_model=LeadResponse)
def lead_detail(lead_id: int, db: Session = Depends(get_db)):
    lead = get_lead_by_id(db, lead_id)

    if not lead:
        raise HTTPException(status_code=404, detail="Lead not found")

    return lead