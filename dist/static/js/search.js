$(document).ready(function () {
  // $('section.cpa-list .view-more').click(showMoreCpaList);
  handleHeaderText();
});

function handleHeaderText () {
  var cpaHeaderText = $('.section.cpa-list > .header .text');
  var testerHeaderText = $('.section.experienceGroup-list > .header .text');

  cpaHeaderText.html('<b>CPA</b> 검색결과 (검색어 : 에센스)');
  testerHeaderText.html('<b>체험단</b> 검색결과(검색어 : 에센스)');
}

function showMoreCpaList () {
  var more = $('section.cpa-list .wrapper-article > .col-3.hidden');
  more.removeClass('hidden');
}

function showMoreTester () {
  var more = $('section.experienceGroup-list .wrapper-article > .col-3.hidden');
  more.removeClass('hidden');
}