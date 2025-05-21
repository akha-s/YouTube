let types = new Set(videoData.map((el) => el.category));
let btns = document.querySelector(".btns");

function createBtn(parentEl, arr) {
  arr.forEach((el) => {
    parentEl.insertAdjacentHTML(
      "beforeend",
      `
      <li class="btn-li">
        <button class="btn">${el}</button>
      </li>
      `
    );
  });
}

console.log(createBtn(btns, types));
