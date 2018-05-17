$(document).ready(function () {
  handleAccordion(0, 3); // handle accordion (CPA, 체험단 ...)
  handleMyPageThumbnail();
  handleRadioButton();
  handleBodyClickForHideModal();
});

function handleBodyClickForHideModal () {
  var modal = $('.modal');
  $('body, html').click(function (e) {
    var id = e.target.id;
    if (id === 'modal-charge-point-successfully') {
      modal.hide();
    }
  });
}

function handleRadioButton () {
  var radio = $('.select-circle-box');
  radio.click(function () {
    radio.removeClass('active');
    $(this).addClass('active');
  });
}

function showModalChargePointSuccessfully () {
  var modal = $('.modal.modal-charge-point-successfully');
  modal.show();
}
