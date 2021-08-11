"use strict";

var filterAllClass = "filter-all";
var filterKeySelector = ".filter-key";
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
  if ($(this).hasClass(filterAllClass)) filterKeyText = "all";
  $(this).attr("data-filter", filterKeyText);
});
$(filterValueSelector).each(function () {
  var filterKeyText = convToFilter($(this).text());
  $(this).closest(filterItemSelector).addClass(filterKeyText);
});

var initialFilter = function initialFilter() {
  if (url("?filter")) return "." + url("?filter");
  return "all";
};

mixitup(containerEl, {
  selectors: {
    target: filterItemSelector
  },
  load: {
    filter: initialFilter()
  }
});