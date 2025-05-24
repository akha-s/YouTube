let types = new Set(videoData.map((el) => el.category));
let btns = document.querySelector(".btns");

function createBtn(arr) {
  arr.forEach((el) => {
    btns.insertAdjacentHTML(
      "beforeend",
      `
      <li class="btn-li">
        <button class="btn">${el}</button>
      </li>
      `
    );
  });
}

console.log(createBtn(types));
