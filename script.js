const swiper = new Swiper('.wrapper', {
    loop: true,
    spaceBetween:30,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullet:true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    // responsive breaks
    breakpoints: {
  0: {
    slidesPerView: 1
  },
  764: {
    slidesPerView: 2
  },
  1024: {
    slidesPerView: 3
  }
}

  });