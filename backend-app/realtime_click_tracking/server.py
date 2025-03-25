from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.middleware.gzip import GZipMiddleware
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

r = redis.Redis(host='redis', port=6379, decode_responses=True)

@app.post("/clicks")
async def register_click(uid, count):
    r.incrby(uid, count)
    return {"status": "ok"}

@app.get("/clicks/{uid}")
async def get_clicks(uid):
    return {"clicks": r.get(uid)}