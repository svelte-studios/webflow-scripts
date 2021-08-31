const featureListItemSelector = ".featurelistitem";
const featureListContent = ".featurelistcontent";

const contentContainerEl = document.querySelector(featureListContent);

$(featureListItemSelector).hover(function () {
  const listItemIndex = $(this).index();

  $(featureListContent)
    .children()
    .each(function () {
      console.log(
        "🚀 ~ file: displayOnHover.js ~ line 17 ~ this.index()",
        $(this).index()
      );
      if ($(this).css("display") !== "none") $(this).css({ display: "none" });
    });

  console.log(
    "🚀 ~ file: displayOnHover.js ~ line 20 ~ $(featureListContent).children().eq(listItemIndex).index()",
    $(featureListContent).children().eq(listItemIndex).index()
  );
  $(featureListContent).children().eq(listItemIndex).css({ display: "block" });
});
