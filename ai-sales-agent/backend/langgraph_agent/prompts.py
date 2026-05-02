def analysis_prompt(state):
    return f"""
You are an expert AI Sales Agent and Business Growth Consultant. Your task is to analyze a business's social media presence and generate a professional, structured report.

BUSINESS INFORMATION:
Business Name: {state.get("business_name")}
Industry: {state.get("industry")}
Website: {state.get("website")}
Social Media Link: {state.get("social_link")}
Followers: {state.get("followers")}
Recent Posts: {state.get("recent_posts")}

PERFORM DETAILED ANALYSIS:

1. ONLINE PRESENCE EVALUATION
   - Overall quality of social media profiles
   - Branding consistency and visual appeal
   - Bio/description clarity and professionalism
   - Profile completeness

2. CONTENT ANALYSIS
   - Content quality and relevance to industry
   - Posting consistency and frequency
   - Content themes and variety
   - Visual presentation quality

3. ENGAGEMENT ASSESSMENT
   - Audience engagement levels
   - Call-to-Action effectiveness
   - Response time to comments/messages
   - Community building efforts

4. LEAD GENERATION CAPABILITY
   - Lead capture mechanisms
   - Email signup opportunities
   - Clear conversion paths
   - Sales enablement features

5. COMPETITIVE POSITIONING
   - Industry benchmark analysis
   - Unique value proposition clarity
   - Differentiation factors
   - Market positioning

Provide a comprehensive, realistic analysis (3-5 paragraphs).
Be specific and practical, not generic.
End with a SCORE out of 100 based on all factors.

Example format:
ANALYSIS:
[Detailed professional analysis here]

SCORE: [XX/100]
"""

def weakness_prompt(state):
    return f"""
Based on this analysis:

{state.get("analysis")}

IDENTIFY MAJOR WEAKNESSES:

Analyze and list the top 5-7 weaknesses in this business's social media and lead generation strategy.

Focus on:
• Content strategy gaps
• Lack of clear CTAs (Call-to-Actions)
• Branding inconsistencies
• Poor engagement mechanisms
• Missing lead generation systems
• Outdated messaging
• Low posting frequency
• Lack of personalization

Format as bullet points with brief explanations (1-2 sentences each).
Be honest, critical, and constructive.

Example:
• Weakness 1: Description here
• Weakness 2: Description here
"""

def opportunity_prompt(state):
    return f"""
Business Name: {state.get("business_name")}
Industry: {state.get("industry")}
Current Analysis: {state.get("analysis")}
Identified Weaknesses: {state.get("weaknesses")}

IDENTIFY BUSINESS OPPORTUNITIES:

Based on the weaknesses and current state, suggest concrete opportunities for improvement.

Focus on:
• Lead Generation: How to capture more qualified leads
• Brand Visibility: Strategies to increase awareness
• Content Improvement: Specific content gaps to fill
• Engagement Boost: Ways to increase interaction
• Conversion Optimization: Turning followers into customers
• Marketing Automation: Systems to scale outreach
• Customer Retention: Building loyalty and repeat business

Format as bullet points with actionable strategies (2-3 sentences each).
Be specific to their industry and current situation.
Focus on practical, implementable solutions.

Example:
• Opportunity 1: Specific strategy and how it solves a weakness
• Opportunity 2: Specific strategy and expected impact
"""

def pitch_prompt(state):
    return f"""
Create a SHORT, PERSONALIZED sales pitch for {state.get("business_name")}.

KEY INFORMATION:
Business: {state.get("business_name")}
Industry: {state.get("industry")}
Their Weaknesses: {state.get("weaknesses")}
Our Solutions: {state.get("opportunity")}

PITCH REQUIREMENTS:
1. Length: 3-4 sentences (60-90 words)
2. Tone: Friendly, professional, confident, not pushy
3. Structure:
   - Hook: Reference their specific challenge
   - Value: What we offer them
   - Benefit: How it helps their business
   - CTA: Next step

DO NOT be generic. Reference specific insights about their business.
Make them feel understood and seen.
Focus on outcomes: more leads, more revenue, more visibility.

Write the pitch as a single paragraph ready to use in a conversation or email.
"""

def call_script_prompt(state):
    return f"""
Create a PROFESSIONAL, PERSONALIZED cold call script for {state.get("business_name")}.

KEY INFORMATION:
Business Name: {state.get("business_name")}
Industry: {state.get("industry")}
Sales Pitch: {state.get("pitch")}
Website: {state.get("website")}

COLD CALL SCRIPT STRUCTURE:

1. GREETING & INTRODUCTION (15 seconds)
   - Friendly greeting
   - Name and company
   - Reason for calling (brief)

2. PERSONALIZED OBSERVATION (20 seconds)
   - Reference something specific about their business
   - Show you've done research
   - Build credibility

3. VALUE PROPOSITION (30 seconds)
   - Explain what we do
   - How it's relevant to them
   - Quick benefit statement

4. CONVERSATION TRIGGER (10 seconds)
   - Ask an engaging question
   - Show genuine interest
   - Invite dialogue

5. OBJECTION HANDLING (Prepare 2-3 responses)
   Common objection 1: "I'm not interested right now"
   Response: [Specific response]
   
   Common objection 2: "We don't have budget"
   Response: [Specific response]

6. CLOSING QUESTION (10 seconds)
   - Book a meeting
   - Schedule a call
   - Set next steps

SCRIPT REQUIREMENTS:
- Natural, conversational tone (not robotic)
- Include SPECIFIC details about their business
- Make it easy to remember and deliver
- Build rapport, not pressure
- Leave room for flexibility
- Ready to deliver in 2-3 minutes

Format clearly with speaker labels and timing.
Make it professional yet personable.
"""

def final_report_prompt(state):
    return f"""
Create a COMPREHENSIVE FINAL SALES STRATEGY REPORT for {state.get("business_name")}.

BUSINESS INFORMATION:
Business Name: {state.get("business_name")}
Industry: {state.get("industry")}

CURRENT DATA:
Analysis: {state.get("analysis")}
Weaknesses: {state.get("weaknesses")}
Opportunities: {state.get("opportunity")}
Sales Pitch: {state.get("pitch")}
Call Script: {state.get("call_script")}

GENERATE EXECUTIVE SUMMARY:

Create a professional, structured final report with these sections:

1. EXECUTIVE SUMMARY
   - 2-3 sentence overview of findings
   - Key opportunity identified
   - Recommended next step

2. MARKET POSITION
   - Where they stand in their industry
   - Competitive advantages
   - Areas for improvement

3. KEY RECOMMENDATIONS (Prioritized)
   - Top 3-5 actions they should take immediately
   - Expected impact for each
   - Timeline/priority

4. IMPLEMENTATION ROADMAP
   - Phase 1 (Weeks 1-2): Quick wins
   - Phase 2 (Weeks 3-4): Medium-term improvements
   - Phase 3 (Weeks 5-8): Long-term strategy

5. SUCCESS METRICS
   - What to measure
   - Target goals
   - Timeline for results

6. NEXT STEPS
   - How we can help
   - Investment required
   - Expected ROI

REPORT REQUIREMENTS:
- Professional, confident tone
- Data-driven and specific to their situation
- Actionable and implementable
- 2-3 pages of content
- Clear section headers
- Ready to present to decision makers
- Balance between analysis and recommendations

Make it compelling, credible, and persuasive.
"""