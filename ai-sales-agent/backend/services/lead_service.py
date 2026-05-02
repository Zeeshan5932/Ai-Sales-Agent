from database.models import Lead

def create_lead(db, data):
    lead = Lead(**data.dict())
    db.add(lead)
    db.commit()
    db.refresh(lead)
    return lead

def get_all_leads(db):
    return db.query(Lead).all()

def get_lead_by_id(db, lead_id: int):
    return db.query(Lead).filter(Lead.id == lead_id).first()

def update_lead_analysis(db, lead_id: int, result: dict):
    lead = get_lead_by_id(db, lead_id)

    if not lead:
        return None

    lead.analysis = result.get("analysis")
    lead.weaknesses = result.get("weaknesses")
    lead.opportunity = result.get("opportunity")
    lead.pitch = result.get("pitch")
    lead.call_script = result.get("call_script")
    lead.final_report = result.get("final_report")
    lead.status = "Analyzed"

    db.commit()
    db.refresh(lead)
    return lead