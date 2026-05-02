from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from api.routes import router
from database.db import Base, engine

Base.metadata.create_all(bind=engine)

app = FastAPI(title="AI Sales Agent API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(router)

@app.get("/")
def root():
    return {
        "message": "AI Sales Agent Backend with Gemini + LangGraph is running"
    }