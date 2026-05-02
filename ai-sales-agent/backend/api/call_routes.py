from fastapi import APIRouter
from pydantic import BaseModel
from services.call_script_generator import generate_custom_call_script

router = APIRouter()

class CallScriptRequest(BaseModel):
    business_name: str
    industry: str
    pitch: str

@router.post("/script")
def create_call_script(data: CallScriptRequest):
    script = generate_custom_call_script(
        data.business_name,
        data.industry,
        data.pitch
    )

    return {"call_script": script}