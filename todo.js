let newTask = document.getElementById("new-task")
let newTaskSubmit = document.getElementById("add-task")
let numberofTasks = 5
// initialize an array to store tasks
const taskListArray = []

let count = 0
newTaskSubmit.addEventListener('submit', function newSubmit(event) {
    event.preventDefault();
    if (newTask.value) {
        count++
        addTask()
    }
    else {
        alert ("Please enter a task!")
    }
    const element = document.querySelector(".edit")
    const task_content_ele = element.parentElement.previousElementSibling.querySelector('.new')
    element.addEventListener('click', (e) => {
        if (element.innerText.toLowerCase() == "edit") {
            element.innerText = "Save";
            // const task_content_ele = document.getElementById('.new')
            task_content_ele.removeAttribute("readonly");
            task_content_ele.focus();
        } else {
            element.innerText = "Edit";
            task_content_ele.setAttribute("readonly", "readonly");
        }
    });

    const task_del = document.querySelector(".delete")
    task_del.addEventListener('click', (e) => {
        task_del.closest(".task").remove()
        count--

    })
    newTask.value = ""

    
})




// task_delete_el.addEventListener('click', (e) => {
//     list_el.removeChild(task_el);
// });

function addTask (){
    
    if (newTask.value){
        taskListArray.push(newTask.value)
        // console.log(taskListArray)
    }
    if (count > numberofTasks) {
        // delete last added html element
        console.log(count)
        count--
        const taskparent = document.getElementById("displayarea")
        // console.log(taskparent.children)
        taskparent.removeChild(taskparent.lastChild)
        displayTask()
        
    }
    else{
        displayTask()
                                
    }
    
}

function displayTask() {
    // console.log(count)
    const referencetask = document.querySelector(".task")
    const parent = document.getElementById("displayarea")
    const task_ele = document.createElement('div')
    task_ele.classList.add("task")
    

    const showtask_ele = document.createElement('div')
    showtask_ele.classList.add("showtask")
    task_ele.appendChild(showtask_ele)

    const new_task = document.createElement('input')
    new_task.classList.add("new")
    new_task.type = 'text'
    new_task.value = newTask.value
    new_task.setAttribute('readonly', 'readonly')
    showtask_ele.appendChild(new_task)

    const task_actions_el = document.createElement('div');
    task_actions_el.classList.add('actions');
    
    const task_edit_el = document.createElement('button');
    task_edit_el.classList.add('edit');
    task_edit_el.innerText = 'Edit';

    const task_delete_el = document.createElement('button');
    task_delete_el.classList.add('delete');
    task_delete_el.innerText = 'Delete';

    task_actions_el.appendChild(task_edit_el);
    task_actions_el.appendChild(task_delete_el);

    task_ele.appendChild(task_actions_el);
    parent.prepend(task_ele)
    

}

// function to display newly added tasks on top
// function insertAfter(referenceNode, newNode) {
//     if (referenceNode.nextSibling) {
//         referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
//       } else if (referenceNode) {
//         referenceNode.parentNode.appendChild(newNode);
//       }
//       else {
//         const pseudo = document.getElementById("displayarea")
//         pseudo.appendChild(newNode)
//       }
//   }

