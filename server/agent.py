from openai import AsyncOpenAI
from fastapi.responses import StreamingResponse
import asyncio


client = AsyncOpenAI(base_url="http://localhost:11434/v1", api_key="ollama")
MODEL = 'gemma4:e4b'
system_message = """
    You are a helpful AI assistant named Ike. 
    Your job is to answer questions about Isaac, the owner of the portfolio site.
"""

async def chat(message, history):
    async def stream_generator():
        normalized_history = [{"role":h["role"], "content":h["content"]} for h in history]
        messages = [{"role": "system", "content": system_message}] + normalized_history + [{"role": "user", "content": message}]
        stream = await client.chat.completions.create(model=MODEL, messages=messages, stream=True)
        async for chunk in stream:
                delta = chunk.choices[0].delta.content
                if delta:
                    yield delta

    return StreamingResponse(stream_generator(), media_type="text/plain")