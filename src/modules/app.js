import Todo from "./todo.js";
import Project from "./project.js";

class App {
  constructor() {
    this.projects = [];
    this.createDefaultProject();
  }

  createDefaultProject() {
    const today = new Date();
    const name = today.toLocaleDateString();
    const startDate = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate(),
      0,
      0,
      0,
    );
    const deadline = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate(),
      23,
      59,
      59,
    );
    const defaultProject = new Project(name, [], startDate, deadline);

    this.projects.push(defaultProject);
  }

  addProject(name, startDate, deadline) {
    const newProject = new Project(name, [], startDate, deadline);
    this.projects.push(newProject);
    return newProject;

  }

  removeProject(projectId) {
    const index = this.projects.findIndex(project => project.id === projectId);
    if (index !== -1) {
        this.projects.splice(index, 1);
    }

  }

  getProject(projectId) {
    return this.projects.find(project => project.id === projectId);

  }

  getAllProjects(){
    return this.projects;

  }
}

export default new App();
