# Pagination

<p class="description">Component pagination for table</p>

{{"demo": "containers/views/pagination/Pagination.js"}}

<h1>
Props:
</h1>

| Name                               |      Type            |  Default | Description   |
|:-----------------------------------|:---------------------|:---------|:-------------| 
|   classes                          |   object             |          |               |
|     limits                         |       array          |          | Limits of input select.   |
|     onChangeInputPages             |  function            |          | Function about input present page. |
| onChangeLimitSelect                |      function        |          |Function OnChange for select              |
|    onClickBackPage                 |    function          |          | Function onclick for back icon.              |
|  onClickNextPage                   |   function           |          | Function onclick for next icon.              |
|  onKeyDownInputPages               |   function           |          | Function onkeydown for input of pages              |
|  totalPages                        |      number          |          | Show total pages              |
|  valueInputPages                   |      number          |          | Value for input pages              |	
| valueLimitSelect                   |      number          |          | Value for select               |	
|                                    |                      |          |               |	



   : PropTypes.func,

	
  
 
  onChangeLimitSelect: PropTypes.func,
  onClickBackPage    : PropTypes.func,
  onClickNextPage    : PropTypes.func,
  onKeyDownInputPages: PropTypes.func,
  totalPages         : PropTypes.number,
  valueInputPages    : PropTypes.number,
  valueLimitSelect   : PropTypes.number
