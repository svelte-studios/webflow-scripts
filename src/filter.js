const filterAllClass = `filter-all`;
const filterKeySelector = `.filter-key`;
const filterItemsSelector = `.filter-items`;
const filterItemSelector = `.filter-item`;
const filterValueSelector = `.filter-value`;

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
  if ($(this).hasClass(filterAllClass)) filterKeyText = "all";
  $(this).attr("data-filter", filterKeyText);
});

$(filterValueSelector).each(function () {
  const filterKeyText = convToFilter($(this).text());
  $(this).closest(filterItemSelector).addClass(filterKeyText);
});

const initialFilter = function () {
  if (url("?filter")) return "." + url("?filter");
  return "all";
};

mixitup(containerEl, {
  selectors: {
    target: filterItemSelector,
  },
  load: {
    filter: initialFilter(),
  },
});
