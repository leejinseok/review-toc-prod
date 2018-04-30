$(document).ready(function () {
  leftMenuActive(2);
  accordionFaq();
});

function accordionFaq () {
  var arrowDown = $('td.subject .arrow-down');
  var tr = $('table tr.reply');
  arrowDown.click(function () {
    var index = arrowDown.index(this);
    var opened = arrowDown.eq(index).data('opened');
  
    if (opened == false || opened == 'false') {
      tr.eq(index).addClass('active');
      arrowDown
        .eq(index)
        .attr('alt', 'arrow-up')
        .data('opened', 'true');
    }
    else {
      tr.eq(index).removeClass('active');
      arrowDown
        .eq(index)
        .attr('alt', 'arrow-down')
        .data('opened', 'false');
    }

  });
}
