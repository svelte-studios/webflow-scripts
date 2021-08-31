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
    console.log("🚀 ~ file: displayOnHover.js ~ line 17 ~ this.index()", $(this).index());
    if ($(this).css("display") !== "none") $(this).css({
      display: "none"
    });
    if ($(this).hasClass(activeItemClass)) $(this).removeClass(activeItemClass);
  });
  console.log("🚀 ~ file: displayOnHover.js ~ line 20 ~ $(featureListContent).children().eq(listItemIndex).index()", $(featureListContent).children().eq(listItemIndex).index());
  $(featureListContent).children().eq(listItemIndex).css({
    display: "block"
  });
  $(featureListContainerSelector).children().eq(listItemIndex).addClass(activeItemClass);
});