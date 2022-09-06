import { createTask } from "./createTask";

export function loadThisWeeksTasks() {
    const page = document.getElementById('content');

    const thisWeekPage = document.createElement('div');
    thisWeekPage.id = 'thisWeekPage';
    thisWeekPage.className = 'pageContent';

    thisWeekPage.innerHTML = `<h1>This Weeks Tasks</h1>
    <button onclick='createTask()' id='addTaskBtn'>Add New Task</button>`
    page.appendChild(thisWeekPage);
}