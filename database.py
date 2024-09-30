# database.py
import sqlite3
from models import Task

DATABASE_NAME = "todo.db"

def create_tables():
    with sqlite3.connect(DATABASE_NAME) as conn:
        cursor = conn.cursor()
        cursor.execute("""
            CREATE TABLE IF NOT EXISTS tasks (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                title TEXT NOT NULL,
                description TEXT,
                completed BOOLEAN
            )
        """)
        conn.commit()

def add_task(task):
    with sqlite3.connect(DATABASE_NAME) as conn:
        cursor = conn.cursor()
        cursor.execute("""
            INSERT INTO tasks (title, description, completed)
            VALUES (?, ?, ?)
        """, (task.title, task.description, task.completed))
        conn.commit()

def get_all_tasks():
    with sqlite3.connect(DATABASE_NAME) as conn:
        cursor = conn.cursor()
        cursor.execute("""
            SELECT id, title, description, completed FROM tasks
        """)
        tasks_data = cursor.fetchall()
        tasks = [Task(id, title, description, completed) for id, title, description, completed in tasks_data]
        return tasks

def update_task(task):
    with sqlite3.connect(DATABASE_NAME) as conn:
        cursor = conn.cursor()
        cursor.execute("""
            UPDATE tasks
            SET title=?, description=?, completed=?
            WHERE id=?
        """, (task.title, task.description, task.completed, task.id))
        conn.commit()

def delete_task(task_id):
    with sqlite3.connect(DATABASE_NAME) as conn:
        cursor = conn.cursor()
        cursor.execute("""
            DELETE FROM tasks WHERE id=?
        """, (task_id,))
        conn.commit()
