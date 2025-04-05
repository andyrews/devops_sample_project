from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from fastapi.middleware.gzip import GZipMiddleware
from sqlalchemy.ext.asyncio import create_async_engine, AsyncSession
from sqlalchemy.orm import sessionmaker
import uvicorn
import redis

app = FastAPI()
origins = [
    "http://localhost:5173",
]

# Middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
app.add_middleware(GZipMiddleware, minimum_size=1000)

# Global Variables
LEADERBOARD = "leaderboard"

r = redis.Redis(host="localhost", port=6379, decode_responses=True)

@app.get("/leaderboard")
async def getTopBoard(n = 10):
    #returns [(),()]
    scores = r.zrange(LEADERBOARD, 0, n-1, withscores=True, desc=True)
    
    #format to [{}, {}]
    return [dict(zip(["uid", "click"], vals)) for vals in scores]

if __name__ == "__main__":
    uvicorn.run("leaderboard-server:app", host="0.0.0.0", port=8001, reload=True)
