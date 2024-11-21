const themeToggleButton = document.getElementById("themeToggle");
const body = document.body;

// Check if user has a saved preference
const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
  body.classList.add(savedTheme);
}

// Add event listener for the button
themeToggleButton.addEventListener("click", () => {
  const isDark = body.classList.toggle("light-theme");

  // Save the user's preference
  localStorage.setItem("theme", isDark ? "light-theme" : "");
});
