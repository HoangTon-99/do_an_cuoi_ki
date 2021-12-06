// AOS
AOS.init();

// Tooltip
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
})

const body = document.querySelector("body");
const navbar = document.querySelector(".navbar__header");
const menu = document.querySelector(".menu-list");
const menuBtn = document.querySelector(".menu-btn");
const cannelBtn = document.querySelector(".cannel-btn");
const menuHr = document.querySelector(".menu__hr");

menuBtn.onclick = () => {
    menu.classList.add("active")
    menuBtn.classList.add("hide")
    body.classList.add("disabledScroll")
}
cannelBtn.onclick = () => {
    menu.classList.remove("active")
    menuBtn.classList.remove("hide")
    body.classList.remove("disabledScroll")

}

window.onscroll = () => {
    this.scrollY > 20 ? navbar.classList.add("sticky") : navbar.classList.remove("sticky")
    this.scrollY > 20 ? menuHr.classList.add("hide") : menuHr.classList.remove("hide")
}

$(document).ready(function () {
    //back button
    $('.btn-back-to-top').hide();
			$(window).scroll(function () {
				if ($(this).scrollTop() > 200) {
					$('.btn-back-to-top').fadeIn(500);
				} else {
					$('.btn-back-to-top').fadeOut(500);
				}
			});
			$('.btn-back-to-top').click(function () {
				$("html").animate({
					scrollTop: 0
				},0);
			});
    $('.owl-carousel').owlCarousel({
        // loop: true,
        margin: 10,
        nav: true,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 2
            },
            768: {
                items: 3
            },
            992: {
                items: 4
            }
        }
    })
})

