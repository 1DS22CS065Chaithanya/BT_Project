import sqlite3

DB_PATH = "database.db"

conn = sqlite3.connect(DB_PATH)
conn.row_factory = sqlite3.Row
cur = conn.cursor()

print("\n📦 PRODUCTS TABLE")
print("------------------------------------")
cur.execute("SELECT * FROM products")
rows = cur.fetchall()
for r in rows:
    print(dict(r))

print("\n👤 USERS TABLE")
print("------------------------------------")
cur.execute("SELECT * FROM users")
rows = cur.fetchall()
for r in rows:
    print(dict(r))

conn.close()
