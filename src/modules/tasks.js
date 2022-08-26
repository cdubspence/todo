import { loadTodayTasks } from "./today";

export function createTask() {
    const page = document.getElementById('content');
    const taskFormBox = document.createElement('div');
    taskFormBox.id = 'taskFormBox';
    taskFormBox.innerHTML =`<form id='taskForm'>
    <h1> Task info</h1>
    <input id='newTaskDescription' placeholder='Description'>
    <h2>Task Prioity</h2>
    <label for='newTaskPrioLow'><input type=radio id='newTaskPrioLow' name='newTaskPrio' value='low'>Low</label>
    
    <label for='newTaskPrioMedium'><input type=radio id='newTaskPrioMedium' name='newTaskPrio' value='medium>Medium</label>
    <label for='newTaskPrioHigh'><input type=radio id='newTaskPrioHigh' name='newTaskPrio' valie='high'>High</label>

    <h2>Completed</h2>
    True<input type='radio' id='newTaskCompletedTrue' name='newTaskCompleted' value='true'>
    False<input type='radio' id='newTaskCompletedFalse'name='newTaskCompleted' value='false'>
    <button onlcick='addNewTask(); return false' id='addNewTaskBtn'>Add Task</button>
    <button id='formCloseBtn'>X</button>
    </form>`

    page.style.backgroundColor = '#495464'
    page.style.opacity = '.5'
    document.body.appendChild(taskFormBox)
    taskFormBox.style.display = 'block'


    function Task(id, description, priority, completed) {
        this.id = id;
        this.description = description;
        this.priority = priority;
        this.completed = completed;
    }
    
    function addNewTask() {
        let tasksList = []
        let taskDescription = document.getElementById('newTaskDescription').value;
        let taskPrio = document.querySelector(`name='newTaskPrio'`).value;
        let taskCompleted = document.querySelector(`name='newTaskCompleted'`).value;
        let task = Task(1, taskDescription, taskPrio, taskCompleted);
        //check if its correct
        console.log(task, 'called from tasks')
        tasksList.push(task);
    }
}



