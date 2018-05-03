$(document).ready(function () {
  handleSignUpTypeButton();
  handleSignupTypePartnerOrAdvertizer();
  handleExtraInfo();
});

function handleExtraInfo () {
  var btn = $('.sub-info .btn-container button');
  var bodyCpa = $('.sub-info ul.sub-info-wrap li.visible-in-cpa');
  var bodyTester = $('.sub-info ul.sub-info-wrap li.visible-in-tester');
  var src = {
    uncheked: '/static/images/sign-up/uncheked.png',
    checked: '/static/images/sign-up/cheked.png'
  };

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
      alert('CPA, 체험단 둘중 하나는 선택해주셔야합니다.');
      return;
    }
    
    $(this).data('checked', checked);
    if (checked) {
      $(this).addClass('selected');
      $(this).find('img').attr('src', src.checked);
    } else {
      $(this).removeClass('selected');
      $(this).find('img').attr('src', src.uncheked);
    }

   
    
    
    if (type === 'cpa' && checked) {
      bodyCpa.addClass('active');
    } else if (type === 'cpa' && !checked) {
      bodyCpa.removeClass('active');
    }

    if (type === 'tester' && checked) {
      bodyTester.addClass('active');
    } else if (type === 'tester' && !checked ) {
      bodyTester.removeClass('active');
    }
  });
}

function handleSignupTypePartnerOrAdvertizer () {
  var btn = $('section.sign-up .btn-container .signup-type');
}

function submitForm (frm) {
  var btn = $('section.sign-up .btn-container .signup-type');
}

function handleSignUpTypeButton () {
  var btn = $('section.sign-up .sign-up-nav.head .btn-container button');
  var partnerForm = $('section.sign-up .wrapper-partner-form');
  var advertiserForm = $('section.sign-up .wrapper-advertiser-form');
  btn.click(function () {
    btn.removeClass('selected');
    $(this).addClass('selected');
    var type = $(this).data('type');

    if (type === 'partner') {
      partnerForm.show();
      advertiserForm.hide();
    }
    else if (type === 'advertiser') {
      advertiserForm.show();
      partnerForm.hide();
    }
  })
}
