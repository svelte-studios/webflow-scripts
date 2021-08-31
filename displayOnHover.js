"use strict";

var featureListItemSelector = ".featurelistitem";
var featureListContent = ".featurelistcontent";
var contentContainerEl = document.querySelector(featureListContent);
$(featureListItemSelector).mouseenter(function () {
  var listItemIndex = $(this).index();
  $(featureListContent).children().each(function () {
    console.log("🚀 ~ file: displayOnHover.js ~ line 17 ~ this.index()", $(this).index());
    if ($(this).css("display") !== "none") $(this).css({
      display: "none"
    });
  });
  console.log("🚀 ~ file: displayOnHover.js ~ line 20 ~ $(featureListContent).children().eq(listItemIndex).index()", $(featureListContent).children().eq(listItemIndex).index());
  $(featureListContent).children().eq(listItemIndex).css({
    display: "block"
  });
});