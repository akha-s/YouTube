let sidebarShorts = document.querySelector(".sidebar");
let shortsList = document.querySelector(".shorts__list");
let biList = document.querySelector(".bi-list");

function formatNumber(n) {
  if (n >= 1_000_000)
    return (n / 1_000_000).toFixed(1).replace(/\.0$/, "") + "M";
  if (n >= 1_000) return (n / 1_000).toFixed(1).replace(/\.0$/, "") + "K";
  return n.toString();
}

function displayShorts(arr) {
  shortsList.innerHTML = "";
  arr.forEach((shorts) => {
    shortsList.insertAdjacentHTML(
      "beforeend",
      `
    <div class="shorts">
        <div class="left">
          <iframe
            class="shorts__vd"
            src="${shorts.src}"
          ></iframe>
          <div class="shorts__info">
            <div class="shorts__subs">
              <img src="${
                shorts.channelPhoto
              }" alt="channel photo" class="shorts__channel-img" />
              <h4 class="shorts__channel-name">${shorts.channel}</h4>
            </div>
            <p class="shorts__text">
              ${shorts.title}
            </p>
          </div>
        </div>
        <div class="short__btn">
          <button class="like user-like">
            <i class="bio bi-hand-thumbs-up-fill"></i>
          </button>
          <h4 class="inf">${formatNumber(shorts.likes)}</h4>
          <button class="like user-dislike">
            <i class="bio bi-hand-thumbs-down-fill"></i>
          </button>
          <h4 class="inf">${formatNumber(shorts.dislikes)}</h4>
          <button class="like user-comment">
            <i class="bio bi-chat-right-text-fill"></i>
          </button>
          <h4 class="inf">${formatNumber(shorts.comments)}</h4>
          <button class="like user-share"><i class="bio bi-share-fill"></i></button>
          <h4 class="inf">Share</h4>
          <button class="like user-more">
            <i class="bio bi-three-dots-vertical"></i>
          </button>
          <img
            class="iml"
            width="49px"
            src="${shorts.channelPhoto}"
            alt=""
          />
        </div>
    </div>
        `
    );
  });
}

displayShorts(shortsData);

let short = document.querySelectorAll(".shorts");
let shortsBtn = document.querySelector(".short__btn");

shortsBtn.addEventListener("click", (evt) => {
  shortsData.forEach((shorts) => {
    if (
      evt.target.matches(".user-like") ||
      evt.target.matches(".bi-hand-thumbs-up-fill")
    ) {
      shortsBtn.innerHTML = `
                <div class="short__btn">
          <button class="like user-like clicked-btn">
            <i class="bio bi-hand-thumbs-up-fill"></i>
          </button>
          <h4 class="inf">${formatNumber(shorts.likes + 1)}</h4>
          <button class="like user-dislike">
            <i class="bio bi-hand-thumbs-down-fill"></i>
          </button>
          <h4 class="inf">${formatNumber(shorts.dislikes)}</h4>
          <button class="like user-comment">
            <i class="bio bi-chat-right-text-fill"></i>
          </button>
          <h4 class="inf">${formatNumber(shorts.comments)}</h4>
          <button class="like user-share"><i class="bio bi-share-fill"></i></button>
          <h4 class="inf">Share</h4>
          <button class="like user-more">
            <i class="bio bi-three-dots-vertical"></i>
          </button>
          <img
            class="iml"
            width="49px"
            src="${shorts.channelPhoto}"
            alt=""
          />
        </div>
        `;
    }
    if (
      evt.target.matches(".user-dislike") ||
      evt.target.matches(".bi-hand-thumbs-down-fill")
    ) {
      shortsBtn.innerHTML = `
                <div class="short__btn">
          <button class="like user-like">
            <i class="bio bi-hand-thumbs-up-fill"></i>
          </button>
          <h4 class="inf">${formatNumber(shorts.likes)}</h4>
          <button class="like user-dislike clicked-btn">
            <i class="bio bi-hand-thumbs-down-fill"></i>
          </button>
          <h4 class="inf">${formatNumber(shorts.dislikes + 1)}</h4>
          <button class="like user-comment">
            <i class="bio bi-chat-right-text-fill"></i>
          </button>
          <h4 class="inf">${formatNumber(shorts.comments)}</h4>
          <button class="like user-share"><i class="bio bi-share-fill"></i></button>
          <h4 class="inf">Share</h4>
          <button class="like user-more">
            <i class="bio bi-three-dots-vertical"></i>
          </button>
          <img
            class="iml"
            width="49px"
            src="${shorts.channelPhoto}"
            alt=""
          />
        </div>
        `;
    }
  });
});

shortsList.addEventListener("scroll", () => {
  Array.from(short).forEach((short) => {
    const rect = short.getBoundingClientRect();
    const opacity = 1 - Math.abs(rect.top) / window.innerHeight;
    short.style.opacity = opacity;
  });
});

biList.onclick = () => {
  sidebarShorts.classList.toggle("nonne");
  shortsList.classList.toggle("short-need");
};

sidebarShorts.addEventListener("click", (evt) => {
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
