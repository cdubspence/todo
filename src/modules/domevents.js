export function domLoad() {

    //today / home page
    function loadTodayTasks() {
        const todaysTasks = [];
        console.log(todaysTasks, 'called from today')
        const page = document.getElementById('content');
        const addBtn = document.createElement('button');
        const taskArea = document.createElement('div');
        taskArea.id = 'todaysTasks'
        addBtn.id = 'addTaskBtn';
        addBtn.textContent = 'Add New Task';
        addBtn.onclick = function() {
            createTask()
        }
        const todayPage = document.createElement('div');
        todayPage.id = 'todayPage';
        todayPage.className = 'pageContent';
    
        taskArea.textContent = createTask.taskList;
        todayPage.innerHTML = `<h1> Todays Tasks</h1>`
        todayPage.appendChild(taskArea)
        todayPage.appendChild(addBtn)
        page.appendChild(todayPage);
    }

    //this week
    function loadThisWeeksTasks() {
        const page = document.getElementById('content');
    
        const thisWeekPage = document.createElement('div');
        thisWeekPage.id = 'thisWeekPage';
        thisWeekPage.className = 'pageContent';
    
        thisWeekPage.innerHTML = `<h1>This Weeks Tasks</h1>
        <button onclick='createTask()' id='addTaskBtn'>Add New Task</button>`
        page.appendChild(thisWeekPage);
    }

    //default proj

    //new task
    function createTask() {
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
    
    }

    //new proj? how are we doing this one?
    return [
        loadTodayTasks,
        createTask,
        loadThisWeeksTasks,
    ]
}