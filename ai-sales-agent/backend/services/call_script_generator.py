from services.gemini_service import ask_gemini

def generate_custom_call_script(business_name: str, industry: str, pitch: str):
    prompt = f"""
Create a phone call script for this business.

Business: {business_name}
Industry: {industry}
Pitch: {pitch}

Include greeting, offer, objection handling, and closing question.
"""
    return ask_gemini(prompt)