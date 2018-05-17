$(document).ready(function () {
  handleAccordion(3); // handle accordion (CPA, 체험단 ...)
  removeAccordionRemovePanelActive();
});

function removeAccordionRemovePanelActive () {
  var parentParagraph = $('.wrapper-accordion .panel p');
  var items = $('.wrapper-accordion .panel p a');
  parentParagraph.removeClass('active');
  items.removeClass('active');
}
