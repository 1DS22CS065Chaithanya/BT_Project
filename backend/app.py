
from flask import Flask, jsonify, request, g
from flask_cors import CORS
import sqlite3
import uuid
from user_auth import auth

DB_PATH = "database.db"


app = Flask(__name__)
CORS(app)

app.register_blueprint(auth)



def get_db():
    db = getattr(g, "_database", None)
    if db is None:
        db = g._database = sqlite3.connect(DB_PATH)
        db.row_factory = sqlite3.Row
    return db


@app.teardown_appcontext
def close_connection(exception):
    db = getattr(g, "_database", None)
    if db is not None:
        db.close()


def row_to_product(row):
    return {
        "id": row["id"],
        "name": row["name"],
        "price": row["price"],
        "description": row["description"],
        "image": row["image"],
        "inStock": bool(row["in_stock"]),
        "discount": row["discount"] if row["discount"] is not None else 0,
    }




@app.route("/products", methods=["GET"])
def list_products():
    db = get_db()
    cur = db.execute("SELECT * FROM products ORDER BY rowid DESC")
    rows = cur.fetchall()
    return jsonify([row_to_product(r) for r in rows]), 200


@app.route("/products/<id>", methods=["GET"])
def get_product(id):
    db = get_db()
    cur = db.execute("SELECT * FROM products WHERE id = ?", (id,))
    row = cur.fetchone()
    if row is None:
        return jsonify({"error": "Product not found"}), 404
    return jsonify(row_to_product(row)), 200


@app.route("/products", methods=["POST"])
def add_product():
    data = request.get_json()
    if not data:
        return jsonify({"error": "Missing JSON body"}), 400

    name = data.get("name")
    price = data.get("price")
    image = data.get("image")

    if not name or price is None or image is None:
        return jsonify({"error": "Missing required fields"}), 400

    description = data.get("description", "")
    in_stock = 1 if data.get("inStock", True) else 0
    discount = int(data.get("discount", 0))
    prod_id = data.get("id") or str(uuid.uuid4())

    db = get_db()
    try:
        db.execute(
            "INSERT INTO products (id, name, price, description, image, in_stock, discount) VALUES (?, ?, ?, ?, ?, ?, ?)",
            (prod_id, name, price, description, image, in_stock, discount),
        )
        db.commit()
    except sqlite3.IntegrityError:
        return jsonify({"error": "Product with this id already exists"}), 400

    cur = db.execute("SELECT * FROM products WHERE id = ?", (prod_id,))
    return jsonify(row_to_product(cur.fetchone())), 201


@app.route("/products/<id>", methods=["PUT"])
def update_product(id):
    data = request.get_json()
    if not data:
        return jsonify({"error": "Missing JSON body"}), 400

    allowed = {"name", "price", "description", "image", "inStock", "discount"}
    fields = {}

    for key in allowed:
        if key in data:
            if key == "inStock":
                fields["in_stock"] = 1 if data["inStock"] else 0
            else:
                col = "discount" if key == "discount" else key
                fields[col] = data[key]

    if not fields:
        return jsonify({"error": "No updatable fields provided"}), 400

    db = get_db()

    cur = db.execute("SELECT * FROM products WHERE id = ?", (id,))
    if cur.fetchone() is None:
        return jsonify({"error": "Product not found"}), 404

    cols = ", ".join([f"{k} = ?" for k in fields.keys()])
    values = list(fields.values()) + [id]

    db.execute(f"UPDATE products SET {cols} WHERE id = ?", values)
    db.commit()

    cur = db.execute("SELECT * FROM products WHERE id = ?", (id,))
    return jsonify(row_to_product(cur.fetchone())), 200



if __name__ == "__main__":
    app.run(debug=True, port=3001)
