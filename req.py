import requests

# Replace these values with the appropriate title and description for your task
data = {
    
    "title": "Task Title",
    "description": "Task Description",
    "completed": True
}

# Make the POST request to the backend URL
response = requests.delete("http://127.0.0.1:5000/tasks/1", json=data)

# Check the response status code to see if the request was successful (status code 200)
if response.status_code == 200:
    print("Task created successfully!")
else:
    print("Failed to create task.")
