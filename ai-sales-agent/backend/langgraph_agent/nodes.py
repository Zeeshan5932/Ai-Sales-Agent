from services.gemini_service import ask_gemini
from langgraph_agent.prompts import (
    analysis_prompt,
    weakness_prompt,
    opportunity_prompt,
    pitch_prompt,
    call_script_prompt
)

def analyze_social_media(state):
    return {
        "analysis": ask_gemini(analysis_prompt(state))
    }

def find_weaknesses(state):
    return {
        "weaknesses": ask_gemini(weakness_prompt(state))
    }

def find_opportunity(state):
    return {
        "opportunity": ask_gemini(opportunity_prompt(state))
    }

def generate_pitch(state):
    return {
        "pitch": ask_gemini(pitch_prompt(state))
    }

def generate_call_script(state):
    return {
        "call_script": ask_gemini(call_script_prompt(state))
    }

def final_response(state):
    final_report = f"""
BUSINESS NAME:
{state.get("business_name")}

INDUSTRY:
{state.get("industry")}

SOCIAL MEDIA ANALYSIS:
{state.get("analysis")}

WEAKNESSES:
{state.get("weaknesses")}

OPPORTUNITIES:
{state.get("opportunity")}

PERSONALIZED SALES PITCH:
{state.get("pitch")}

CALL SCRIPT:
{state.get("call_script")}
"""

    return {
        "final_report": final_report
    }