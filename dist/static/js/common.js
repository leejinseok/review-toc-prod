var app = angular.module('reviewTocApp', []);

$(document).ready(function () {
  $('a').click(function (e) {
    var href = $(this).attr('href');
    if (href === '#') {
      e.preventDefault();
    }
  });
  handleOptions(); // handle options
});

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