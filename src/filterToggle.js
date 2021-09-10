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
  const keys = $(this).text().split(",");
  const elementToAddClass = $(this).closest(filterItemSelector);
  keys.forEach(function (i) {
    const filterKeyText = convToFilter(i);
    elementToAddClass.addClass(filterKeyText);
  });
});

$(filterKeySelector).mouseenter(function () {
  const filterValueClicked = $(this).attr("data-filter");
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

const toggleFilter = (classVar) => {
  $(filterItemSelector).each(function () {
    if ($(this).hasClass(classVar.substring(1, classVar.length))) {
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
