const DOMBurger = document.getElementById("js-burger");
const DOMNavigation = document.getElementById("js-navigation");

if (DOMBurger) {
  DOMBurger.addEventListener("click", () => {
    DOMBurger.classList.toggle("burger--open");
    DOMNavigation.classList.toggle("navigation-list--open");
  });
}
