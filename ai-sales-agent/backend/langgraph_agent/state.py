from typing import TypedDict, Optional

class SalesAgentState(TypedDict):
    business_name: str
    industry: str
    website: Optional[str]
    social_link: Optional[str]
    followers: Optional[str]
    recent_posts: Optional[str]

    analysis: Optional[str]
    weaknesses: Optional[str]
    opportunity: Optional[str]
    pitch: Optional[str]
    call_script: Optional[str]
    final_report: Optional[str]