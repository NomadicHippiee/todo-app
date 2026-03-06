import './style.css';
import './components/header.js';
import header from './components/header.js';
import projectList from './components/projectList.js';

console.log("Webpack is alive!");

document.body.appendChild(header());
document.body.appendChild(projectList());