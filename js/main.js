let videoList = document.querySelector(".vieo");
let btns = document.querySelectorAll(".btn");

Array.from(btns).forEach((el) => {
  el.addEventListener("click", () => {
    Array.from(btns).forEach((btn) => btn.classList.remove("bun"));

    el.classList.add("bun");
  });
});
function displayVideo(parentEl, videos) {
  videos.forEach((video) => {
    parentEl.insertAdjacentHTML(
      "beforeend",
      `
      <li class="video__li">
        <div class="image">
          <img src="${video.thumbnail}" alt="${video.title}" class="img-vd" />
        </div>
        <!-- img -->
        <div class="vd__info">
          <img class="eye" src="${video.channelPhoto}" alt="${video.channel}" />
          <div class="vd__box">
            <h4 class="neew">
            ${video.title}
            </h4>
            <p class="cbs">
              ${video.channel} <i class="bi bi-check-circle-fill"></i>
            </p>
            <p class="views">${video.views} • ${video.uploaded}</p>
          </div>
        </div>
      </li>
      `
    );
  });
}

displayVideo(videoList, videoData);
