window.FontAwesomeConfig = {
  autoReplaceSvg: true,
  autoAddCss: true,
};

function toggleTheme() {
  const toggleTheme = document.getElementById("toggleTheme");

  if (document.body.classList.contains("dark-mode")) {
    document.body.classList.remove("dark-mode");
    document.body.classList.add("light-mode");
    toggleTheme.innerHTML = '<i class="fa-regular fa-moon"></i>';
    localStorage.setItem("theme", "light");
  } else {
    document.body.classList.remove("light-mode");
    document.body.classList.add("dark-mode");
    toggleTheme.innerHTML = '<i class="fa-regular fa-sun"></i>';
    localStorage.setItem("theme", "dark");
  }
}
