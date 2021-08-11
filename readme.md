# Filtering

Similar solution: https://webflow.com/blog/dynamic-filtering-and-sorting

Include the following scripts:

```
<script src="https://cdnjs.cloudflare.com/ajax/libs/mixitup/3.3.0/mixitup.min.js" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/js-url/2.5.3/url.min.js" integrity="sha512-YlfjbwbVZGikywbRiBmrMZh4gkigfbNHBLi8ZVQUMCGn/5Fnc700QDiZ3OC4WY2peX1nrqUbCcHyOyvKR8hwNA==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
<script src="https://svelte-studios.github.io/webflow-scripts/filter.js" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
```

Apply the following classes to the relevant elements on the page.

## filter-key

Apply the filter key class to the elements that can be clicked and has text as its content.
This can be a link inside of a collection list.

```
<a href="#" class="filter-key">Category</a>
```

## filter-all

Apply the filter in addition to the filter-key to the element that can be clicked and has text as its content.

```
<a href="#" class="filter-key filter-all">All</a>
```

## filter-items

Apply this class to the wrapper around the item to be filtered.
This could be the collection list wrapper.

```
<div class="filter-items"></div>
```

## filter-item

Apply this class to the item inside the wrapper.

```
<div class="news-articles filter-items">
    <div class="news-cms-item filter-item"></div>
</div>
```

## filter-value

Apply this class to an element inside the filter item that represents the value to filter by.
The element should have text that corresponds to the filter-key
Each filter-item can have many filter-value elements.

```
<div class="filter-value">Category1</div>
<div class="filter-value">Category2</div>
```

## apply the initial filter

When navigating to a page you can apply a filter by supplying a filter querystring parameter.

```
<a href="/page?filter=category">Link to page</a>
```
