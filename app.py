from flask import Flask,request,jsonify
import sqlite3
app=Flask(__name__)
DATABASE="database.db"
def get_db_connection():
    conn=sqlite3.connect(DATABASE)
    conn.row_factory=sqlite3.Row
    return conn
@app.route("/todos",methods=["GET"])
def get_todos():
    conn=get_db_connection()
    todos=conn.execute("SELECT * FROM todos").fetchall()
    conn.close()
    todos_list=[dict(todo) for todo in todos]
    return jsonify(todos_list)
@app.route("/todos/<int:todo_id>",methods=["GET"])
def get_todo(todo_id):
    conn=get_db_connection()
    todo=conn.execute("SELECT * FROM todos WHERE id=?",(todo_id,)).fetchone()
    conn.close()
    if todo is None:
        return jsonify({"error":"Todo not found"}),404
    return jsonify(dict(todo))
@app.route("/todos",methods=["POST"])
def create_todo():
    data=request.get_json()
    title=data.get("title")
    description=data.get("description","")
    if not title:
        return jsonify({"error":"Title is required"}),400
    conn=get_db_connection()
    cursor=conn.cursor()
    cursor.execute("INSERT INTO todos(title,description,done) VALUES(?,?,0)",(title,description))
    conn.commit()
    new_id=cursor.lastrowid
    conn.close()
    return jsonify({"id":new_id,"title":title,"description":description,"done":False}),201
@app.route("/todos/<int:todo_id>",methods=["PUT"])
def update_todo(todo_id):
    data=request.get_json()
    title=data.get("title")
    description=data.get("description")
    done=data.get("done")
    conn=get_db_connection()
    cursor=conn.cursor()
    cursor.execute("SELECT * FROM todos WHERE id=?",(todo_id,))
    todo=cursor.fetchone()
    if todo is None:
        conn.close()
        return jsonify({"error":"Todo is not found"}),404
    cursor.execute("UPDATE todos SET title=?,description=?,done=? WHERE id=?",(title or todo["title"],description or todo["description"],int(done) if done is not None else todo["done"],todo_id))
    conn.commit()
    conn.close()
    return jsonify({"message":"Updated successfully"})
@app.route("/todos/<int:todo_id>",methods=["DELETE"])
def delete_todo(todo_id):
    conn=get_db_connection()
    cursor=conn.cursor()
    cursor.execute("DELETE FROM todos WHERE id=?",(todo_id,))
    conn.commit()
    conn.close()
    return jsonify({"message":"Todo Deleted"})
if __name__=="__main__":
    app.run(debug=True)
    

