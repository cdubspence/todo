import { loadTodayTasks } from "./today";
import { loadThisWeeksTasks } from "./thisweek";
import { loadCalender } from "./calendar";

export function pageLoad(page) {
    const content = document.getElementById('content');
    content.removeChild(content.childNodes[3]) //is there a better way to remove current content? 
    if(page == 'todayBtn') {
        return loadTodayTasks()
    } else if (page == 'thisWeekBtn') {
        return loadThisWeeksTasks()
    } else if (page == 'calender') {
        return loadCalender()
    } else if(page == 'project') {
        return loadProjects()
    } else {
        loadTodayTasks()
    }
}