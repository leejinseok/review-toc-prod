$(document).ready(function () {
  handleNavMenuActive(1);
  handleBodyClick();
  handleScrollToEachTab();
});

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
