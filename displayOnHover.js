"use strict";

var featureListItemSelector = ".featurelistitem";
var featureListContent = ".featurelistcontent";
var featureListContainerSelector = ".featurelistcontainer";
var activeItemClass = "active";
$(featureListContent).children().eq(0).css({
  display: "block"
});
$(featureListItemSelector).mouseenter(function () {
  var listItemIndex = $(this).index();
  $(featureListContent).children().each(function () {
    if ($(this).css("display") !== "none") $(this).css({
      display: "none"
    });
  });
  $(featureListContainerSelector).children().each(function () {
    if ($(this).hasClass(activeItemClass)) {
      console.log("🚀 ~ file: displayOnHover.js ~ line 20 ~ $(this).hasClass(activeItemClass)", $(this).hasClass(activeItemClass));
      $(this).removeClass(activeItemClass);
    }
  });
  $(featureListContent).children().eq(listItemIndex).css({
    display: "block"
  });
  $(featureListContainerSelector).children().eq(listItemIndex).addClass(activeItemClass);
});