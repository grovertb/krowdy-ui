# Cards 

<p class="description">View All Cards </p>

{{"demo": "containers/views/cards/Cards.js", "hideHeader": false, "bg": true, "bgColor": "white", "iframe": true }}

<h2> Props </h2>

| prop             | type    | description                 |
| :----------------|:--------| :---------------------------|
| action           | node    | The action to display in the card header.|
| avatar      | node  | The Avatar for the Card Header.  |
| cardHeaderProps   | object  | Contains properties of CardHeader element . |
| classes  | object  | Modify class.   |
| content | node  | Card Content  |
| disabledHover | bool  |  If is true,  gover disabled |
| onClick | func  | Card Function |
| sizePadding   | string  |  two values : 'small' or 'middle'   |  
| title   | node o string  |  If is string title     | 


<h2> CSS </h2>


| Rule name   | Global name | Description             |
| :-----------|:--------| :---------------------------|
| action |  .KrowdyCardContainer-action   | Styles applied to the action element.|
| cardContent |  .KrowdyCardContent  | Styles applied to the content element.|
| header      |  .MuiCardHeader-root | Styles applied to the root element of Header.  |
| root | .KrowdyCardContainer   |   Styles applied to the root element of Card.|
| title   |   | Styles applied to the title Typography element.|
