# Filtering

Include the following scripts:

<script src="https://cdnjs.cloudflare.com/ajax/libs/mixitup/3.3.0/mixitup.min.js" crossorigin="anonymous" referrerpolicy="no-referrer"></script>

<script src="https://cdnjs.cloudflare.com/ajax/libs/js-url/2.5.3/url.min.js" integrity="sha512-YlfjbwbVZGikywbRiBmrMZh4gkigfbNHBLi8ZVQUMCGn/5Fnc700QDiZ3OC4WY2peX1nrqUbCcHyOyvKR8hwNA==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>

<script src="https://svelte-studios.github.io/webflow-scripts/filter.js" crossorigin="anonymous" referrerpolicy="no-referrer"></script>

Apply the following classes to the relevant elements on the page.

# filter-key

Apply the filter key class to the elements that can be clicked and has text as its content.
This can be a link inside of a collection list.

```
<a href="#" class="filter-key">Category</a>
```

# filter-all

Apply the filter in addition to the filter-key to the element that can be clicked and has text as its content.

```
<a href="#" class="filter-key filter-all">All</a>
```

1. "filter-key" + "filter-all"
2. "filter-items"
3. "filter-item"
4. "filter-value"
