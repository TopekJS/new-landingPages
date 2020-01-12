function parallax(element, distance, speed) {
    const elem = document.querySelector(element);
    elem.style.transform = `translateY(${distance * speed}px)`;
}

window.addEventListener('scroll', function () {
    parallax("header", window.scrollY, 1);
})