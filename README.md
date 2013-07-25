Selectify-jQuery-Plugin
=======================
Select one or more items from a container and mark them with an additional class. This is not limited to lists. You can pass an element selector of your choice as option.

The usage is similar to most file Browsers:
* Mouseclick selects or deselects item depending on current state
* CTRL + Mouseclick adds or removes an item to the selection
* SHIFT + Mouseclick adds all items between the last click and the current click (including current clicked item) to the selection. In case there were no items selected before all items preceeding the item and including the item are selected.

Available options are:
* element: a selector for an element in the container (defaults to li)
* marker: a class to be add to a selected element (defaults to selectify-selected)

Example usage:

<code>$('.selectable').selectify({marker: 'selected', element: 'div.item'});</code>

Check out the demo on [jsFiddle](http://jsfiddle.net/chris_l/UCLHa/2/).
