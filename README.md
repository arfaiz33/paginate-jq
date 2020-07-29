# paginate-jq
Simple dynamic pagination based on jQuery
___
## Prerequisite
Of course [jQuery](https://jquery.com/)
___
## Usage
add to html head file:
```html
<script src"/path/to/paginate-jq.js"></script>
```
inside html file:
```html
<div class="{pg_target}">
    <div class="{pg_target_ch}"></div>
    <div class="{pg_target_ch}"></div>
    ...
</div>

<ul class="{target_name}" data-max-item={max_item} data-pg-target="{pg_target}" data-pg-target-ch="{pg_target_ch}" data-item-class="{item_class}"></ul>
```
{pg_target} for Items container (Parent)
{pg_target_ch} for Items (Children)
{max_item} for max items per page
{item_class} for navigation class (class inside li)
inside js file:
```javascript
$(document).ready(function() {
    paginate_jq("{target_name}");
});
```
{target_name} in JS and HTML must be same. Use it with query selector symbol.
___
## Example
if you use class 'paginate-nav' for the ul target:
```html
<div class="pg-parent">
    <div class="pg-children"></div>
    <div class="pg-children"></div>
    ...
</div>
<ul class="paginate-nav" data-max-item=10 data-pg-target=".pg-parent" data-pg-target-ch=".pg-children" data-item-class=""></ul>
```
```javascript
$(document).ready(function() {
    paginate_jq(".paginate-nav");
});
```
___
## Demo and Docs
please visit [this webpage](https://boodoamat.my.id/paginate-jq/)
___
## Licence
[MIT Licence](https://opensource.org/licenses/MIT)
