window.onload = function () {
  const navToggle = document.getElementsByClassName("nav-toggle")[0];
  const navList = document.getElementsByClassName("nav-list")[0];

  navToggle.addEventListener("click", () => {
    navList.classList.toggle("active");
  });
};
