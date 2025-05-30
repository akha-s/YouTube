let params = new URLSearchParams(window.location.search);
let detailVideo = document.querySelector(".detail__video");
let otherVideos = document.querySelector(".detail__other-video");
let elList = document.querySelector(".bi-list");
let elInput = document.querySelector(".input");
let biMic = document.querySelector(".bi-mic");
let recordDetail = new webkitSpeechRecognition();
let searchId = params.get("id");
let sidebarDetail = document.querySelector(".sidebar");
let formComment = document.querySelector(".form");
let inputComment = document.querySelector("#input");
let inputName = document.querySelector("#name");
let txt = document.querySelector(".all-commentary");

let users = [];
formComment.addEventListener("submit", (e) => {
  e.preventDefault();
  if (inputComment.value.trim() === "" || inputName.value.trim() == "") return;

  let userComent = {
    come: inputComment.value,
    namess: inputName.value,
  };
  users.push(userComent);
  localStorage.setItem("user", JSON.stringify(users));
  comment(JSON.parse(localStorage.getItem("user")));
  inputName.value = "";
});

function commentDisplay(arr) {
  txt.innerHTML = "";
  arr.forEach((el) => {
    txt.insertAdjacentHTML(
      "afterbegin",
      `
      <div class="one-comentary">
        <img src="./assets/have-acc.jpg" alt="" />
        <div class="one__items">
          <div class="name">
            <p class="name">${el.username}</p>
            <p class="vaqtcha">${el.date}</p>
          </div>
          <div class="text">
            ${el.text}
          </div>
        </div>
      </div>`
    );
  });
}
commentDisplay(commentsOrg);

elList.onclick = () => {
  sidebarDetail.classList.toggle("nonne");
};

elInput.addEventListener("search", () => {
  let filtered = videoData.filter((el) =>
    el.title.toLowerCase().includes(elInput.value.toLowerCase())
  );
  window.location.href = "http://127.0.0.1:8888/main.html";
  displayVideo(filtered);
});

biMic.addEventListener("click", () => {
  recordDetail.start();
});

recordDetail.onend = () => {
  console.log("--- END ---");
};

recordDetail.onresult = (evt) => {
  let words = evt.results[0][0].transcript;
  console.log(words);
  elInput.value = words;
  let filtered = videoData.filter((el) =>
    el.title.toLowerCase().includes(elInput.value.toLowerCase())
  );
  displayVideo(filtered);
};

function formatNumber(n) {
  if (n >= 1_000_000)
    return (n / 1_000_000).toFixed(1).replace(/\.0$/, "") + "M";
  if (n >= 1_000) return (n / 1_000).toFixed(1).replace(/\.0$/, "") + "K";
  return JSON.stringify(n);
}

let findVideo = videoData.find((el) => el.id == searchId);
detailVideo.insertAdjacentHTML(
  "afterbegin",
  `
    <div class="video">
    <iframe
    class="org-vd"
    src="${findVideo.src}"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    referrerpolicy="strict-origin-when-cross-origin"
    allowfullscreen
    autoplay
    ></iframe> 
    <!--
    <img class="org-vd" src="${findVideo.thumbnail}" />
    --!>
    </div>
    <div class="title">
      <div class="video-name">${findVideo.title}</div>
      <div class="about__Wrapper">
        <div class="channel-left">
          <div class="channel-img">
            <img src="${findVideo.channelPhoto}" alt="" />
          </div>
          <div class="channel">
            <span class="channel-name"
              >${findVideo.channel}<i class="bi bi-check-circle-fill"></i
            ></span>
            <span class="subscriber">${formatNumber(
              findVideo.subscribers
            )} subscribers</span>
          </div>
          <button class="join-channel">join</button>
          <button class="subscribe">Subscribe</button>
        </div>
        <div class="channel-right">
          <button class="like-dislike">
            <i class="bi bi-hand-thumbs-up"></i>${formatNumber(findVideo.likes)}
            <div class="chiziq"></div>
            <i class="bi bi-hand-thumbs-down"></i>${formatNumber(
              findVideo.dislikes
            )}
          </button>
          <button class="share">
            <i class="bi bi-share"></i>Share
          </button>
          <button class="save"><i class="bi bi-list"></i>Save</button>
          <button class="dot">
            <i class="bi bi-three-dots"></i>
          </button>
        </div>
      </div>
      <div class="opisaine">
      <div class="views">
        <p class="view">${findVideo.views} views ${findVideo.uploaded}</p>
        <p class="about-opisanie">${findVideo.title}</p>
      </div>
    </div>
    `
);

let likeDislike = document.querySelector(".like-dislike");

likeDislike.addEventListener("click", (evt) => {
  if (evt.target.matches(".bi-hand-thumbs-up")) {
    likeDislike.innerHTML = `    
      <i class="bi bi-hand-thumbs-up-fill"></i>${formatNumber(
        findVideo.likes + 1
      )} 
      <div class="chiziq"></div>
      <i class="bi bi-hand-thumbs-down"></i>${formatNumber(findVideo.dislikes)}
    `;
  }
  if (evt.target.matches(".bi-hand-thumbs-down")) {
    likeDislike.innerHTML = `    
      <i class="bi bi-hand-thumbs-up"></i>${formatNumber(findVideo.likes)}
      <div class="chiziq"></div>
      <i class="bi bi-hand-thumbs-down-fill"></i>${formatNumber(
        findVideo.dislikes + 1
      )}
    `;
  }
});

videoData.forEach((el) => {
  if (el.id == searchId) return;

  otherVideos.insertAdjacentHTML(
    "beforeend",
    `
    <li class="videos" data-id="${el.id}">
      <img src="${el.thumbnail}" alt="" />
      <div class="items">
        <div class="names">
        ${el.title}
        </div>
        <div class="chanel-name">
          ${el.channel}<i class="bi bi-check-circle-fill"></i>
        </div>
        <div class="vaqtcha">${el.views} views• ${el.uploaded}</div>
      </div>
    </li>
    `
  );
});

otherVideos.addEventListener("click", (evt) => {
  if (evt.target.closest(".videos")) {
    let elId = evt.target.closest(".videos").dataset.id;
    window.location.href = `./detail.html?id=${elId}`;
  }
});

sidebarDetail.addEventListener("click", (evt) => {
  if (evt.target.matches(".home")) {
    window.location.href = "http://127.0.0.1:5501/";
  }
  if (evt.target.matches(".shorts-li")) {
    window.location.href = "http://127.0.0.1:5501/shorts.html";
  }

});
