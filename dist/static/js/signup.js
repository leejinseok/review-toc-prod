$(document).ready(function () {
  handleSignUpTypeButton();
  handleSignupTypePartnerOrAdvertizer();
});

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
