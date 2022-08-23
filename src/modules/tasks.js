export function createTask() {
    const page = document.getElementById('content');

    const taskFormBox = document.createElement('div');
    taskFormBox.innerHTML =`<form id='taskForm'>
    <h1> Task info</h1>
    <input id='newTaskDescription' placeholder='Description'>
    <h2>Task Prioity</h2>
    Low<input type=radio id='newTaskPrioLow' name='newTaskPrio'>
    Medium<input type=radio id='newTaskPrioMedium' name='newTaskPrio'>
    High<input type=radio id='newTaskPrioHigh' name='newTaskPrio'>
    <h2>Completed</h2>
    True<input type='radio' id='newTaskCompletedTrue' name='newTaskCompleted'>
    False<input type='radio' id='newTaskCompletedFalse'name='newTaskCompleted'>
    <button onlcick='addNewTask()' id='addNewTaskBtn'>Add Task</button>
    </form>`

    page.appendChild(taskFormBox);
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