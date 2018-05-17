$(document).ready(function () {
  handleWhyReviewImgActive();
  handleReviewTocAdActive();
  handleRightNav();
  handleBodyClickForHideModal();
  handleCouncilModalTypeButtonActive();
});

function handleCouncilModalTypeButtonActive () {
  var btn = $('.modal.modal-council .modal-content form .btn-container button');
  btn.click(function () {
    var index = btn.index(this);
    var checked = !($(this).data('checked'));
    var allUnChecked = false;

    btn.each(function (idx, item) {
      if (!($(item).data('checked'))) {
        allUnChecked = true;
      }
    });

    if (allUnChecked && !checked) {
      alert('둘중의 하나는 선택해 주세요');
      return;
    }

    $(this).data('checked', checked);
    
    if ($(this).hasClass('selected')) {
      $(this).removeClass('selected');
      $(this).find('img').attr('src', '/static/images/sign-up/uncheked.png');
    } else {
      $(this).addClass('selected');
      $(this).find('img').attr('src', '/static/images/sign-up/cheked.png');
    }
  });
}

function handleBodyClickForHideModal () {
  $('html, body').click(function (e) {
    var targetId = e.target.id;
    if (targetId === 'modal-council') {
      hideModal();
    }
  });
}

function showCouncilModal () {
  var modal = $('.modal.modal-council');
  modal.show();
}

function handleRightNav () {
  var navBtns = $('aside.ad-inquiry-banner .right-nav button');
  var section = [
    $('section.why-reviewtoc'),
    $('section.revietoc-ad')
  ];
  navBtns.click(function () {
    var index = navBtns.index(this);
    if (index < 2) {
      var top = section[index].offset().top;
      $('html, body').animate({
        scrollTop: top
      }, 500);
    }

    if (index === 3) {
      $('html, body').animate({
        scrollTop: 0
      }, 500);
    }
  });
}

function handleReviewTocAdActive () {
  var tab = $('section.revietoc-ad .revietoc-ad-nav button');
  var imgs = $('section.revietoc-ad .revietoc-ad-img img');
  var texts = $('section.revietoc-ad .revietoc-ad-text .wrapper-text');
  tab.mouseover(function () {
    var index = tab.index(this);
    tab.removeClass('selected');
    $(this).addClass('selected');
    imgs.removeClass('active');
    texts.removeClass('active');

    imgs.eq(index).addClass('active');
    texts.eq(index).addClass('active');
  });
}

function handleWhyReviewImgActive () {
  var tab = $('section.why-reviewtoc .why-reviewtoc-nav a');
  var imgs = $('.why-reviewtoc-img img');
  var text = $('.why-reviewtoc-text p');
  tab.mouseover(function () {
    tab.removeClass('selected');
    $(this).addClass('selected');
    var index = tab.index(this);
    imgs.removeClass('active');
    imgs.eq(index).addClass('active');

    text.removeClass('active');
    text.eq(index).addClass('active');
  });
}