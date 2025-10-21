# init_db.py
import sqlite3

def init_db(db_path="database.db", schema_file="schema.sql"):
    conn = sqlite3.connect(db_path)
    with open(schema_file, "r", encoding="utf-8") as f:
        sql = f.read()
    conn.executescript(sql)
    conn.commit()
    conn.close()
    print("Initialized database:", db_path)

if __name__ == "__main__":
    init_db()
