import app from "../modules/app.js";

function addProjectForm() {
    const form = document.createElement("form");
    form.classList.add("add-project-form");
    const projectNameInput = document.createElement("input");
    projectNameInput.type = "text";
    projectNameInput.placeholder = "Project name";
    projectNameInput.required = true;
    const startDateInput = document.createElement("input");
    startDateInput.type = "date";
    startDateInput.required = true; 
    const deadlineInput = document.createElement("input");
    deadlineInput.type = "date";
    deadlineInput.required = true; 
    const submitBtn = document.createElement("button");
    submitBtn.type = "submit";
    submitBtn.textContent = "Add Project";

    form.append(projectNameInput, startDateInput, deadlineInput, submitBtn);

    form.addEventListener("submit", (e) =>{
        e.preventDefault();

        const name = projectNameInput.value;
        const startDate = new Date(startDateInput.value);
        const deadline = new Date(deadlineInput.value);

        app.addProject(name, startDate, deadline);

        form.reset();
    });

    return form;

}

export default addProjectForm;