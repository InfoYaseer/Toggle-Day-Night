const toggleBtn = document.getElementById("toggleBtn");
const icon = document.querySelector(".toggle-icon");
const toggleText = document.querySelector(".toggle-text");
const statusText = document.getElementById("statusText");
const body = document.body;

// Load saved theme
if (localStorage.getItem("theme") === "dark") {
  enableDark();
}

toggleBtn.addEventListener("click", () => {
  body.classList.contains("dark") ? enableLight() : enableDark();
});

function enableDark() {
  body.classList.add("dark");
  icon.setAttribute("name", "moon-outline");
  toggleText.textContent = "Night Mode";
  statusText.textContent = "Night";
  localStorage.setItem("theme", "dark");
}

function enableLight() {
  body.classList.remove("dark");
  icon.setAttribute("name", "sunny-outline");
  toggleText.textContent = "Day Mode";
  statusText.textContent = "Day";
  localStorage.setItem("theme", "light");
}
