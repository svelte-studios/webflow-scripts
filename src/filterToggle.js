const filterAllClass = `filter-all`;
const filterKeySelector = `.filter-toggle-key`;
const filterItemsSelector = `.filter-toggle-items`;
const filterItemSelector = `.filter-toggle-item`;
const filterValueSelector = `.filter-toggle-value`;

const convToFilter = function (str) {
  if (!str) {
    str = "empty";
  }
  return str
    .replace(/[!\"#$%&'\(\)\*\+,\.\/:;<=>\?\@\[\\\]\^`\{\|\}~]/g, "")
    .replace(/ /g, "-")
    .toLowerCase()
    .trim();
};

const containerEl = document.querySelector(filterItemsSelector);

$(filterKeySelector).each(function () {
  let filterKeyText = "." + convToFilter($(this).text());
  $(this).attr("data-filter", filterKeyText);
});

$(filterValueSelector).each(function () {
  const filterKeyText = convToFilter($(this).text());
  $(this).closest(filterItemSelector).addClass(filterKeyText);
});

$(filterKeySelector).click(function () {
  const filterValueClicked = $(this).attr("data-filter");
  const classVar = `${filterItemSelector}${filterValueClicked}`;
  if ($(this).hasClass("active")) {
    $(this).removeClass("active");
    return $(filterItemSelector).removeClass("filter-toggle-hide");
  }
  // $(filterKeySelector).each(function () {
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
  toggleFilter(filterValueClicked);
  $(this).addClass("active");
});

const toggleFilter = (classVar) => {
  $(filterItemSelector).each(function () {
    console.log("🚀 ~ classVar", classVar);
    if ($(this).hasClass(classVar)) {
      console.log("🚀 ~ file: filterToggle.js ~ line 58 ~ $(this)", $(this));
      $(this).removeClass("filter-toggle-hide");
    } else {
      $(this).addClass("filter-toggle-hide");
    }
  });
};

const initialFilter = function () {
  if (url("?filter")) return "." + url("?filter");
  return "all";
};
