$(document).ready(function () {
  handleNavMenuActive(4);
});

function leftMenuActive (index) {
  var items = $('.menu ul li a');
  items.eq(index).addClass('active');
}
