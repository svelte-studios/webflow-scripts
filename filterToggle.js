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
    return $(classVar).removeClass("filter-toggle-hide");
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


  $(this).addClass("active");
  $(filterItemSelector).each(function () {
    console.log("🚀 ~  classVar", classVar);

    if ($(this).hasClass(classVar)) {
      return $(this).removeClass("filter-toggle-hide");
    }

    $(this).addClass("filter-toggle-hide");
  });
});

var initialFilter = function initialFilter() {
  if (url("?filter")) return "." + url("?filter");
  return "all";
};