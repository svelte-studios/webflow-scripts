const featureListItemSelector = ".featurelistitem";
const featureListContent = ".featurelistcontent";

const contentContainerEl = document.querySelector(featureListContent);

$(featureListItemSelector).hover(() => {
  const thisIndex = $(this).index();
  console.log(
    "🚀 ~ file: displayOnHover.js ~ line 12 ~ $ ~ thisIndex",
    thisIndex
  );
});

$(featureListItemSelector).hover(() => {
  const thisIndex = $(this).index();
  console.log(
    "🚀 ~ file: displayOnHover.js ~ line 12 ~ $ ~ thisIndex",
    thisIndex
  );
});
