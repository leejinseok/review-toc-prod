$(document).ready(function () {
  handleAccordion(0,1); // handle accordion (CPA, 체험단 ...)
  handleDatePicker(); // jquery datepicker set
  handleBodyClick(); // handle body click event
  handleUpdateButton();
  handleBodyClickHideModal();
});

function handleBodyClickHideModal () {
  var modal = $('.modal');
  $('body').click(function (e) {
    var targetId = e.target.id;
    if (targetId === 'modal-click-one') {
      modal.hide(); 
    }

    if (targetId === 'modal-click-multiple') {
      modal.hide();
    }

    if (targetId === 'modal-show-detail') {
      modal.hide();
    }

    if (targetId === 'modal-reason') {
      modal.hide();
    }
  });
}

function showDeferReasonModal () {
  hideModal();
  var modal = $('.modal.modal-reason');
  var title = modal.find('p.title');
  title.hide();
  title = modal.find('p.title.defer');
  title.show();
  modal.show();
}

function showDenyReasonModal () {
  hideModal();
  var modal = $('.modal.modal-reason');
  var title = modal.find('p.title');
  title.hide();
  title = modal.find('p.title.deny');
  title.show();
  modal.show();
}

function showDetail () {
  var modal = $('.modal.modal-show-detail');
  modal.show();
}

function hideModal () {
  var modal = $('.modal');
  modal.hide();
}

function handleUpdateButton () {
  var checkbox = $('[type=checkbox].update');
  var updateBtn = $('button.update');
  var modal = $('.modal.modal-click-one');
  var modalMultipleSelect = $('.modal.modal-click-multiple');
  updateBtn.click(function () {
    var checkedElements = 0;
    checkbox.each(function (idx, item) {
      if (item.checked) {
        checkedElements++;
      }
    });

    if (checkedElements === 1) {
      modal.show();
    } 

    if (checkedElements > 1) {
      modalMultipleSelect.show();
    }
  });
}

function handleAllCheck (allCheck) {
  var allCheck = $(allCheck);
  var checked = allCheck.prop('checked');
  var checkboxes = $('table .check');
  checkboxes.each(function (idx, item) {
    $(item).prop('checked', checked);
  });
}

function handleIsCheckBoxAll (checkbox) {
  var allCheck = $('table .checkAll');
  var checkbox = $(checkbox);
  var checked = checkbox.prop('checked');
  var checkboxes = $('table .check');

  if (!checked) {
    allCheck.prop('checked', false);
    return;
  }

  var result = true;
  checkboxes.each(function (idx, item) {
    if (!($(item).prop('checked'))) {
      result = false;
    }
  });

  if (result) {
      allCheck.prop('checked', true);
  }
}
