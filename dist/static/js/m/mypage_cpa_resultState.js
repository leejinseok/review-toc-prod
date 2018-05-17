$(document).ready(function () {
  handleAccordion(0,1); // handle accordion (CPA, 체험단 ...)
  handleDatePicker(); // jquery datepicker set
  handleBodyClick(); // handle body click event
  handleMyPageThumbnail();
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
  window.open('./mypage_resultDashBoard_new_window.html', '_blank', 'toolbar=yes, scrollbars=yes, resizable=no,top=100,left=0,width=460,height=620');
  return;

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