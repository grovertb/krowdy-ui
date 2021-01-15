# SuperFilters


<p class="description">SuperFilters</p>

{{"demo": "containers/views/superfilters/SuperFilters.js", "hideHeader": false, "bg": true, "bgColor": "gray" }}


| Name | Type | Default | Description |
|:-----|:-----|:--------|:------------|
| <span class="prop-name">title</span>                   | <span class="prop-type">string</span>          |                                         | Title for card in home                                           |
| <span class="prop-name">filterGroups</span>            | <span class="prop-type">array</span>           |                                         | List of filter groups                                            |
| <span class="prop-name">filters</span>                 | <span class="prop-type">array</span>           |                                         | List of applied filters                                          |
| <span class="prop-name">dots</span>                    | <span class="prop-type">bool</span>            | <span class="prop-default">false</span> | support dots in card with tooltip                                |
| <span class="prop-name">uniqueFilter</span>            | <span class="prop-type">bool</span>            | <span class="prop-default">false</span> | support dots in card with tooltip                                |
| <span class="prop-name">headerHomeComponent</span>     | <span class="prop-type">node</span>            | <span class="prop-default">null</span>  | Element to show in header home                                   |
| <span class="prop-name">listWidth</span>               | <span class="prop-type">number</span>          | <span class="prop-default">204</span>   | Width for virtualized category list                              |
| <span class="prop-name">hasNextPage</span>             | <span class="prop-type">bool</span>            | <span class="prop-default">false</span> | Indicates if category list has more items to load                |
| <span class="prop-name">loadMoreCategoryItems</span>   | <span class="prop-type">func</span>            |                                         | Callback to be invoked when more rows must be loaded             |
| <span class="prop-name">categoryItems</span>           | <span class="prop-type">array</span>           |                                         | List of category items                                           |
| <span class="prop-name">onChangeFilters</span>         | <span class="prop-type">func</span>            |                                         | Callback to be invoked when create, update, delete filters       |
| <span class="prop-name">onSelectCategoryFilter</span>  | <span class="prop-type">func</span>            |                                         | Callback to be invoked when enter in category type filter config |
| <span class="prop-name">classes</span>                 | <span class="prop-type">object</span>          |                                         | Override or extend the styles applied to the component.          |
| <span class="prop-name">onChangeFilterCandidate</span> | <span class="prop-type">func</span>            |                                         | campo para actualizar los array de candidatos                                          |
| <span class="prop-name">excludedCandidates</span>      | <span class="prop-type">{_id, label}[]</span>  |                                         | array de candidatos excluidos                                    |
| <span class="prop-name">includedCandidates</span>      | <span class="prop-type">{_id, label}[]</span>  |                                         | array de candidatos incluidos                                    |

