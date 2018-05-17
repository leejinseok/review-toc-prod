$(document).ready(function () {
  handleAccordion(0,5); // handle accordion (CPA, 체험단 ...)
  handleDatePicker(); // jquery datepicker set
  handleBodyClick(); // handle body click event
  handleMyPageThumbnail();
  handleBodyClickForHideModal();
});

function handleBodyClickForHideModal () {
  var modal = $('.modal');
  $('body, html').click(function (e) {
    var targetId = e.target.id;
    if (targetId === 'modal-reg-document') {
      modal.hide();
    }
  });
}

function showModalRegDocument () {
  var modal = $('.modal.modal-reg-document');
  modal.show();
}

function confirmRegDocument () {
  var img_bankbook = document.getElementById('img_bankbook').files; // 통장사본 이미지
  var img_residentRegistrationNumber = document.getElementById('img_residentRegistrationNumber').files; // 민증이미지

  hideModal();
}
