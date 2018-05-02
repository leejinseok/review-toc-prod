$(document).ready(function () {
  handleSignUpTypeButton();
  handleSignupTypePartnerOrAdvertizer();
  handleExtraInfo();
});

function handleExtraInfo () {
  var btn = $('.sub-info .btn-container button');
  var bodyCpa = $('.sub-info ul.sub-info-wrap.cpa');
  var bodyTester = $('.sub-info ul.sub-info-wrap.tester');
  var src = {
    uncheked: '/static/images/sign-up/uncheked.png',
    checked: '/static/images/sign-up/cheked.png'
  };

  btn.click(function () {
    var type = $(this).data('type');
    btn.removeClass('selected');
    btn.find('img').attr('src', src.uncheked);
    $(this).addClass('selected');
    $(this).find('img').attr('src', src.checked);
    
    if (type === 'cpa') {
      bodyTester.removeClass('active');
      bodyCpa.addClass('active');
    } 

    if (type === 'tester') {
      bodyCpa.removeClass('active');
      bodyTester.addClass('active');
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
