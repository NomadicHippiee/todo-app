export default function header() {
  const header = document.createElement("header");
  const h1 = document.createElement("h1");
  const p = document.createElement("p");
  const navContainer = document.createElement("nav");
  const navButtons = [
    "List View",
    "Calendar",
    "Done Project",
    "Undone Projects",
  ];

  navButtons.forEach((label) => {
    const btn = document.createElement("button");
    btn.textContent = label;
    btn.classList.add("nav-button");
    btn.dataset.view = label.toLowerCase().replace(/\s+/g, "-");
    btn.setAttribute("aria-pressed", "false");
    navContainer.append(btn);
  });

  h1.textContent = "Task Manager";
  p.textContent = "Manage tasks by projects or dates";

  header.append(h1, p, navContainer);

  return header;
}
