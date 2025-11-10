// Custom gallery logic
(function () {
	var initGallery = function () {
		if (typeof window.Swiper === 'undefined') {
			console.warn('Swiper library not found. Gallery slider not initialized.');
			return;
		}

		var heroSelector = '.gallery-hero-swiper';
		var thumbsSelector = '.gallery-thumbs-swiper';

		var heroElement = document.querySelector(heroSelector);
		var thumbsElement = document.querySelector(thumbsSelector);

		if (!heroElement || !thumbsElement) {
			return;
		}

		var thumbsSwiper = new window.Swiper(thumbsSelector, {
			slidesPerView: 4,
			spaceBetween: 16,
			watchSlidesProgress: true,
			freeMode: true,
			observer: true,
			observeParents: true,
			resizeObserver: true,
			breakpoints: {
				0: {
					slidesPerView: 3,
					spaceBetween: 12,
				},
				640: {
					slidesPerView: 4,
					spaceBetween: 12,
				},
				1024: {
					slidesPerView: 4,
					spaceBetween: 16,
				},
			},
		});

		var heroSwiper = new window.Swiper(heroSelector, {
			speed: 600,
			spaceBetween: 0,
			allowTouchMove: true,
			autoHeight: true,
			observer: true,
			observeParents: true,
			resizeObserver: true,
			thumbs: {
				swiper: thumbsSwiper,
			},
			pagination: {
				el: '.gallery-hero-pagination',
				clickable: true,
			},
		});

		var handleResize = function () {
			heroSwiper.update();
			thumbsSwiper.update();
		};

		window.addEventListener('resize', handleResize);

		// Ensure the first thumbnail has the active state when Swiper hasn't yet applied it.
		if (thumbsSwiper.slides.length > 0 && !thumbsElement.querySelector('.swiper-slide-thumb-active')) {
			thumbsSwiper.slides[0].classList.add('swiper-slide-thumb-active');
		}

		return {
			hero: heroSwiper,
			thumbs: thumbsSwiper,
		};
	};

	if (document.readyState === 'loading') {
		document.addEventListener('DOMContentLoaded', initGallery);
	} else {
		initGallery();
	}
})();
