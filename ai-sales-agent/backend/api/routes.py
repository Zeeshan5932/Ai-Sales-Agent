from fastapi import APIRouter
from api.lead_routes import router as lead_router
from api.analysis_routes import router as analysis_router
from api.pitch_routes import router as pitch_router
from api.call_routes import router as call_router

router = APIRouter()

router.include_router(lead_router, prefix="/leads", tags=["Leads"])
router.include_router(analysis_router, prefix="/analysis", tags=["Analysis"])
router.include_router(pitch_router, prefix="/pitch", tags=["Pitch"])
router.include_router(call_router, prefix="/calls", tags=["Calls"])