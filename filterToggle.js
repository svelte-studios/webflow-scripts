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
  $(this).closest(filterItemSelector).addClass(filterKeyText);
});
$(filterKeySelector).click(function () {
  var filterValueClicked = $(this).attr("data-filter");
  var classVar = "".concat(filterItemSelector).concat(filterValueClicked);

  if ($(this).hasClass("active")) {
    $(this).removeClass("active");
    return $(filterItemSelector).removeClass("filter-toggle-hide");
  } // $(filterKeySelector).each(function () {
  //   if ($(this).hasClass("active")) {
  //     $(this).removeClass("active");
  //     $(filterItemSelector).each(function () {
  //       if ($(this).hasClass(filterValueClicked)) return;
  //       $(this).removeClass("filter-toggle-hide");
  //     });
  //     return $(
  //       `${filterItemSelector}${$(this).attr("data-filter")}`
  //     ).removeClass("filter-toggle-hide") ;
  //   }
  // });


  toggleFilter(classVar);
  $(this).addClass("active");
});

var toggleFilter = function toggleFilter(classVar) {
  $(filterItemSelector).each(function () {
    console.log("🚀 ~ classVar", classVar);
    console.log("🚀 ~ file: filterToggle.js ~ line 58 ~ $(this)", $(this));

    if ($(this).hasClass(classVar)) {
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