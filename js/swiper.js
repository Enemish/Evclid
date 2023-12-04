document.addEventListener('DOMContentLoaded', function() {
	const swiper = new Swiper('.swiper-container', {
		// Optional parameters
		direction: 'horizontal',
		loop: true,
	
		// If we need pagination
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
		// Cursor-Hand
		grabCursor: true,
	
		//AutoPlay
		autoplay: {
			delay: 4000,
			disableOnInteraction: false,
		},
		// Speed Slades
		speed: 1000,
	});
});