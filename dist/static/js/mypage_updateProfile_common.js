$(document).ready(function () {
  handleAccordion(3,0); // handle accordion (CPA, 체험단 ...)
  handleDatePicker(); // jquery datepicker set
  handleBodyClick(); // handle body click event
  handleMyPageThumbnail();
  handleCheckCpaOrTester();
})

function handleCheckCpaOrTester () {
  var btn = $('form .form-group.cpa-and-tester button');
  var checkImgs = $('form .form-group.cpa-and-tester button img');
  btn.click(function () {
    var checkImg = $(this).find('img');
    if ($(this).hasClass('active')) {
      $(this).removeClass('active');
      checkImg.attr('src', './static/images/mypage/un-checked.png');
    } else {
      $(this).addClass('active');
      checkImg.attr('src', './static/images/mypage/checked.png');
    }

    // checkImgs.attr('src', './static/images/mypage/un-checked.png');
  });
}
