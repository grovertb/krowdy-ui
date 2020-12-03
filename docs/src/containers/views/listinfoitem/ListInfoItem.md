# List Info Item

<p class="description">Informacion particular de la lista</p>

{{"demo": "containers/views/listinfoitem/ListInfoItem.js", "hideHeader": false, "bg": true, "bgColor": "white", "iframe": true }}

| Name                     | Type    | Default | Description                                                  |
| :----------------------- | :------ | :-----: | :----------------------------------------------------------- |
| _id                      | string  |         | identificador de la informacion                              |
| classes                  | Object  |         | clases de estilo que soportara para editar                   |
| disabled                 | Boolean |  false  | desactivar en caso de que sea de tipo boton                  |
| hover                    | Boolean |  false  | cambia el hover a un color primary 10                        |
| onChange                 | func    |         | obtienes el id seleccionado                                  |
| icon                     | element |         | color un icono a lado izquierdo                              |
| primaryTypographyProps   | Object  |         | configura los props del typography del titulo                |
| secondaryTypographyProps | Object  |         | configura los props del typography del subtitulo             |
| selected                 | boolean |         | coloca un check al item seleccionado                         |
| src                      | string  |         | url de la imagen que quieres usar en el icono de la izquierda |
| subtitle                 | string  |         | subtitulo                                                    |
| title                    | string  |         | titulo                                                       |
| variant                  | Enum    | default | las variantes sirven para el border, tienes: default, dashed y outlined |
| variantHover             | boolean |         | con este prop podras hacer que el variant aparezca cuando pases el mouse |
| avatarSize             | Enum | medium | setea el tamanio del icono del avatar en 3 tamaños: small, medium, large |
| iconColor             | string |         | coloca el color al icono de la izquierda |
| width             | number |         | ancho del contenedor |