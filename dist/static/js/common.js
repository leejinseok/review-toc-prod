var app = angular.module('reviewTocApp', []);

$(document).ready(function () {
  $('a').click(function (e) {
    var href = $(this).attr('href');
    if (href === '#') {
      e.preventDefault();
    }
  });
  handleOptions(); // handle options
  handleAccordionLogined();
  handleNavMainFixed();
  handleSearch();
  handleLetterClick();
  handleLetterIcon();
  handleBodyClickForModalRoot();
  handleAccordionSlideMenu();
});

/**
 * handle accordion (CPA, 체험단 ...)
 * @return {void}
 */
function handleAccordionSlideMenu (accordionIndex, itemIndex) {
  var accordions = $('.wrapper-sidemenu .accordion');
  var parentParagraph = $('.wrapper-sidemenu .panel p');
  var items = $('.wrapper-sidemenu .panel p a');
  var downArrowSrc = {
    'selected': './static/images/mypage/my_profile_up_black.png',
    'unselected': './static/images/mypage/my_profile_down.png'
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
  parentParagraph.eq(itemIndex).addClass('active');
}

function toogleSlideMenu () {
  var wrapper = $('.wrapper-sidemenu');

  if (wrapper.hasClass('active')) {
    wrapper.removeClass('active');
    return;
  }
  
  wrapper.addClass('active');
}

function handleAllCheckMessageModal (allCheck) {
  var allCheck = $(allCheck);
  var checked = allCheck.prop('checked');
  var checkboxes = $('.modal-messages table .check');
  checkboxes.each(function (idx, item) {
    $(item).prop('checked', checked);
  });
}

function handleIsCheckBoxAllMessageModal (checkbox) {
  var allCheck = $('.modal-messages table .checkAll');
  var checkbox = $(checkbox);
  var checked = checkbox.prop('checked');
  var checkboxes = $('.modal-messages table .check');

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

function handleBodyClickForModalRoot () {
  $('html, body').click(function (e) {
    var targetId = e.target.id;
    if (targetId === 'modal-messages') {
      hideModal();
    }
    
    if (targetId === 'wrapper-sidemenu') {
      $('.wrapper-sidemenu').removeClass('active');
    }
  });
}

function handleLetterClick () {
  var modal = $('.modal.modal-messages');
  var letterIcon = $('nav.main.logined ul.right li.dropdown.mypage img.letter');
  var numberCount = $('nav.main.logined ul.right li.dropdown.mypage .count-alarm');
  letterIcon.click(function () {
    modal.show();
  });

  numberCount.click(function () {
    modal.show();
  })
}

function handleSearch () {
  var query = $('nav [name=query]');
  var search = $('.icon-search');
  search.click(function () {
    location.href = '/search.html?query=' + query.val();
  });
}

function handleNavMainFixed () {
  var nav = $('nav.main');

  $(window).scroll(function (e) {
    var scrollTop = $(this).scrollTop();
    
    if (scrollTop > 100) {
      nav.addClass('fixed');
    } else {
      nav.removeClass('fixed');
    }
  });
}

function showPrivatePolicy () {
  window.open('/privatePolicy.html', '_blank', 'toolbar=yes,scrollbars=yes,resizable=no,top=100,left=0,width=426,height=430');
}

function showTermOfUse () {
  window.open('/termOfUse.html', '_blank', 'toolbar=yes,scrollbars=yes,resizable=no,top=100,left=0,width=426,height=430');
}

function hideModal () {
  $('.modal').hide();
}

/**
* maxlength 체크
* @param  {Object} object
* @return {void}
*/
function maxLengthCheck (object) {
  if (object.value.length > object.maxLength){
    object.value = object.value.slice(0, object.maxLength);
  }
}

/**
* jquery datepicker set
* @return {void}
*/
function handleDatePicker () {
  $.datepicker.regional['ko'] = {
    closeText: '닫기',
    prevText: '이전달',
    nextText: '다음달',
    currentText: '오늘',
    monthNames: ['1월','2월','3월','4월','5월','6월',
    '7월','8월','9월','10월','11월','12월'],
    monthNamesShort: ['1월','2월','3월','4월','5월','6월',
    '7월','8월','9월','10월','11월','12월'],
    dayNames: ['일','월','화','수','목','금','토'],
    dayNamesShort: ['일','월','화','수','목','금','토'],
    dayNamesMin: ['일','월','화','수','목','금','토'],
    weekHeader: 'Wk',
    dateFormat: 'yy-mm-dd',
    firstDay: 0,
    isRTL: false,
    duration:200,
    // showAnim:'show',
    showMonthAfterYear: true,
    yearSuffix: ''
  };
  $.datepicker.setDefaults($.datepicker.regional['ko']);
  
  $('#datepicker-to, #datepicker-from').datepicker({
    dateFormat: 'yy-mm-dd',
  }).datepicker('setDate', new Date());
}

/**
* handle option click event
* @return {void}
*/
function handleOptions () {
  var display = false;
  var options = $('.options');
  var button = $('.options .items button');
  var ul = $('.options .items ul');
  var li = $('.options .items ul li');
  var index;
  
  button.click(function () {
    index = button.index(this);
    display = options.eq(index).hasClass('active');
    listToggle();
    display = !display;
  });

  options.mouseleave(function () {
    options.removeClass('active');
    button.blur();
  });
  
  li.click(function () {
    display = options.eq(index).hasClass('active');
    var text = $(this).html();
    button.eq(index).find('span').html(text);
    listToggle();
    display = !display;
  });
  
  function listToggle () {
    if (!display) {
      options.eq(index).addClass('active');
    } else {
      options.eq(index).removeClass('active');
    }
  }
}

/**
* handle body click eventn
* @return {void}
*/
function handleBodyClick () {
  $('html, body').click(function (evt) {
    var className = evt.target.className;
    if (className !== 'list-item' && className !== 'selected-button') {
      $('.options').removeClass('active');
    }
  });
}

/**
* mypage > thumbnail 클릭하였을 때 file element click
* @return {void}
*/
function handleMyPageThumbnail () {
  var thumbnail = $('.profile .thumbnail');
  var thumbnailFile = document.getElementById('thumbnailFile');
  thumbnail.click(function (e) {
    e.preventDefault();
    thumbnailFile.click();
  });
}

/**
* myPageThumbnailChange
* @param  {File} file
* @return {void}
*/
function myPageThumbnailChange (file) {
  if (!file.type.startsWith('image/')){
    alert('이미지파일만 업로드가능합니다.');
    return;
  }
  
  var thumbnail = $('.profile .thumbnail');
  var reader = new FileReader();
  reader.onload = (function(aImg) {
    return function(e) {
      thumbnail.css('background-image', 'url(' + e.target.result + ')');
    }
  })(thumbnail);
  
  reader.readAsDataURL(file);
}

/**
* main nav add active class
* @param  {Number} index
* @return {void}
*/
function handleNavMenuActive (index) {
  var list = $('nav.main ul.left li');
  list.eq(index).addClass('active');
}


/**
 * handle accordion (CPA, 체험단 ...)
 * @return {void}
 */
function handleAccordionLogined (accordionIndex, itemIndex) {
  var accordions = $('nav.main.logined .accordion');
  var parentParagraph = $('nav.main.logined .panel p');
  var items = $('nav.main.logined .panel p a');
  var downArrowSrc = {
    'selected': './static/images/mypage/my_profile_up_selected.png',
    'unselected': './static/images/mypage/my_profile_down.png'
  };

  accordions.click(function () {
    var panel = $(this).next();
    var downArrow = $(this).find('img');
    var maxHeight = parseInt(panel.css('max-height'));
    var scollHeight = panel.prop('scrollHeight');
    accordionIndex = $(accordions).index(this);
    if (maxHeight) {
      panel.css('max-height', 0);
      downArrow.attr('src', downArrowSrc.unselected);
      // accordions.removeClass('active');
      return;
    }
    accordions.removeClass('active');
    accordions.eq(accordionIndex).addClass('active');
    // downArrow.attr('src', downArrowSrc.selected);
    panel.css('max-height', scollHeight);
  });

  // accordions
  //   .eq(accordionIndex)
  //   .addClass('active')
  //   .click();

  items.click(function (e) {
    var parentPanel = $(this).parent().parent();
    parentPanel.find('a').removeClass('active');
    $(this).addClass('active');
  });

  // items.eq(itemIndex).click();
  // parentParagraph.eq(itemIndex).addClass('active');
}

function parse_query_string (query) {
  var vars = query.split("&");
  var query_string = {};
  for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split("=");
    if (typeof query_string[pair[0]] === "undefined") {
      query_string[pair[0]] = decodeURIComponent(pair[1]);
    } else if (typeof query_string[pair[0]] === "string") {
      var arr = [query_string[pair[0]], decodeURIComponent(pair[1])];
      query_string[pair[0]] = arr;
    } else {
      query_string[pair[0]].push(decodeURIComponent(pair[1]));
    }
  }
  return query_string;
}


function handleLetterIcon () {
  var countAlarm = $('.count-alarm');
  var search = parse_query_string(window.location.search.substr(1));
  if (search.message) {
    countAlarm.show();
  } else {
    countAlarm.hide();
  }
}