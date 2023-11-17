
let cursor = document.querySelector('#cursor');
window.addEventListener('mousemove', cursorMove);

function cursorMove(e) {
    gsap.to(cursor, {
        x: e.pageX >= window.innerWidth - cursor.offsetWidth ? e.pageX - cursor.offsetWidth : e.pageX - cursor.offsetWidth / 2,
        y: e.pageY >= window.innerHeight - cursor.offsetHeight ? e.pageY - cursor.offsetHeight : e.pageY - cursor.offsetHeight / 2,
        duration: 0.1
    });
}