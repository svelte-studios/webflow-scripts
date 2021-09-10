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
  // $(this).closest(filterItemSelector).addClass(filterKeyText);
  $(this).closest(filterItemSelector).attr("data-filter", filterKeyText);
});

$(filterKeySelector).click(function () {
  $(this).attr("data-filter");
  console.log("🚀 ~ file", $(this).attr("data-filter"));
});

const initialFilter = function () {
  if (url("?filter")) return "." + url("?filter");
  return "all";
};
