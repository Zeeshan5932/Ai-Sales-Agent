from langgraph_agent.graph import build_sales_agent_graph

def run_social_analysis(data: dict):
    agent = build_sales_agent_graph()

    result = agent.invoke({
        "business_name": data.get("business_name"),
        "industry": data.get("industry"),
        "website": data.get("website"),
        "social_link": data.get("social_link"),
        "followers": data.get("followers"),
        "recent_posts": data.get("recent_posts"),

        "analysis": None,
        "weaknesses": None,
        "opportunity": None,
        "pitch": None,
        "call_script": None,
        "final_report": None
    })

    return result