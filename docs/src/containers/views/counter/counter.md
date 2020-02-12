
# Counter

<p class="description">Counter with zeros</p>

{{"demo": "containers/views/counter/Counter.js"}}

<h1>Props</hi>

| Name                    |      Type      |  Default | Description                                                  |
|:------------------------|:---------------|:---------|:-------------------------------------------------------------| 
| addIcon                 |    icon        |          | ```<AddIcon/>``` Icon (+)                                    |
| classes                 |    object      |          | Override or extend the styles applied to the component.      |
| color                   |    string      |  primary | The color of the component. It supports those theme colors that make sense for this component.      |
| disabled                | boolean           |          | If true, the counter will be disabled.                       |
| type                    |    string      | medium   | Font size of input. (small:12px , medium:14px)               |
| name                    |    string      |          | The name attribute specifies the name of an input element.   |
| max                     |    number      |          | Maximum limit of the counter.                                |
| min                     |    number      |          | Minimum counter limit.                                       |
| name                    |   string       |          | The name attribute specifies the name of an input element.   |
| number                  |   number       |          | is the number that increases and decreases.                  |      
| onChange                |    func    |          | Callback fired when the state is changed.<br/><br>  **Signature:** <br/>`function(event: { target: { name: string, value: number }}) => void`                |
| removeIcon              |   icon         |          | ```<RemoveIcon/>``` Icon (-)                                 |

