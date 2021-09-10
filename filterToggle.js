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
  filterKeyText.split(",");
  filterKeyText.forEach(function (i) {
    $(this).closest(filterItemSelector).addClass(i);
  });
});
$(filterKeySelector).hover(function () {
  var filterValueClicked = $(this).attr("data-filter");

  if ($(this).hasClass("active")) {
    $(this).removeClass("active");
    return $(filterItemSelector).removeClass("filter-toggle-hide");
  }

  $(filterKeySelector).each(function () {
    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
      toggleFilter("");
      return;
    }
  });
  toggleFilter(filterValueClicked);
  $(this).addClass("active");
});

var toggleFilter = function toggleFilter(classVar) {
  $(filterItemSelector).each(function () {
    if ($(this).hasClass(classVar.substring(1, classVar.length))) {
      $(this).removeClass("filter-toggle-hide");
    } else {
      $(this).addClass("filter-toggle-hide");
    }
  });
};

var initialFilter = function initialFilter() {
  if (url("?filter")) return "." + url("?filter");
  return "all";
};