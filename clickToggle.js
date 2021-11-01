"use strict";

var featureAllItemSelector = '.feature-click-all';
var featureListItemSelector = '.feature-click-item';
var featuredAllContentSelector = '.featured-content-all';
var featuredContentSelector = '.featured-click-content';
var featureListSelector = '.feature-list';
var activeItemClass = 'active';
$(featuredAllContentSelector).css({
  display: 'block'
});
$(featureAllItemSelector).addClass(activeItemClass);

var initialFilter = function initialFilter() {
  console.log('🚀 ~ fil', url('?filter'));
  if (url('?filter')) return '.' + url('?filter');
  return 'all';
};

initialFilter();
$(featureListItemSelector).click(function () {
  var listItemIndex = $(this).index();
  var allSelector = $(featuredAllContentSelector);
  if (allSelector.css('display') !== 'none') allSelector.css({
    display: 'none'
  });
  $(featuredContentSelector).children().each(function () {
    if ($(this).css('display') !== 'none') $(this).css({
      display: 'none'
    });
  });
  $(featureAllItemSelector).removeClass(activeItemClass);
  $(featureListSelector).children().each(function () {
    if ($(this).hasClass(activeItemClass)) $(this).removeClass(activeItemClass);
  });
  $(featuredContentSelector).children().eq(listItemIndex).css({
    display: 'block'
  });
  $(featureListSelector).children().eq(listItemIndex).addClass(activeItemClass);
});
$(featureAllItemSelector).click(function () {
  $(featuredContentSelector).children().each(function () {
    $(this).css({
      display: 'none'
    });
  });
  $(featuredAllContentSelector).css({
    display: 'block'
  });
  $(featureListSelector).children().each(function () {
    $(this).removeClass(activeItemClass);
  });
  $(featureAllItemSelector).addClass(activeItemClass);
});