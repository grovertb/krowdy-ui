# Search Tasks

<p class="description">Search and filter tasks</p>

{{"demo": "containers/views/searchtasks/SearchTask.js", "hideHeader": false, "bg": true, "bgColor": "white", "iframe": true }}

| prop                       | type    |default| description                                               |
| :------------------------- |:--------|------:|----------------------------------------------------------- |
| classes                    | object  | | Modify class.                                             |
| firtsList                  | array   |  | Array contains first list. Contains taskName and action keys    |
| iconOnSeeker               | node    | | Contains icon.                                            |
| onClickInItem              | function   | |  what happened at click |
| propsInput                 | object  | | Props applied to the 'Input' element.                     |
| propsListItemsToFirstList  | object  | |Props applied to the 'ListItems' element of first list.   |
| propsListItemsToSecondList | object  | | Props applied to the 'ListItems' element of second  list. |
| propsLists                 | object  | | Props applied to the 'List' element.                      |
| secondList                 | array   | | Array contains second lis. Contains taskName and action keys  |
| selected                 | string  | |  Element Id selected                     |