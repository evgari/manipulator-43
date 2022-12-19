const heroSlider = document.querySelector('.hero__slider');
const reviewsSlider = document.querySelector('.reviews__slider .swiper');
const prodSlider = document.querySelector('.modal-slider__container');

const slider = new Swiper(heroSlider, {
  autoplay: {
    delay: 20000,
  },
  effect: 'fade',
  fadeEffect: {
    crossFade: true,
  },
});

const slider2 = new Swiper(reviewsSlider, {
  loop: true,
  slidesPerView: 2,
  slidesPerGroup: 1,
  spaceBetween: 50,
  autoplay: {
    delay: 20000,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  pagination: {
    el: '.swiper-pagination',
  },
});

const slider3 = new Swiper(prodSlider, {
  slidesPerView: 1,
  spaceBetween: 20,
});

export default slider3;


