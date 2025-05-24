let videoList = document.querySelector(".vieo");
let elBtn = document.querySelectorAll(".btn");
let elInput = document.querySelector(".input");
let elList = document.querySelector(".bi-list");
let sidebar = document.querySelector(".sidebar");
let mainWrap = document.querySelector(".buttons");
let elMic = document.querySelector(".bi-mic");
let record = new webkitSpeechRecognition();

record.lang = "uz-UZ";

Array.from(elBtn).forEach((el) => {
  el.addEventListener("click", () => {
    Array.from(elBtn).forEach((btn) => btn.classList.remove("bun"));

    el.classList.add("bun");
    let filterByType = videoData.filter((vd) => {
      return vd.category.includes(el.textContent);
    });

    if (el.textContent == "ALL") {
      console.log(el);
      displayVideo(videoData);
    } else {
      displayVideo(filterByType);
    }
  });
});

function displayVideo(arr) {
  videoList.innerHTML = "";
  arr.forEach((video) => {
    videoList.insertAdjacentHTML(
      "beforeend",
      `
      <li class="video__li" data-id=${video.id}>
      <div class="image">
        <img src="${video.thumbnail}" alt="${video.title}" class="img-vd" />
        <span class="time">${video.duration}</span>
        </div>
        <div class="vd__info">
          <img class="eye" src="${video.channelPhoto}" alt="${video.channel}" />
          <div class="vd__box">
            <h4 class="neew">
            ${video.title}
            </h4>
            <p class="cbs">
              ${video.channel} <i class="bi bi-check-circle-fill"></i>
            </p>
            <p class="views">${video.views} views • ${video.uploaded}</p>
          </div>
        </div>
      </li>
      `
    );
  });
}

elInput.addEventListener("input", () => {
  let filtered = videoData.filter((el) =>
    el.title.toLowerCase().includes(elInput.value.toLowerCase())
  );
  displayVideo(filtered);
});

elMic.addEventListener("click", () => {
  record.start();
});

record.onend = () => {
  console.log("--- END ---");
};

record.onresult = (evt) => {
  let words = evt.results[0][0].transcript;
  console.log(words);
  elInput.value = words;
};

displayVideo(videoData);

videoList.addEventListener("click", (evt) => {
  if (evt.target.closest(".video__li")) {
    let elId = evt.target.closest(".video__li").dataset.id;
    window.location.href = `./detail.html?id=${elId}`;
  }
});

let imgs = document.querySelectorAll(".img-vd");

elList.onclick = () => {
  sidebar.classList.toggle("nonne");
  Array.from(imgs).forEach((img) => img.classList.toggle("img-need"));
  mainWrap.classList.toggle("box-need");
};

sidebar.addEventListener("click", (evt) => {
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
