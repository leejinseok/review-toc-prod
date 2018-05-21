$(document).ready(function () {
  handleAccordion(1,1); // handle accordion (CPA, 체험단 ...)
  handleDatePicker(); // jquery datepicker set
  handleMyPageThumbnail();
  handleBodyClickHideModal();
});

function handleBodyClickHideModal () {
  var modal = $('.modal');
  $('body').click(function (e) {
    var targetId = e.target.id;
  });
}

