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
    var checked = !($(this).data('checked'));
    var allUnChecked = false;
    
    btn.each(function (idx, item) {
      if (!$(item).data('checked')) {
        allUnChecked = true;
      }
    });

    if (allUnChecked && !checked) {
      alert('CPA, 체험단 둘 중 하나는 꼭 선택헤주세요.');
      return;
    }

    $(this).data('checked', checked);
    var checkImg = $(this).find('img');

    if (checked) {
      checkImg.attr('src', './static/images/mypage/checked.png');
      $(this).addClass('active');
    } else {
      checkImg.attr('src', './static/images/mypage/un-checked.png');
      $(this).removeClass('active');
    }

    if (type === 'cpa') {
      if (checked) {
        wrapperExtraCpa.addClass('active');
      } else {
        wrapperExtraCpa.removeClass('active');
      }
    } else {
      if (checked) {
        wrapperExtraTester.addClass('active');
      } else {
        wrapperExtraTester.removeClass('active');
      }
    }
  });
}
