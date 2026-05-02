def analysis_prompt(state):
    return f"""
You are an expert social media analyst.

Analyze this business:

Business Name: {state.get("business_name")}
Industry: {state.get("industry")}
Website: {state.get("website")}
Social Media Link: {state.get("social_link")}
Followers: {state.get("followers")}
Recent Posts: {state.get("recent_posts")}

Provide:
1. Social media presence analysis
2. Branding quality
3. Content quality
4. Engagement potential
5. Lead generation weakness
6. Score out of 100
"""

def weakness_prompt(state):
    return f"""
Based on this analysis:

{state.get("analysis")}

Find the main social media weaknesses.
Give bullet points.
"""

def opportunity_prompt(state):
    return f"""
Business Name: {state.get("business_name")}
Industry: {state.get("industry")}
Analysis: {state.get("analysis")}
Weaknesses: {state.get("weaknesses")}

Suggest how our agency can help this business.
Focus on:
- More leads
- Better branding
- Better content
- Better conversion
"""

def pitch_prompt(state):
    return f"""
Create a personalized sales pitch.

Business: {state.get("business_name")}
Industry: {state.get("industry")}
Weaknesses: {state.get("weaknesses")}
Opportunities: {state.get("opportunity")}

Tone:
Professional, friendly, short, and simple.
"""

def call_script_prompt(state):
    return f"""
Create a personalized cold call script.

Business: {state.get("business_name")}
Industry: {state.get("industry")}
Pitch: {state.get("pitch")}

Include:
1. Greeting
2. Reason for calling
3. Personalized observation
4. Offer
5. Common objection handling
6. Closing question
"""