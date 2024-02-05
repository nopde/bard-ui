const menuBtnOpen = document.getElementById("menu-btn-open");
const menuBtnClose = document.getElementById("menu-btn-close");
const sidebar = document.querySelector(".sidebar");

menuBtnOpen.addEventListener("click", event => {
    sidebar.style.display = "flex";
});

menuBtnClose.addEventListener("click", event => {
    sidebar.style.display = "none";
});