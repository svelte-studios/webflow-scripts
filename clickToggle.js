"use strict";

var featureListItemSelector = '.feature-click-item';
var featuredContentSelector = '.featured-content';
var featureListSelector = '.feature-list';
var activeItemClass = 'active';
$(featuredContentSelector).children().eq(0).css({
  display: 'block'
});
$(featureListItemSelector).click(function () {
  var listItemIndex = $(this).index();
  console.log('🚀 ~ file: clickToggle.js ~ line 10 ~ listItemIndex', listItemIndex);
  $(featuredContentSelector).children().each(function () {
    if ($(this).css('display') !== 'none') $(this).css({
      display: 'none'
    });
  });
  $(featureListSelector).children().each(function () {
    if ($(this).hasClass(activeItemClass)) $(this).removeClass(activeItemClass);
  });
  $(featuredContentSelector).children().eq(listItemIndex).css({
    display: 'block'
  });
  $(featureListSelector).children().eq(listItemIndex).addClass(activeItemClass);
});