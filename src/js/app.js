fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((json) => console.log(json));

const burger = document.getElementById("burger");
const searchBtn = document.getElementById("searchBtn");
const searchBar = document.getElementById("searchBar");
const searchBack = document.getElementById("searchBack");
const body = document.getElementById("body");
const menu = document.getElementById("menu");

burger.addEventListener("click", (btn) => {
  menu.classList.toggle("show");
  body.classList.toggle("overflow-hidden");
});

searchBtn.addEventListener("click", (btn) => {
  searchBar.classList.remove("hidden");
});

searchBack.addEventListener("click", (btn) => {
  btn.preventDefault();
  searchBar.classList.add("hidden");
});

const arrivals = document.getElementById("arrivals");
const showArrivals = document.getElementById("showArrivals");

arrivals.addEventListener("click", (btn) => {
  showArrivals.classList.toggle("absolute");
  showArrivals.classList.toggle("h-0");
});

const topSelling = document.getElementById("topSelling");
const showTop = document.getElementById("showTop");

topSelling.addEventListener("click", (btn) => {
  showTop.classList.toggle("absolute");
  showTop.classList.toggle("h-0");
});
