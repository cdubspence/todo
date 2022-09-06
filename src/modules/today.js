import { createTask } from "./createTask";
import { Task } from "./task";

export function loadTodayTasks() {
    const todaysTasks = [];


    const page = document.getElementById('content');
    const addBtn = document.createElement('button');
    const taskArea = document.createElement('div');

    taskArea.id = 'todaysTasks'
    addBtn.id = 'addTaskBtn';
    addBtn.textContent = 'Add New Task';
    addBtn.onclick = function() {
        createTask()
        document.getElementById('addNewTaskBtn').addEventListener('click', addNewTask)
    }
    const todayPage = document.createElement('div');
    todayPage.id = 'todayPage';
    todayPage.className = 'pageContent';

    taskArea.textContent = createTask.taskList;
    todayPage.innerHTML = `<h1> Todays Tasks</h1>`
    todayPage.appendChild(taskArea)
    todayPage.appendChild(addBtn)
    page.appendChild(todayPage);

    function addNewTask() {
        let tasksList = []
        let taskDescription = document.getElementById('newTaskDescription').value;
        let taskPrio = document.querySelector(`name='newTaskPrio'`).value;
        let taskCompleted = document.querySelector(`name='newTaskCompleted'`).value;
        let task = new Task(1, taskDescription, taskPrio, taskCompleted);
        
        todaysTasks.push(task);
        console.log(todaysTasks)
        console.log('called')
        return false
    }
}