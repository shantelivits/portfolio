const swiper = new Swiper('.mySwiper', {
    slidesPerView: 1.2,
    slidesPerGroup: 1,
    spaceBetween: 10,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
        slidesPerGroup: 1,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 3,
        slidesPerGroup: 1
      }
    }
  });