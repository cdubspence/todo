export function createTask() {
    const page = document.getElementById('content');

    const taskFormBox = document.createElement('div');
    taskFormBox.id = 'taskFormBox';
    taskFormBox.innerHTML =`<form id='taskForm'>
    <h1> Task info</h1>
    <input id='newTaskDescription' placeholder='Description'>
    <h2>Task Prioity</h2>
    <label for='newTaskPrioLow'><input type=radio id='newTaskPrioLow' name='newTaskPrio'>Low</label>
    
    <label for='newTaskPrioMedium'><input type=radio id='newTaskPrioMedium' name='newTaskPrio'>Medium</label>
    <label for='newTaskPrioHigh'><input type=radio id='newTaskPrioHigh' name='newTaskPrio'>High</label>

    <h2>Completed</h2>
    True<input type='radio' id='newTaskCompletedTrue' name='newTaskCompleted'>
    False<input type='radio' id='newTaskCompletedFalse'name='newTaskCompleted'>
    <button onlcick='addNewTask()' id='addNewTaskBtn'>Add Task</button>
    <button id='formCloseBtn'>X</button>
    </form>`

    page.style.backgroundColor = '#495464'
    page.style.opacity = '.5'
    document.body.appendChild(taskFormBox)
    taskFormBox.style.display = 'block'
}

function addNewTask() {
    
    let task = Task()
}

function Task(id, description, priority, completed) {
    this.id = id;
    this.description = description;
    this.priority = priority;
    this.completed = completed;
}