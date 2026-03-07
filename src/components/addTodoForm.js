import app from "../modules/app.js";

function addTodoForm(onTodoAdded) {
  const form = document.createElement("form");
  form.classList.add("add-todo-form");
  const todoName = document.createElement("input");
  todoName.type = "text";
  todoName.placeholder = "What needs to be done?";
  todoName.required = true;
  const selectProject = document.createElement("select");
  const submitBtn = document.createElement("button");
  submitBtn.type = "submit";
  submitBtn.textContent = "Add Todo";

  form.append(todoName, selectProject, submitBtn);

  const projects = app.getAllProjects();
  projects.forEach((project) => {
    const selectOption = document.createElement("option");
    selectOption.value = project.id;
    selectOption.textContent = project.name;

    selectProject.appendChild(selectOption);
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const title = todoName.value;
    const projectId = selectProject.value;

    app.addTodoToProject(projectId, title);
    onTodoAdded();

    form.reset();

  });

  return form;
}

export default addTodoForm; 
