from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from fastapi.middleware.gzip import GZipMiddleware
import uvicorn
import redis

app = FastAPI()
origins = [
    "http://localhost:5173", 
]

#Middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
    )
app.add_middleware(GZipMiddleware, minimum_size=1000)

#Global Variables
LEADERBOARD = "leaderboard"

r = redis.Redis(host='localhost', port=6379, decode_responses=True)

@app.post("/clicks")
async def register_click(request: Request):
    data = await request.json()
    r.zincrby(LEADERBOARD, 1, data["uid"])
    return {"status": "ok"}

@app.get("/clicks/{uid}")
async def get_clicks_by_uid(uid: str):
    return {"click": int(r.zscore(LEADERBOARD, str(uid)))}

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)