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
  handleBodyClickForHideModal();
});

function showReport () {
  var url = new URL(window.location.href);
  var type = url.searchParams.get('type');

  if (type === 'blog' || type === null) {
    window.open('./campaign_report_blog.html', '_blank', 'toolbar=yes,scrollbars=yes,resizable=no');
  }

  if (type === 'sns') {
    window.open('./campaign_report_sns.html', '_blank', 'toolbar=yes,scrollbars=yes,resizable=no');
  }
}

function submitUpdateReviewerInfo () {
  var modal = $('.modal');
  modal.hide();
}

function handleBodyClickForHideModal () {
  var modal = $('.modal');
  $('html, body').click(function (e) {
    var targetId = e.target.id;
    if (targetId === 'modal-update-reviewer-info') {
      modal.hide();
    }
  });
}

function updateReviewerInfo () {
  var modal = $('.modal.modal-update-reviewer-info');
  modal.show();
}

function handleTextareaText () {
  $('#copy').val('<a href="http://reviewtoc.co.kr/experience/details.php?exp_id=6624"> <img src="http://review toc.co.kr/app_img/get_tag.php?account_id=1&tag=81401&exp_id=6624&rurl=" border="0" /> </a>');
}

function handleButtonShow () {
  var wrapperButtons = $('section.detail .main .wrapper-pic-and-info >div.info .wrapper-buttons');
  wrapperButtons.find('.apply').show();
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

function cancelReviewer (btn) {
  var thisBtn = $(btn);
  thisBtn.addClass('hide');
  thisBtn.prev().removeClass('hide');
}

function submitChoiceReviewer () {
  if (!confirm('리뷰어 신청을 모두 확인하셨습니까?\n승인하시면 2018-04-29 날짜가 지나면 자동으로 리뷰어발표 리스트가 출력됩니다.')) return;
  $('.complete-choice-reviewer').addClass('hide');
  $('.defer-choice-reviewer').removeClass('hide');
}

function submitDeferReviewer () {
  if (!confirm('리뷰어신청확인을 취소하시겠습니까?\n승인을 취소하시면 2018-04-29날짜가 지나도 리뷰어발표 리스트가 공개되지 않습니다.')) return;
  $('.defer-choice-reviewer').addClass('hide');
  $('.complete-choice-reviewer').removeClass('hide');
x  
}

function submitChoiceBest () {
  if (!confirm('베스트리뷰 및 우수리뷰를 선정 확인하셨습니까?\n승인하시면 2018-04-29 날짜가 지나면 자동으로 베스트발표 리스트가 출력됩니다.')) return;
  $('.complete-choice-best').addClass('hide');
  $('.defer-choice-best').removeClass('hide');
}

function submitDeferBest () {
  if (!confirm('베스트리뷰 및 우수리뷰 선정을 취소 하시겠습니까?\n승인을 취소하시면 2018-04-29 날짜가 지나도 자동으로 베스트발표 리스트가 공개되지 않습니다.')) return;
  $('.defer-choice-best').addClass('hide');
  $('.complete-choice-best').removeClass('hide');
}

function choiceBest (btn) {
  $(btn)
    .html('베스트 선정취소')
    .attr('onclick', 'deferBest(this)');
}

function deferBest (btn) {
  
  $(btn)
    .html('베스트 선정하기')
    .attr('onclick', 'choiceBest(this)');
}

function choiceReviewer (btn) {
  var thisBtn = $(btn);
  thisBtn.addClass('hide');
  thisBtn.next().removeClass('hide');
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
