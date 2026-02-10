const hamburger = document.querySelector(".js-hamburger");
const nav = document.querySelector(".js-nav");
const icon = hamburger.querySelector("img");

// アイコンのパスを保存
const hamburgerIcon = "../media/images/common/hamburger-Icons-close.svg"; // 3本線
const closeIcon = "../media/images/common/hamburger-Icons-open.svg"; // バツ印

hamburger.addEventListener("click", () => {
    nav.classList.toggle("is-active");

    // アイコンの切り替え
    if (nav.classList.contains("is-active")) {
        icon.src = closeIcon;
    } else {
        icon.src = hamburgerIcon;
    }
});
