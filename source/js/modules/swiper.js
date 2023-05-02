export const coachesSwiper = () => {
  // eslint-disable-next-line no-new,no-undef
  new Swiper('.coaches__swiper', {
    speed: 400,
    spaceBetween: 30,
    loop: true,
    slidesPerView: 'auto',
    navigation: {
      nextEl: '.coaches__button--next',
      prevEl: '.coaches__button--prev',
    },
    breakpoints: {
      1200: {
        spaceBetween: 40,
      },
    },
  });
};

export const reviewsSwiper = () => {
  // eslint-disable-next-line no-new,no-undef
  new Swiper('.reviews__swiper', {
    speed: 400,
    spaceBetween: 30,
    navigation: {
      nextEl: '.reviews__button--next',
      prevEl: '.reviews__button--prev',
    },
  });
};
