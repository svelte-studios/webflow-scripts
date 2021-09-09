"use strict";

var filterAllClass = "filter-all";
var filterKeySelector = ".filter-toggle-key";
var filterItemsSelector = ".filter-items";
var filterItemSelector = ".filter-item";
var filterValueSelector = ".filter-value";

var convToFilter = function convToFilter(str) {
  if (!str) {
    str = "empty";
  }

  return str.replace(/[!\"#$%&'\(\)\*\+,\.\/:;<=>\?\@\[\\\]\^`\{\|\}~]/g, "").replace(/ /g, "-").toLowerCase().trim();
};

var containerEl = document.querySelector(filterItemsSelector);
$(filterKeySelector).each(function () {
  var filterKeyText = "." + convToFilter($(this).text());
  console.log("🚀 ~ filterKeyText", filterKeyText);
  $(this).attr("data-filter", filterKeyText);
});
$(filterValueSelector).each(function () {
  var filterKeyText = convToFilter($(this).text());
  $(this).closest(filterItemSelector).addClass(filterKeyText);
});
$(filterKeySelector).click(function () {
  console.log("🚀 ~ file: filterToggle.js ~ line 29 ~ $(this)", $(this));
});

var initialFilter = function initialFilter() {
  if (url("?filter")) return "." + url("?filter");
  return "all";
};