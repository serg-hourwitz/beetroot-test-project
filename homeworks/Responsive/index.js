const DOMBurger = document.getElementById("js-burger");
const DOMNavigation = document.getElementById("js-navigation");

if (DOMBurger) {
  DOMBurger.addEventListener("click", () => {
    DOMBurger.classList.toggle("burger--open");
    DOMNavigation.classList.toggle("navigation-list--open");
  });
}

const DOMLink = document.querySelectorAll(".link");

DOMLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    DOMBurger.classList.remove("burger--open");
    DOMNavigation.classList.remove("navigation-list--open");
}; 