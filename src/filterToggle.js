const filterAllClass = `filter-all`;
const filterKeySelector = `.filter-toggle-key`;
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
  console.log("🚀 ~ filterKeyText", filterKeyText);
  $(this).attr("data-filter", filterKeyText);
});

$(filterValueSelector).each(function () {
  const filterKeyText = convToFilter($(this).text());
  $(this).closest(filterItemSelector).addClass(filterKeyText);
});
$(filterKeySelector).click(function () {
  console.log("🚀 ~ file: filterToggle.js ~ line 29 ~ $(this)", $(this));
});

const initialFilter = function () {
  if (url("?filter")) return "." + url("?filter");
  return "all";
};
