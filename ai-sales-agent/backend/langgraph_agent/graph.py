from langgraph.graph import StateGraph, START, END
from langgraph_agent.state import SalesAgentState
from langgraph_agent.nodes import (
    analyze_social_media,
    find_weaknesses,
    find_opportunity,
    generate_pitch,
    generate_call_script,
    final_response
)

def build_sales_agent_graph():
    workflow = StateGraph(SalesAgentState)

    workflow.add_node("analyze_social_media", analyze_social_media)
    workflow.add_node("find_weaknesses", find_weaknesses)
    workflow.add_node("find_opportunity", find_opportunity)
    workflow.add_node("generate_pitch", generate_pitch)
    workflow.add_node("generate_call_script", generate_call_script)
    workflow.add_node("final_response", final_response)

    workflow.add_edge(START, "analyze_social_media")
    workflow.add_edge("analyze_social_media", "find_weaknesses")
    workflow.add_edge("find_weaknesses", "find_opportunity")
    workflow.add_edge("find_opportunity", "generate_pitch")
    workflow.add_edge("generate_pitch", "generate_call_script")
    workflow.add_edge("generate_call_script", "final_response")
    workflow.add_edge("final_response", END)

    return workflow.compile()