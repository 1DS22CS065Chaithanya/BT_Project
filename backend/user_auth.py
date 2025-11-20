import sqlite3
import jwt
import datetime
from flask import Blueprint, request, jsonify, g
from werkzeug.security import generate_password_hash, check_password_hash
from dotenv import load_dotenv
import os
import uuid

load_dotenv()

SECRET = os.getenv("JWT_SECRET")
if not SECRET:
    raise Exception("JWT_SECRET not found in .env file")

DB_PATH = "database.db"

auth = Blueprint("auth", __name__)

def get_db():
    db = getattr(g, "_database", None)
    if db is None:
        db = g._database = sqlite3.connect(DB_PATH)
        db.row_factory = sqlite3.Row
    return db


# ---------------------------
# SIGNUP
# ---------------------------
@auth.route("/signup", methods=["POST"])
def signup():
    data = request.json
    username = data.get("username")
    email = data.get("email")
    password = data.get("password")

    if not username or not email or not password:
        return jsonify({"error": "Missing username, email, or password"}), 400

    db = get_db()

    # Check username
    cur = db.execute("SELECT * FROM users WHERE username=?", (username,))
    if cur.fetchone():
        return jsonify({"error": "Username already exists"}), 400

    # Check email
    cur = db.execute("SELECT * FROM users WHERE email=?", (email,))
    if cur.fetchone():
        return jsonify({"error": "Email already exists"}), 400

    hashed = generate_password_hash(password)

    db.execute(
        "INSERT INTO users (id, username, email, password_hash) VALUES (?, ?, ?, ?)",
        (str(uuid.uuid4()), username, email, hashed)
    )
    db.commit()

    return jsonify({"message": "User created successfully"}), 201


# ---------------------------
# LOGIN
# ---------------------------
@auth.route("/login", methods=["POST"])
def login():
    data = request.json
    username = data.get("username")
    password = data.get("password")

    db = get_db()
    cur = db.execute("SELECT * FROM users WHERE username=?", (username,))
    user = cur.fetchone()

    if not user or not check_password_hash(user["password_hash"], password):
        return jsonify({"error": "Invalid username or password"}), 400

    payload = {
        "user_id": user["id"],
        "username": user["username"],
        "email": user["email"],
        "exp": datetime.datetime.utcnow() + datetime.timedelta(hours=1)
    }

    token = jwt.encode(payload, SECRET, algorithm="HS256")

    return jsonify({
        "token": token,
        "username": user["username"],
        "email": user["email"]
    }), 200


# ---------------------------
# VERIFY TOKEN
# ---------------------------
@auth.route("/verify", methods=["POST"])
def verify():
    token = request.json.get("token")

    if not token:
        return jsonify({"valid": False}), 401

    try:
        decoded = jwt.decode(token, SECRET, algorithms=["HS256"])
        return jsonify({"valid": True, "user": decoded}), 200
    except:
        return jsonify({"valid": False}), 401
