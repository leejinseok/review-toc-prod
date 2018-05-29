$(document).ready(function () {
  handleNavMenuActive(3);
});

/**
 * handle accordion (CPA, 체험단 ...)
 * @return {void}
 */
function handleAccordion (accordionIndex, itemIndex) {
  var accordions = $('.mypage .accordion');
  var parentParagraph = $('.mypage .wrapper-accordion .panel p');
  var items = $('.mypage .wrapper-accordion .panel p a');
  var downArrowSrc = {
    'selected': '/static/images/mypage/my_profile_up_black.png',
    'unselected': '/static/images/mypage/my_profile_down.png'
  };

  accordions.click(function () {
    var panel = $(this).next('.panel');
    var downArrow = $(this).find('img');
    var maxHeight = parseInt(panel.css('max-height'));
    var scollHeight = panel.prop('scrollHeight');
    accordionIndex = $(accordions).index(this);
    if (maxHeight) {
      panel.css('max-height', 0);
      downArrow.attr('src', downArrowSrc.unselected);
      return;
    }

    if ($(this).hasClass('no-menus')) {
      accordions.removeClass('active');
      accordions.eq(accordionIndex).addClass('active');
    }
    
    downArrow.attr('src', downArrowSrc.selected);
    panel.css('max-height', scollHeight);
  });

  accordions
    .eq(accordionIndex)
    .addClass('active')
    .click();

  items.click(function (e) {
    var parentPanel = $(this).parent().parent();
    parentPanel.find('a').removeClass('active');
    $(this).addClass('active');
  });

  items.eq(itemIndex).click();
  // parentParagraph.eq(itemIndex).addClass('active');
  accordions.eq(accordionIndex).next().find('p').eq(itemIndex).addClass('active');
}
