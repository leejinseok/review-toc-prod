$(document).ready(function () {
  handleAccordion(0, 3); // handle accordion (CPA, 체험단 ...)
  handleMyPageThumbnail();
  handleDatePicker(); // jquery datepicker set
  handleBodyClickForHideModal();
});

function handleBodyClickForHideModal () {
  var modal = $('.modal');
  $('body, html').click(function (e) {
    var targetId = e.target.id;
    if (targetId === 'modal-bill-apply') {
      modal.hide();
    }

    if (targetId === 'modal-reg-document') {
      modal.hide();
    }

    if (targetId === 'modal-reg-document-update') {
      modal.hide();
    }
  })
}

function showModalBillApply () {
  var modal = $('.modal.modal-bill-apply');
  modal.show();
}

function showModalRegDocument () {
  var modal = $('.modal.modal-reg-document');
  modal.show();
}

function applyBill () {
  var modal = $('.modal');
  modal.hide();
}

function regDocument () {
  var modal = $('.modal');
  modal.hide();
}

function showModalRegUpdateDocument () {
  var modal = $('.modal.modal-reg-document-update');
  modal.show();
}

function updateDocument () {
  var modal = $('.modal');
  modal.hide();
}