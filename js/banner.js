window.addEventListener("load", () => {
  const swiper = new Swiper(".sw_banner", {
    slidesPerView: 2,
    centeredSlides: true, // 슬라이드를 가운데 정렬
    spaceBetween: 25,
    loop: true,
    speed: 1000,
    // autoplay: {
    //   delay: 3000,
    //   disableOnInteraction: false,
    // },
    navigation: {
      nextEl: ".banner_slide_next",
      prevEl: ".banner_slide_prev",
    },
    pagination: {
      el: ".banner_slide_pg",
      clickable: true,
    },
  });
});
