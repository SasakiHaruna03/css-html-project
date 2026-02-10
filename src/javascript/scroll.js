const doObserve = () => {
    // Observer（監視ルール）を定義する
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                //画面に入ったらクラスを付与
                entry.target.classList.add('is-active');
                // 一度表示したらもう監視しない（上に戻っても消えない）
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0
    });

    // 要素を探して監視を開始する
    const revealElements = document.querySelectorAll(".reveal__item");
    revealElements.forEach(el => observer.observe(el));
};

// ページの読み込みが終わってから実行する
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', doObserve);
} else {
    doObserve();
}