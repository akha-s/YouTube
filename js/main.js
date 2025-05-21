let videoList = document.querySelector(".vieo");
let elBtn = document.querySelectorAll(".btn");
let elInput = document.querySelector(".input");

Array.from(elBtn).forEach((el) => {
  el.addEventListener("click", () => {
    Array.from(elBtn).forEach((btn) => btn.classList.remove("bun"));

    el.classList.add("bun");
    let filterByType = videoData.filter((vd) => {
      return vd.category.includes(el.textContent);
    });
    filterByType.sort((a, b) => a.uploaded - b.uploaded);

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
      <li class="video__li">
        <div class="image">
          <img src="${video.thumbnail}" alt="${video.title}" class="img-vd" />
          <span class="time">${video.duration}</span>
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

displayVideo(videoData);
