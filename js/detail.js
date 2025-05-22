let params = new URLSearchParams(window.location.search);
let detailVideo = document.querySelector(".detail__video");
let otherVideos = document.querySelector(".detail__other-video");
let searchId = params.get("id");

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
            <span class="subscriber">16.7M subscribers</span>
          </div>
          <button class="join-channel">join</button>
          <button class="subscribe">Subscribe</button>
        </div>
        <div class="channel-right">
          <button class="like-dislike">
            <i class="bi bi-hand-thumbs-up"></i>205K
            <div class="chiziq"></div>
            <i class="bi bi-hand-thumbs-down"></i>
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
        <br />
        <span
        ><p class="link">MKBHD Merch: http://shop.MKBHD.com</p>
        <p class="more">Show more</p></span
        >
      </div>
    </div>
    `
);

videoData.forEach((el) => {
  if (el.id == searchId) return;

  otherVideos.insertAdjacentHTML(
    "beforeend",
    `
    <li class="videos">
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
