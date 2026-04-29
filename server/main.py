from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from agent import chat
from pydantic import BaseModel
from typing import List, Literal



class HistoryMessage(BaseModel):
    sender: Literal["user", "ai"]
    content: str


class Conversation(BaseModel):
    message: str
    history: List[HistoryMessage]


app = FastAPI()

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
        {
            "role": "assistant" if item.sender == "ai" else "user",
            "content": item.content,
        }
        for item in conversation.history
    ]
    return await chat(conversation.message, normalized_history)

