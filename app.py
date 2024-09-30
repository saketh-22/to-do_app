# app.py
from flask import Flask, jsonify, request
from models import Task
import database

app = Flask(__name__)

@app.route("/tasks", methods=["GET"])
def get_tasks():
    tasks = database.get_all_tasks()
    return jsonify([task.__dict__ for task in tasks])

@app.route("/tasks", methods=["POST"])
def create_task():
    data = request.get_json()
    task = Task(None, data["title"], data["description"], False)
    database.add_task(task)
    return jsonify({"message": "Task created successfully"})

@app.route("/tasks/<int:task_id>", methods=["PUT"])
def update_task(task_id):
    data = request.get_json()
    task = Task(task_id, data["title"], data["description"], data["completed"])
    database.update_task(task)
    return jsonify({"message": "Task updated successfully"})

@app.route("/tasks/<int:task_id>", methods=["DELETE"])
def delete_task(task_id):
    database.delete_task(task_id)
    return jsonify({"message": "Task deleted successfully"})

if __name__ == "__main__":
    database.create_tables()
    app.run(debug=True)
