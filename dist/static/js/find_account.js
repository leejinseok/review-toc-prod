$(document).ready(function () {
  handleAccountType();
  handleBodyClickForHideModal();
});

function handleBodyClickForHideModal () {
  var modal = $('.modal');
  $('body, html').click(function (e) {
    var targetId = e.target.id;
    if (targetId === 'modal-send-password') {
      modal.hide();
    }
  });
}

function handleAccountType () {
  var btn = $('.find-personal-nav button');
  btn.click(function () {
    btn.removeClass('selected');
    $(this).addClass('selected');
  })
}

function sendPassword () {
  var sended = true;

  if (sended) {
    showFailSendPasswordModal();
  }
}

function showFailSendPasswordModal () {
  var modal = $('.modal.modal-send-password');

  modal.show();
}