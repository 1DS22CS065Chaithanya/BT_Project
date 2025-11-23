
import sqlite3
import jwt
import datetime
import re
import uuid
from flask import Blueprint, request, jsonify, g
from werkzeug.security import generate_password_hash, check_password_hash
from dotenv import load_dotenv
import os

load_dotenv()

SECRET = os.getenv("JWT_SECRET")
if not SECRET:
    raise Exception("JWT_SECRET not found in .env file")

DB_PATH = "database.db"

auth = Blueprint("auth", __name__)

EMAIL_RE = re.compile(r"^[^\s@]+@[^\s@]+\.[^\s@]+$")

def get_db():
    db = getattr(g, "_database", None)
    if db is None:
        db = g._database = sqlite3.connect(DB_PATH)
        db.row_factory = sqlite3.Row
    return db

def validate_password_strength(pw: str) -> str | None:
    if len(pw) < 8:
        return "Password must be at least 8 characters long"
    if not re.search(r"[A-Z]", pw):
        return "Password must contain at least one uppercase letter"
    if not re.search(r"[a-z]", pw):
        return "Password must contain at least one lowercase letter"
    if not re.search(r"\d", pw):
        return "Password must contain at least one digit"
    return None


@auth.route("/signup", methods=["POST"])
def signup():
    data = request.get_json() or {}
    username = (data.get("username") or "").strip()
    email = (data.get("email") or "").strip().lower()
    password = data.get("password") or ""

    # Basic validation
    if not username or not email or not password:
        return jsonify({"error": "Missing username, email, or password"}), 400

    if len(username) < 3:
        return jsonify({"error": "Username must be at least 3 characters"}), 400

    if not EMAIL_RE.match(email):
        return jsonify({"error": "Invalid email address"}), 400

    pw_err = validate_password_strength(password)
    if pw_err:
        return jsonify({"error": pw_err}), 400

    db = get_db()

    # uniqueness checks
    cur = db.execute("SELECT 1 FROM users WHERE username = ?", (username,))
    if cur.fetchone():
        return jsonify({"error": "Username already exists"}), 400

    cur = db.execute("SELECT 1 FROM users WHERE email = ?", (email,))
    if cur.fetchone():
        return jsonify({"error": "Email already exists"}), 400

    # store hashed password
    hashed = generate_password_hash(password)

    try:
        db.execute(
            "INSERT INTO users (id, username, email, password_hash) VALUES (?, ?, ?, ?)",
            (str(uuid.uuid4()), username, email, hashed),
        )
        db.commit()
    except sqlite3.IntegrityError:
        return jsonify({"error": "Failed to create user"}), 500

    return jsonify({"message": "User created successfully"}), 201

@auth.route("/login", methods=["POST"])
def login():
    data = request.get_json() or {}
    username = (data.get("username") or "").strip()
    password = data.get("password") or ""

    if not username or not password:
        return jsonify({"error": "Missing username or password"}), 400

    db = get_db()
    cur = db.execute("SELECT * FROM users WHERE username = ?", (username,))
    user = cur.fetchone()

    if not user or not check_password_hash(user["password_hash"], password):
        # note: return 401 for auth failure
        return jsonify({"error": "Invalid username or password"}), 401

    payload = {
        "user_id": user["id"],
        "username": user["username"],
        "email": user["email"],
        "exp": datetime.datetime.utcnow() + datetime.timedelta(hours=2),
    }

    token = jwt.encode(payload, SECRET, algorithm="HS256")
    return jsonify({"token": token, "username": user["username"], "email": user["email"]}), 200


@auth.route("/verify", methods=["POST"])
def verify():
    data = request.get_json() or {}
    token = data.get("token")
    if not token:
        return jsonify({"valid": False}), 401
    try:
        decoded = jwt.decode(token, SECRET, algorithms=["HS256"])
        return jsonify({"valid": True, "user": decoded}), 200
    except Exception:
        return jsonify({"valid": False}), 401
