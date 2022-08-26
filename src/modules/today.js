import { createTask } from "./tasks";

export function loadTodayTasks() {
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