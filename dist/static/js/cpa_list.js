$(document).ready(function () {
  $('.view-more').click(showMore);
});

function showMore () {
  return;
  var more = $('section.cpa-list .wrapper-article > .col-3.hidden');
  more.removeClass('hidden');
}