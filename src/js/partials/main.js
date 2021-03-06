/* eslint-disable prefer-arrow-callback */
window.addEventListener("DOMContentLoaded", function () {
	// About slider
	const aboutSLider = new Swiper(".about__slider", {
		spaceBetween: 16,
		slidesPerView: 1,
		speed: 700,
		navigation: {
			prevEl: ".about-button-prev",
			nextEl: ".about-button-next",
		},
		pagination: {
			el: ".swiper-pagination",
			type: "bullets",
		},
	});
});
