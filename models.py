import sqlite3

def create_table():
    conn = sqlite3.connect("database.db")
    cursor = conn.cursor()
    
    cursor.execute("""
    CREATE TABLE IF NOT EXISTS todos (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT NOT NULL,
        description TEXT,
        done BOOLEAN NOT NULL CHECK (done IN (0,1))
    )
    """)
    
    conn.commit()
    conn.close()

if __name__ == "__main__":
    create_table()
    print("Database and table created!")
