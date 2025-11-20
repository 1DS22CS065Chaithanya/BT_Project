# backend/utils.py
import os
import time
import uuid
import jwt
from passlib.hash import bcrypt
from flask import request, g, jsonify

JWT_SECRET = os.getenv("JWT_SECRET_KEY", "dev_secret_change_me")
ACCESS_TOKEN_EXPIRES = int(os.getenv("ACCESS_TOKEN_EXPIRES", 15 * 60))  # 15 minutes
REFRESH_TOKEN_EXPIRES = int(os.getenv("REFRESH_TOKEN_EXPIRES", 7 * 24 * 3600))  # 7 days
ALGORITHM = "HS256"

def hash_password(password: str) -> str:
    return bcrypt.hash(password)

def verify_password(password: str, hashed: str) -> bool:
    return bcrypt.verify(password, hashed)

def create_access_token(user_id: str) -> str:
    now = int(time.time())
    payload = {
        "sub": user_id,
        "type": "access",
        "iat": now,
        "exp": now + ACCESS_TOKEN_EXPIRES,
        "jti": str(uuid.uuid4())
    }
    return jwt.encode(payload, JWT_SECRET, algorithm=ALGORITHM)

def create_refresh_token(user_id: str) -> str:
    now = int(time.time())
    payload = {
        "sub": user_id,
        "type": "refresh",
        "iat": now,
        "exp": now + REFRESH_TOKEN_EXPIRES,
        "jti": str(uuid.uuid4())
    }
    return jwt.encode(payload, JWT_SECRET, algorithm=ALGORITHM)

def decode_token(token: str):
    try:
        payload = jwt.decode(token, JWT_SECRET, algorithms=[ALGORITHM])
        return payload
    except jwt.ExpiredSignatureError:
        return {"error": "expired"}
    except Exception as e:
        return {"error": str(e)}

# decorator-like function for route usage
def get_token_from_header():
    auth = request.headers.get("Authorization", "")
    if auth and auth.startswith("Bearer "):
        return auth.split(" ", 1)[1]
    return None

def get_current_user_id_from_access():
    token = get_token_from_header()
    if not token:
        return None, {"error": "missing token"}
    payload = decode_token(token)
    if "error" in payload:
        return None, payload
    if payload.get("type") != "access":
        return None, {"error": "invalid token type"}
    return payload.get("sub"), None
