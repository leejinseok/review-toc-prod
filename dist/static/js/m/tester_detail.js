$(document).ready(function () {
  handleNavMenuActive(2);
  handleBodyClick();
  handleScrollToEachTab();
  handleRelativeCpa();
  handleRelativeTester();
  handleDetailInfoTableShow();
  handleApplyFormShow();
  handleRegReviewFormShow();
  handleButtonShow();
  handleTextareaText();
});

function handleTextareaText () {
  $('#copy').val('<a href="http://reviewtoc.co.kr/experience/details.php?exp_id=6624"> <img src="http://review toc.co.kr/app_img/get_tag.php?account_id=1&tag=81401&exp_id=6624&rurl=" border="0" /> </a>');
}

function handleButtonShow () {
  var wrapperButtons = $('section.detail .main .wrapper-pic-and-info >div.info .wrapper-buttons');
  var search = window.location.search.substr(1);
  if (!search.length) {
    wrapperButtons.find('.apply').show();
  }

  if (search === 'reg-review') {
    wrapperButtons.find('.reg-review').show();
  }
}

function handleRegReviewFormShow () {
  var button = $('section.detail .main .wrapper-pic-and-info >div.info .wrapper-buttons .reg-review');
  var form = $('.wrapper-reg-review-form');
  button.click(function () {
    if (form.hasClass('active')) {
      form.removeClass('active');
      return;
    }

    form.addClass('active');
  });
}


function handleApplyFormShow () {
  var button = $('section.detail .main .wrapper-pic-and-info >div.info .wrapper-buttons .apply');
  var form = $('.wrapper-apply-form');
  button.click(function () {
    if (form.hasClass('active')) {
      form.removeClass('active');
      return;
    }

    form.addClass('active');
  });
}

/**
 * 세부사항 테이블
 */
function handleDetailInfoTableShow () {
  var button = $('section.detail .main .body table tr td:nth-child(2) .wrapper-buttons button.detail');

  button.click(function () {
    var parents = $(this).parents();
    var tr = $(parents[2]);
    
    
    var wrapperDetailTable = tr.next();   
    

    if (wrapperDetailTable.hasClass('hide')) {
      wrapperDetailTable.removeClass('hide');
      return;
    }
    wrapperDetailTable.addClass('hide');
  });
}

function handleRelativeTester () {
  var list = $('.sub .tester .card');
  var img = $('.sub .tester .card .wrapper-img');

  list.hover(function () {
    var index = list.index(this);
    var curItem = list.eq(index);
    curItem.find('.dDay-and-recruitment').addClass('active');
    img.eq(index).addClass('active');
  });

  list.mouseleave(function () {
    var index = list.index(this);
    var curItem = list.eq(index);
    curItem.find('.dDay-and-recruitment').removeClass('active');
    img.eq(index).removeClass('active');
  });
}

/**
 * cpa list card hover
 * @return {void}
 */
function handleRelativeCpa () {
  var cpaList = $('.sub .cpa .card');
  var img = $('.sub .cpa .card .wrapper-img');

  cpaList.hover(function () {
    var index = cpaList.index(this);
    var curItem = cpaList.eq(index);

    curItem.find('.price').addClass('active');
    img.eq(index).addClass('active');
  });

  cpaList.mouseleave(function () {
    var index = cpaList.index(this);
    var curItem = cpaList.eq(index);

    curItem.find('.price').removeClass('active');
    img.eq(index).removeClass('active');
  });
}

/**
 * 탭 클릭하였을때 스크롤 핸들
 */
function handleScrollToEachTab () {
  var a = $('section.detail .main .with-tab nav.tab ul li a');
  var li = $('section.detail .main .with-tab nav.tab ul li');
  var body = $('section.detail .main .wrapper-detail-info .body');
  a.click(function () {
    var index = a.index(this);
    li.removeClass('active');
    li.eq(index).addClass('active');
    body.addClass('hide')
    body.eq(index).removeClass('hide');
  });
}
