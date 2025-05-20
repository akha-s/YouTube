let videoList = document.querySelector(".vieo");
let btns = document.querySelectorAll(".btn");

Array.from(btns).forEach((el) => {
  el.addEventListener("click", () => {
    Array.from(btns).forEach((btn) => btn.classList.remove("bun"));

    el.classList.add("bun");
  });
});
