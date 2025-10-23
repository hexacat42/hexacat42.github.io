// Custom gallery logic
(() => {
    const debounce = (fn, wait = 150) => {
        let timeoutId;
        const debounced = (...args) => {
            window.clearTimeout(timeoutId);
            timeoutId = window.setTimeout(() => fn.apply(null, args), wait);
        };
        debounced.cancel = () => window.clearTimeout(timeoutId);
        return debounced;
    };

    const initGallery = (galleryElement, index) => {
        const heroElement = galleryElement.querySelector('.gallery-hero-swiper');
        const thumbsElement = galleryElement.querySelector('.gallery-thumbs-swiper');

        if (!heroElement || !thumbsElement) {
            console.warn(
                `Gallery #${index + 1} is missing ${!heroElement ? 'a hero' : 'a thumbnail'} swiper element. Skipping initialization.`
            );
            return null;
        }

        let thumbsSwiper;
        try {
            thumbsSwiper = new window.Swiper(thumbsElement, {
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
        } catch (error) {
            console.warn(`Failed to initialize thumbnail swiper for gallery #${index + 1}.`, error);
            return null;
        }

        let heroSwiper;
        try {
            heroSwiper = new window.Swiper(heroElement, {
                speed: 600,
                spaceBetween: 0,
                allowTouchMove: true,
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
        } catch (error) {
            console.warn(`Failed to initialize hero swiper for gallery #${index + 1}.`, error);
            if (thumbsSwiper && typeof thumbsSwiper.destroy === 'function') {
                thumbsSwiper.destroy(true, true);
            }
            return null;
        }

        const handleResize = debounce(() => {
            heroSwiper.update();
            thumbsSwiper.update();
        });

        window.addEventListener('resize', handleResize);

        if (
            thumbsSwiper.slides.length > 0 &&
            !thumbsElement.querySelector('.swiper-slide-thumb-active')
        ) {
            thumbsSwiper.slides[0].classList.add('swiper-slide-thumb-active');
        }

        return {
            hero: heroSwiper,
            thumbs: thumbsSwiper,
            destroy: () => {
                handleResize.cancel();
                window.removeEventListener('resize', handleResize);
                if (typeof heroSwiper.destroy === 'function') {
                    heroSwiper.destroy(true, true);
                }
                if (typeof thumbsSwiper.destroy === 'function') {
                    thumbsSwiper.destroy(true, true);
                }
            },
        };
    };

    const initGalleries = () => {
        if (typeof window.Swiper === 'undefined') {
            console.warn('Swiper library not found. Gallery slider not initialized.');
            return [];
        }

        const previousInstances = Array.isArray(window.galleryInstances)
            ? window.galleryInstances
            : [];
        previousInstances.forEach((instance) => {
            if (instance && typeof instance.destroy === 'function') {
                instance.destroy();
            }
        });

        const galleries = document.querySelectorAll('.media-gallery');
        if (!galleries.length) {
            console.warn('No gallery containers found.');
            window.galleryInstances = [];
            return [];
        }

        const instances = Array.from(galleries)
            .map((gallery, index) => initGallery(gallery, index))
            .filter(Boolean);

        window.galleryInstances = instances;
        return instances;
    };

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initGalleries);
    } else {
        initGalleries();
    }
})();
