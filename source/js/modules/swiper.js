export const coachesSwiper = () => {
  // eslint-disable-next-line no-new,no-undef
  new Swiper('.coaches__swiper', {
    speed: 400,
    spaceBetween: 30,
    loop: true,
    slidesPerView: 1,
    autoHeight: true,
    initialSlide: -4,
    navigation: {
      nextEl: '.coaches__button--next',
      prevEl: '.coaches__button--prev',
    },
    keyboard: {
      enabled: true,
    },
    breakpoints: {
      768: {
        spaceBetween: 30,
        slidesPerView: 2,
      },
      1200: {
        spaceBetween: 40,
        slidesPerView: 4,
      },
    },
  });
};

export const reviewsSwiper = () => {
  // eslint-disable-next-line no-new,no-undef
  new Swiper('.reviews__swiper', {
    speed: 400,
    spaceBetween: 30,
    autoHeight: true,
    navigation: {
      nextEl: '.reviews__button--next',
      prevEl: '.reviews__button--prev',
    },
  });
};
