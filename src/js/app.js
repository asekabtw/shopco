fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((json) => console.log(json));

const burger = document.getElementById("burger");
const burgerX = document.getAnimations("burgerX");
const body = document.getElementById("body");
const menu = document.getElementById("menu");

burger.addEventListener("click", (btn) => {
  menu.classList.toggle("show");
});
