# Cards 

<p class="description">View All Cards </p>

{{"demo": "containers/views/cardexpand/CardExpand.js", "hideHeader": false, "bg": true, "bgColor": "white", "iframe": true }}

<h2> Props </h2>

| prop             | type    | description                 |
| :----------------|:--------| :---------------------------|
| classes  | object  | Modify class.   |
| content | node  | Card Content  |
| onClick | func  | Card Function |
| defaultExpanded | boolean | If is true  |
| expandIcon | node | Icon Expan of @krowdy-ui/icons  |
| onChange | func  | return true or false |
| title | string or node | Title of CardExpand  |

<h2> CSS </h2>

| Rule name   | Global name | Description             |
| :-----------|:--------| :---------------------------|
| container |  .KrowdyCardContainer  | Styles applied to the container element.|
| content |  .KrowdyCardContent  | Styles applied to the content element.|
| expandDetails    |  .KrowdyCardExpand-expanded | Styles applied to the root element of Header.  |
| heading | .MuiExpansionPanelSummary-root   |   Styles applied to the root element of Card.|
| size   |   | Styles applied to text size.| 