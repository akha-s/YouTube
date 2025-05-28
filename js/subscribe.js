let sidebarSubs = document.querySelector(".sidebar");
let subList = document.querySelector(".bi-list");
let subsMenu = document.querySelector(".subs__menu");
let subsPr = document.querySelector(".subs__pr");
let subsVd = document.querySelector(".subs__vd");
let subBtn = document.querySelector(".subscribe");
console.log(subBtn);

let subed = [];

subBtn.onclick = () => {
  subBtn.textContent = "Subscribed";
  subBtn.style.background = "gray";
  let params = new URLSearchParams(window.location.search);
  subed.push(params.get("id"));
  console.log(subed);
  localStorage.setItem("subscribed", JSON.stringify(subed));
};

function formatNumber(n) {
  if (n >= 1_000_000)
    return (n / 1_000_000).toFixed(1).replace(/\.0$/, "") + "M";
  if (n >= 1_000) return (n / 1_000).toFixed(1).replace(/\.0$/, "") + "K";
  return n.toString();
}

JSON.parse(subed).forEach((el) => {
  videoData.forEach((vd) => {
    if (el == vd.id) {
      subsPr.insertAdjacentHTML(
        "beforeend",
        `
        <div class="sub__pr">
          <img src="${vd.channelPhoto}" alt="" class="sub__pr-img">
          <h3 class="sub__pr-title">${vd.channel}</h3>
          <p class="sub__pr-text">${formatNumber(
            vd.subscribers
          )} subscribers</p>
        </div>
        `
      );
    }
  });
});

subList.onclick = () => {
  sidebarSubs.classList.toggle("nonne");
  subsMenu.classList.toggle("subs-need");
};

sidebarSubs.addEventListener("click", (evt) => {
  if (evt.target.matches(".home")) {
    window.location.href = "http://127.0.0.1:8888/main.html";
  }
  if (evt.target.matches(".shorts-li")) {
    window.location.href = "http://127.0.0.1:8888/shorts.html";
  }
  if (evt.target.matches(".subscription")) {
    window.location.href = "http://127.0.0.1:8888/subscribe.html";
  }
  if (evt.target.matches(".library")) {
    window.location.href = "http://127.0.0.1:8888/library.html";
  }
  if (evt.target.matches(".history")) {
    window.location.href = "http://127.0.0.1:8888/history.html";
  }
});
