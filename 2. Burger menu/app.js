const menu = document.querySelector(".menu");

menu.addEventListener("click", (evt) => {
  evt.currentTarget.classList.toggle("menu_active");
});
