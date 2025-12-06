import sqlite3

conn = sqlite3.connect("database.db")
cursor = conn.cursor()

cursor.execute("UPDATE products SET category = LOWER(category);")
conn.commit()

print("✅ Category column fixed successfully!")

conn.close()
