from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from agent import chat
from pydantic import BaseModel
from typing import List, Literal
from ingest import ingest_data
from langchain_core.messages import AIMessage, HumanMessage

class HistoryMessage(BaseModel):
    sender: Literal["user", "ai"]
    content: str


class Conversation(BaseModel):
    message: str
    history: List[HistoryMessage]

ingest_data()
app = FastAPI()

from answer import answer

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # Next's default port
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post('/chat')
async def sendChat(conversation: Conversation):
    print(conversation)
    normalized_history = [
        AIMessage(content=item.content) if item.sender == "ai" else HumanMessage(content=item.content)
        for item in conversation.history
    ]
    return await answer(conversation.message, normalized_history)

