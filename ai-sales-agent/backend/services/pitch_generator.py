from services.gemini_service import ask_gemini

def generate_custom_pitch(business_name: str, industry: str, weakness: str):
    prompt = f"""
Create a short personalized sales pitch.

Business Name: {business_name}
Industry: {industry}
Weakness: {weakness}

Make it professional and easy to understand.
"""
    return ask_gemini(prompt)