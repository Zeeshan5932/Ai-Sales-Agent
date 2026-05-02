from fastapi import APIRouter
from pydantic import BaseModel
from services.pitch_generator import generate_custom_pitch

router = APIRouter()

class PitchRequest(BaseModel):
    business_name: str
    industry: str
    weakness: str

@router.post("/")
def create_pitch(data: PitchRequest):
    pitch = generate_custom_pitch(
        data.business_name,
        data.industry,
        data.weakness
    )

    return {"pitch": pitch}