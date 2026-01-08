// 1. 要素を取得する
const hamburger = document.querySelector('.js-hamburger');
const nav = document.querySelector('.js-nav');

// 2. イベントリスナーを登録する
if (hamburger && nav) { // 要素が存在する場合のみ実行するガード（推奨）
    hamburger.addEventListener('click', function() {
        // ボタンとナビの両方に 'is-open' を付け外しする
        hamburger.classList.toggle('is-open');
        nav.classList.toggle('is-open');
    });
}

// メニュー内のリンクをクリックした時も閉じるようにする
const navLinks = document.querySelectorAll('.p-global-nav__link');

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('is-open');
        nav.classList.remove('is-open');
    });
});