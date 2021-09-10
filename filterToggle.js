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
  $(this).closest(filterItemSelector).addClass(filterKeyText); // $(this).closest(filterItemSelector).attr("data-filter", filterKeyText);
});
$(filterKeySelector).click(function () {
  var filterValueClicked = $(this).attr("data-filter");

  if ($(this).hasClass("toggled-on")) {
    $(this).removeClass("toggled-on");
    return $("".concat(filterItemSelector).concat(filterValueClicked)).removeClass("filter-toggle-hide");
  }

  $(this).addClass("toggled-on");
  $("".concat(filterItemSelector).concat(filterValueClicked)).addClass("filter-toggle-hide");
});

var initialFilter = function initialFilter() {
  if (url("?filter")) return "." + url("?filter");
  return "all";
};