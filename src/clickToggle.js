const featureListItemSelector = '.feature-click-item';
const featuredContentSelector = '.featured-content';
const featureListSelector = '.feature-list';
const activeItemClass = 'active';

$(featuredContentSelector).children().eq(0).css({ display: 'block' });

$(featureListItemSelector).click(function () {
  const listItemIndex = $(this).index();
  console.log(
    '🚀 ~ file: clickToggle.js ~ line 10 ~ listItemIndex',
    listItemIndex
  );

  $(featuredContentSelector)
    .children()
    .each(function () {
      if ($(this).css('display') !== 'none') $(this).css({ display: 'none' });
    });

  $(featureListSelector)
    .children()
    .each(function () {
      if ($(this).hasClass(activeItemClass))
        $(this).removeClass(activeItemClass);
    });

  $(featuredContentSelector)
    .children()
    .eq(listItemIndex)
    .css({ display: 'block' });
  $(featureListSelector).children().eq(listItemIndex).addClass(activeItemClass);
});
