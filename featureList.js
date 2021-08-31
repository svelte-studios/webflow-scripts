"use strict";

var featureListItemSelector = ".featurelistitem";
var featuredContentSelector = ".featuredcontent";
var featureListSelector = ".featurelist";
var activeItemClass = "active";
$(featuredContentSelector).children().eq(0).css({
  display: "block"
});
$(featureListItemSelector).mouseenter(function () {
  var listItemIndex = $(this).index();
  $(featuredContentSelector).children().each(function () {
    if ($(this).css("display") !== "none") $(this).css({
      display: "none"
    });
  });
  $(featureListSelector).children().each(function () {
    if ($(this).hasClass(activeItemClass)) $(this).removeClass(activeItemClass);
  });
  $(featuredContentSelector).children().eq(listItemIndex).css({
    display: "block"
  });
  $(featureListSelector).children().eq(listItemIndex).addClass(activeItemClass);
});