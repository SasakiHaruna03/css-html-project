const modal = document.querySelector(".modal__view");
const modalImg = document.querySelector(".modal__img");
const closeBtn = document.querySelector(".modal__close");
const images = document.querySelectorAll(".flower__img");

const prevBtn = document.querySelector(".modal__btn.prev");
const nextBtn = document.querySelector(".modal__btn.next");

//画像を更新する関数
const totalImages = images.length;
let currentIndex = 0;

function updateModal(index) {
    currentIndex = index;
    modalImg.src = images[currentIndex].src;
    modalImg.alt = images[currentIndex].alt;
}

//画像をクリックしたときに表示する
images.forEach(function (img, index) {
    img.addEventListener("click", () => {
        modal.classList.add("is-active");
        updateModal(index);
    });
});

//nextボタンを押した時に次の画像を表示する
nextBtn.addEventListener("click", () => {
    currentIndex++;
    //最後の画像の場合、最初の画像へ移動する
    if (currentIndex > totalImages - 1) {
        currentIndex = 0;
    }
    updateModal(currentIndex);
});

//prevボタンを押した時に前の画像を表示する
prevBtn.addEventListener("click", () => {
    currentIndex--;
    //最初の画像の場合、最後の画像へ移動する
    if (currentIndex < 0) {
        currentIndex = totalImages - 1;
    }
    updateModal(currentIndex);
});

//×ボタンで閉じる
closeBtn.addEventListener("click", () => {
    modal.classList.remove("is-active");
});

//背景クリックで閉じる
modal.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.classList.remove("is-active");
    }
});

// キーボードが押された時の処理
window.addEventListener("keydown", (e) => {
    // モーダルが表示されていない時は何もしない
    if (!modal.classList.contains("is-active")) return;

    if (e.key === "ArrowRight") {
        // 右矢印キーが押されたら「次へ」
        nextBtn.click();
    } else if (e.key === "ArrowLeft") {
        // 左矢印キーが押されたら「前へ」
        prevBtn.click();
    } else if (e.key === "Escape") {
        // Escキーが押されたら「閉じる」
        closeBtn.click();
    }
});
