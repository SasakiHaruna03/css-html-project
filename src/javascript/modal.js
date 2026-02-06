const modal = document.querySelector(".modal__view");
const modalImg = document.querySelector(".modal__img");
const closeBtn = document.querySelector(".modal__close");
const images = document.querySelectorAll(".flower__img");

//画像を表示する
images.forEach(function(img){
    img.addEventListener("click", () => {
        modal.classList.add("is-active");
        modalImg.src = img.src;
        modalImg.alt = img.alt;
    });
});

//×ボタンで閉じる
closeBtn.addEventListener("click", () => {
    modal.classList.remove("is-active");
});

//背景クリックで閉じる
modal.addEventListener("click", (e) => {
    if (e.target !== modalImg) {
        modal.classList.remove("is-active");
    }
});