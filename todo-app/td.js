const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

displayTasks();

addBtn.addEventListener("click", addTask);

taskInput.addEventListener("keypress", function(e){

    if(e.key==="Enter"){
        addTask();
    }

});

function addTask(){

    const text = taskInput.value.trim();

    if(text===""){
        alert("Please enter a task");
        return;
    }

    tasks.push({
        text:text,
        completed:false
    });

    saveTasks();

    taskInput.value="";

    displayTasks();

}

function displayTasks(){

    taskList.innerHTML="";

    tasks.forEach((task,index)=>{

        const li=document.createElement("li");

        const span=document.createElement("span");

        span.innerText=task.text;

        span.className="task";

        if(task.completed){
            span.classList.add("completed");
        }

        span.onclick=()=>{

            task.completed=!task.completed;

            saveTasks();

            displayTasks();

        };

        const del=document.createElement("button");

        del.innerText="Delete";

        del.className="delete";

        del.onclick=()=>{

            tasks.splice(index,1);

            saveTasks();

            displayTasks();

        };

        li.appendChild(span);

        li.appendChild(del);

        taskList.appendChild(li);

    });

}

function saveTasks(){

    localStorage.setItem("tasks",JSON.stringify(tasks));

}
