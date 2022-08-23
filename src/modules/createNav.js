import { pageLoad } from "./pageLoad";

export function createNav() {
    const page = document.getElementById('content');
    const sidebar = document.createElement('div');
    const header = document.createElement('div');
    const footer = document.createElement('div');

    footer.className = 'footer';
    header.className = 'header';
    sidebar.id = 'sidebar';

    header.innerHTML = `<h1 id='headerTitle'>TODO List</h1>
    <input id='searchbar' type='text' placeholder='Search'>`
    sidebar.innerHTML = `
    <h1 id='assignmentTitle'>Assignments</h1>`

    const sideButtonToday = ButtonFactory('todayBtn', 'sideBtns', 'Today')
    const sideButtonThisWeek = ButtonFactory('thisWeekBtn', 'sideBtns', 'This Week')
    const sideButtonCalendar = ButtonFactory('calendar', 'sideBtns', 'Calendar')
    const sideButtonOdin = ButtonFactory('project', 'sideBtns', 'Odin');
    const sideButtonAdd = ButtonFactory('addProject', 'sideBtn', 'Add Project');
    
    sidebar.appendChild(sideButtonToday)
    sidebar.appendChild(sideButtonThisWeek)
    sidebar.appendChild(sideButtonCalendar)

    sidebar.innerHTML +=`<h1 id='projectTitle'>My Projects</h1>`
    sidebar.appendChild(sideButtonOdin)
    sidebar.appendChild(sideButtonAdd)

    page.appendChild(header);
    page.appendChild(sidebar);
    page.appendChild(footer); 
}

function ButtonFactory(id, classname, text) { 
    var button = document.createElement('button');
    button.id = id;
    button.className = classname;
    button.textContent = text;
    button.addEventListener('click', function() {pageLoad(id)});
    return button;
    
}