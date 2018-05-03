$(document).ready(function () {
  handleNavMenuActive(1);
  handleBodyClick();
  handleScrollToEachTab();
  handleRelativeCpa();
  handleRelativeTester();
});

function handleRelativeTester () {
  var list = $('.sub .tester .card');
  var img = $('.sub .tester .card .wrapper-img');

  list.hover(function () {
    var index = list.index(this);
    var curItem = list.eq(index);
    curItem.find('.dDay-and-recruitment').addClass('active');
    img.eq(index).addClass('active');
  });

  list.mouseleave(function () {
    var index = list.index(this);
    var curItem = list.eq(index);
    curItem.find('.dDay-and-recruitment').removeClass('active');
    img.eq(index).removeClass('active');
  });
}

/**
 * cpa list card hover
 * @return {void}
 */
function handleRelativeCpa () {
  var cpaList = $('.sub .cpa .card');
  var img = $('.sub .cpa .card .header a img');

  cpaList.hover(function () {
    var index = cpaList.index(this);
    var curItem = cpaList.eq(index);

    curItem.find('.price').addClass('active');
    img.eq(index).addClass('active');
  });

  cpaList.mouseleave(function () {
    var index = cpaList.index(this);
    var curItem = cpaList.eq(index);

    curItem.find('.price').removeClass('active');
    img.eq(index).removeClass('active');
  });
}

/**
 * 탭 클릭하였을때 스크롤 핸들
 */
function handleScrollToEachTab () {
  var a = $('section.detail .main .with-tab nav.tab ul li a');
  a.click(function () {
    var to = $(this).data('to');
    var of = $('#' + to).offset();
    var top = of.top - 93 - 10;
    $(window).scrollTop(top);
  });
}
