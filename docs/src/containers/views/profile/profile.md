# Perfil

<p class="description">Perfil de usuario</p>

## Profile

{{"demo": "containers/views/profile/Profile.js", "bg": true}}

### Todos los parametros de fecha deben de llegar en cantidad de meses

| Name           | Type     | Default | Description                                                  |
| :------------- | :------- | :------ | :----------------------------------------------------------- |
| action         | Node     |         | Componente personalizado                                     |
| ascent         | Object   |         | delimita los ascensos                                        |
| experience     | Number   |         | años de experiencia                                          |
| workExperience | Object   |         | cantidad y tiempo de experiencia                             |
| name           | String   |         | nombre del candidato                                         |
| rating         | Number   |         | cantidad de estrellas                                        |
| rotation       | Object   |         | cantidad y tiempo de rotación                                |
| salaryText     | String   |         | texto de lo que saldra para determinar que candidato es mas comodo |
| experiences    | Array    |         | lista de experiencias del candidato                          |
| onCV           | Function |         | ensenia el cv cuando le das click al + n experiencias        |
| slice          | number   | 2       | recorte de las experiencias que se mostraran                 |

