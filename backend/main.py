from fastapi import FastAPI

app = FastAPI()


@app.get("/")
async def root():
    return {"message": "Backend работает 🚀"}


@app.get("/balance/{user_id}")
async def get_balance(user_id: int):
    return {"balance": 1000}