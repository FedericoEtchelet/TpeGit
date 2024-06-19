"use strict";

document.addEventListener("DOMContentLoaded", scrollHeader);
function scrollHeader() {
    window.addEventListener('scroll', function () {
        const header = document.querySelector('.header');
        header.classList.toggle("opaco", window.scrollY > 50);

        const navLi = document.querySelectorAll('.nav-li-a');
        navLi.forEach(function (item) {
            item.classList.toggle("opaco", window.scrollY > 50);
        });
    })
}
