from database.models import Lead

def update_lead_status(db, lead_id: int, status: str):
    lead = db.query(Lead).filter(Lead.id == lead_id).first()

    if not lead:
        return None

    lead.status = status
    db.commit()
    db.refresh(lead)

    return lead