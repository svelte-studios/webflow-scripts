"use strict";

var _this = void 0;

var featureListItemSelector = ".featureListItem";
var featureListContent = ".featureListContent";
var contentContainerEl = document.querySelector(featureListContent);
$(featureListItemSelector).hover(function () {
  var thisIndex = $(_this).index();
  console.log("🚀 ~ file: displayOnHover.js ~ line 12 ~ $ ~ thisIndex", thisIndex);
});