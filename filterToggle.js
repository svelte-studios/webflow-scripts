"use strict";

var filterAllClass = "filter-all";
var filterKeySelector = ".filter-toggle-key";
var filterItemsSelector = ".filter-toggle-items";
var filterItemSelector = ".filter-toggle-item";
var filterValueSelector = ".filter-toggle-value";

var convToFilter = function convToFilter(str) {
  if (!str) {
    str = "empty";
  }

  return str.replace(/[!\"#$%&'\(\)\*\+,\.\/:;<=>\?\@\[\\\]\^`\{\|\}~]/g, "").replace(/ /g, "-").toLowerCase().trim();
};

var containerEl = document.querySelector(filterItemsSelector);
$(filterKeySelector).each(function () {
  var filterKeyText = "." + convToFilter($(this).text());
  $(this).attr("data-filter", filterKeyText);
});
$(filterValueSelector).each(function () {
  var filterKeyText = convToFilter($(this).text());
  console.log("🚀 ~ file: filterToggle.js ~ line 28 ~ filterKeyText", filterKeyText);
  $(this).closest(filterItemSelector).addClass(filterKeyText);
});
$(filterKeySelector).click(function () {
  $(this).attr("data-filter");
  console.log("🚀 ~ file", $(this).attr("data-filter"));
});

var initialFilter = function initialFilter() {
  if (url("?filter")) return "." + url("?filter");
  return "all";
};