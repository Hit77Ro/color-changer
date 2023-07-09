let colors = document.querySelector(".colors");

let bg = colors.nextElementSibling;
colors.addEventListener("click", function (e) {
  let target = e.target;

  if (target.matches("li")) {
    bg.style.backgroundColor = target.style.getPropertyValue("--clr");
    localStorage.color = target.style.getPropertyValue("--clr");
    toggleActiveClass(target);
    target.classList.add("active");
  }
});

let color = localStorage.color;

if (color) {
  let target = document.querySelector(`[data-color="${color}"]`);
  bg.style.backgroundColor = color;
  toggleActiveClass(target);
  target.classList.add("active");
}

function toggleActiveClass(taget) {
  let active = taget.parentElement.querySelector("li.active");

  if (active && taget !== active) {
    active.classList.remove("active");
  }
}
