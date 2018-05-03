$(document).ready(function () {
  $('.view-more').click(showMore);
});

function showMore () {
  var more = $('section.cpa-list .wrapper-article > .col-3.hidden');
  more.removeClass('hidden');
}