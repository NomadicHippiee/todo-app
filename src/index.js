import "./style.css";
import header from "./components/header.js";
import projectList from "./components/projectList.js";
import addProjectForm from "./components/addProjectForm.js";
import app from "./modules/app.js";
import addTodoForm from "./components/addTodoForm.js";
import todosView from "./components/todosView.js";

console.log("All projects:", app.getAllProjects());

console.log("Webpack is alive!");

//Create UI

const mainSection = document.createElement("main");
mainSection.classList.add("main-section");

const leftColumn = document.createElement("div");
leftColumn.classList.add("left-column");

const rightColumn = document.createElement("div");
rightColumn.classList.add("right-column");

const projectListContainer = document.createElement("div");

function showProjects() {
  projectListContainer.innerHTML = "";
  projectListContainer.appendChild(projectList(showTodos, showProjects));
}

function showTodos(projectId) {
  projectListContainer.innerHTML = "";
  projectListContainer.appendChild(todosView(projectId, showProjects));
}
function refreshProjectList() {
    showProjects();

}

rightColumn.append(
  addProjectForm(() => { showProjects() }),
  addTodoForm(() => { showProjects() }),
);

leftColumn.appendChild(projectListContainer);

mainSection.append(leftColumn, rightColumn);

document.body.appendChild(header());
document.body.appendChild(mainSection);
refreshProjectList();
