let sidebarSubs = document.querySelector(".sidebar");
let subList = document.querySelector(".bi-list");


subList.onclick = () => {
  sidebarSubs.classList.toggle("nonne");
  // shortsList.classList.toggle("short-need");
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
