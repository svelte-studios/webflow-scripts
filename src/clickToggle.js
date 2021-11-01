const featureAllItemSelector = '.feature-click-all';
const featureListItemSelector = '.feature-click-item';
const featuredAllContentSelector = '.featured-content-all';
const featuredContentSelector = '.featured-click-content';
const featureListSelector = '.feature-list';
const activeItemClass = 'active';

const initialFilter = function () {
  const urlFilter = url('?filter');
  console.log(
    '🚀 ~ file: clickToggle.js ~ line 11 ~ initialFilter ~ urlFilter',
    urlFilter
  );
  if (!urlFilter) {
    $(featuredAllContentSelector).css({ display: 'block' });
    $(featureAllItemSelector).addClass(activeItemClass);
    return;
  }

  $(featureListItemSelector).each(function () {
    const filterKeyText = convToFilter($(this).text());
    console.log(
      '🚀 ~ file: clickToggle.js ~ line 19 ~ filterKeyText',
      filterKeyText
    );
    if (filterKeyText === urlFilter) {
      const listItemIndex = $(this).index();
      $(featureListSelector)
        .children()
        .eq(listItemIndex)
        .addClass(activeItemClass);

      $(featuredContentSelector)
        .children()
        .eq(listItemIndex)
        .css({ display: 'block' });
      return;
    }
  });
};

initialFilter();

$(featureListItemSelector).click(function () {
  const listItemIndex = $(this).index();
  const allSelector = $(featuredAllContentSelector);

  if (allSelector.css('display') !== 'none')
    allSelector.css({ display: 'none' });

  $(featuredContentSelector)
    .children()
    .each(function () {
      if ($(this).css('display') !== 'none') $(this).css({ display: 'none' });
    });

  $(featureAllItemSelector).removeClass(activeItemClass);
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

$(featureAllItemSelector).click(function () {
  $(featuredContentSelector)
    .children()
    .each(function () {
      $(this).css({ display: 'none' });
    });

  $(featuredAllContentSelector).css({ display: 'block' });

  $(featureListSelector)
    .children()
    .each(function () {
      $(this).removeClass(activeItemClass);
    });

  $(featureAllItemSelector).addClass(activeItemClass);
});
