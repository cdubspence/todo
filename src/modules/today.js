import { createTask } from "./tasks";

export function loadTodayTasks() {
    const page = document.getElementById('content');

    const todayPage = document.createElement('div');
    todayPage.id = 'todayPage';
    todayPage.className = 'pageContent';

    todayPage.innerHTML = `<h1> Todays Tasks</h1>
    <button onclick=createTask()' id='addTaskBtn'>Add New Task</button>`
    page.appendChild(todayPage);
}