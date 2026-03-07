import './style.css';
import header from './components/header.js';
import projectList from './components/projectList.js';
import addProjectForm from './components/addProjectForm.js';
import app from './modules/app.js';

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

function refreshProjectList() {
    projectListContainer.innerHTML = "";
    projectListContainer.appendChild(projectList(refreshProjectList));
}

rightColumn.append(addProjectForm(refreshProjectList));

leftColumn.appendChild(projectListContainer);

mainSection.append(leftColumn, rightColumn);

document.body.appendChild(header());
document.body.appendChild(mainSection);
refreshProjectList();

