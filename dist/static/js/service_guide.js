$(document).ready(function () {
  handleSwiper();
  handleServiceTypeClick();
});

function handleServiceTypeClick () {
  var btn = $('.guide-nav-btn-box button');
  btn.click(function () {
    var type = $(this).data('type');
    if (type === 'tester') {
      alert('준비중입니다');
    }
  });
}

function handleSwiper () {
  var swiper = new Swiper('.swiper-container', {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });
}