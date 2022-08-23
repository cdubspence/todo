import { createTask } from "./tasks";

export function loadTodayTasks() {
    const page = document.getElementById('content');
    const addBtn = document.createElement('button');
    addBtn.id = 'addTaskBtn';
    addBtn.textContent = 'Add New Task';
    addBtn.onclick = function() {
        createTask()
    }
    const todayPage = document.createElement('div');
    todayPage.id = 'todayPage';
    todayPage.className = 'pageContent';


    todayPage.innerHTML = `<h1> Todays Tasks</h1>`
    todayPage.appendChild(addBtn)
    page.appendChild(todayPage);
}