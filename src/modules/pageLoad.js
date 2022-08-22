import { loadHomePage } from "./home";
import { loadProjects } from "./projects";

export function pageLoad(page) {
    const content = document.getElementById('content');
    content.removeChild(content.childNodes[2])
    if(page == 'todayBtn') {
        return loadTodayTasks()
    } else if (page == 'thisWeekBtn') {
        return loadThisWeeksTasks()
    } else if (page == 'calender') {
        return loadCalender()
    } else if(page == 'project') {
        return loadProjects()
    } else {
       return loadHomePage()
    }
}