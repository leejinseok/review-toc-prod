$(document).ready(function () {
  handleLoginTypeButton();
});

function handleLoginTypeButton () {
  var button = $('.log-in-nav button');
  button.click(function () {
    button.removeClass('selected');
    $(this).addClass('selected');
  });
}