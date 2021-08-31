"use strict";

var featureListItemSelector = ".featurelistitem";
var featureListContent = ".featurelistcontent";
var contentContainerEl = document.querySelector(featureListContent);
$(featureListItemSelector).hover(function () {
  var thisIndex = $(this).index();
  console.log("🚀 ~ file: displayOnHover.js ~ line 12 ~ $ ~ thisIndex", thisIndex);
});