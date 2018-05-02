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
  var wrapperExtar = $('form .wrapper-extra');
  var wrapperExtraCpa = $('form .wrapper-extra.cpa');
  var wrapperExtraTester = $('form .wrapper-extra.tester');

  btn.click(function () {
    var type = $(this).data('type');
    checkImgs.attr('src', './static/images/mypage/un-checked.png');
    btn.removeClass('active');

    var checkImg = $(this).find('img');
    checkImg.attr('src', './static/images/mypage/checked.png');

    $(this).addClass('active');

    wrapperExtar.removeClass('active');
    if (type === 'cpa') {
      wrapperExtraCpa.addClass('active');
    }

    if (type === 'tester') {
      wrapperExtraTester.addClass('active');
    }
  });
}
