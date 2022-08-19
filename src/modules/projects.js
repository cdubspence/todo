let listOfProjects = [];
function Project(title, description, list) {
    this.title = title;
    this.description = description;
    this.list = list;

    this.addTask = function(task) {
        list.push(task);
    }
    this.removeTask = function(task) {
        this.list = this.list.filter(listItem => listItem != task);
    }
    this.deleteProject = function(projectName) {
        listOfProjects = listOfProjects.filter(name => name != projectName)
    }

    

}

export function createProject() {

    
    //add it to the master list of projects
    listOfProjects.push(this)
}