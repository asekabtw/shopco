fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((json) => console.log(json));

const burger = document.getElementById("burger");
const searchBtn = document.getElementById("searchBtn");
const searchBar = document.getElementById("searchBar");
const body = document.getElementById("body");
const menu = document.getElementById("menu");

burger.addEventListener("click", (btn) => {
  menu.classList.toggle("show");
  body.classList.toggle("overflow-hidden");
});

searchBtn.addEventListener("click", (btn) => {
  searchBar.classList.remove("hidden");
});
