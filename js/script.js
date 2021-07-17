$(function () {
    $('.header__menu-btn').on('click', function () {
        $('.menu').toggleClass('active-menu');
    })
})

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    spaceBetween: 30,
    centeredSlides: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });