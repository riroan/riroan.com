from fastapi import FastAPI, status
from pydantic import BaseModel
from pydantic_settings import BaseSettings, SettingsConfigDict
from fastapi.middleware.cors import CORSMiddleware
import pymysql
import uvicorn

app = FastAPI()

origins = [
    "*"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class Referrer(BaseModel):
    referrer: str


class Settings(BaseSettings):
    db_host: str
    db_user: str
    db_password: str
    db_name: str
    db_port: int

    model_config = SettingsConfigDict(
        env_file=".env",
        env_file_encoding="utf-8"
    )


settings = Settings()


@app.post("/referrer", status_code=status.HTTP_201_CREATED)
async def add_referrer(referrer: Referrer):
    connection = pymysql.connect(
        host=settings.db_host,
        user=settings.db_user,
        password=settings.db_password,
        db=settings.db_name,
        port=settings.db_port,
        charset='utf8',
    )

    cursor = connection.cursor(pymysql.cursors.DictCursor)
    sql = f"INSERT INTO visit (referrer) VALUES (\"{referrer.referrer}\")"
    cursor.execute(sql)
    connection.commit()

    cursor.close()
    connection.close()

if __name__ == "__main__":
    uvicorn.run("main:app", host="0.0.0.0", port=8080)
