import React from 'react'
import { Grid } from '@krowdy-ui/core'
import { Table } from '@krowdy-ui/views'

export default function () {
	return (
		<Grid container>
			<Table
				columns={[
					{ id: 'name', label: 'Nombre', minWidth: 150, ordering: true },
					{ id: 'status', label: 'Estado', minWidth: 120, ordering: true },
					{ id: 'type', label: 'Tipo de actividad', minWidth: 170, ordering: false },
					{ id: 'incharge', label: 'Encargado', minWidth: 100, ordering: false },
					{ id: 'currentTasks', label: 'Tareas actuales', minWidth: 150, align: 'right', ordering: true },
					{ id: 'amountPayable', label: 'Monto por pagar', minWidth: 160, align: 'right', ordering: true },
					{ id: 'amountTasks', label: 'Tareas por pagar', minWidth: 160, align: 'right', ordering: true, },
					{ id: 'incidents', label: 'Incidentes', minWidth: 90, align: 'right', ordering: true }
				]}
				rows={[
					{ 
						name: 'Juan Perez',
						status: 'En linea', 
						type: ['LL', 'Ln', 'VoD', 'VE'], 
						incharge: 'Jimena', 
						currentTasks: 5 ,
						amountPayable: 45,
						amountTasks: 2,
						incidents: 5
					},
					{
						name: 'Juana de Arco',
						status: 'Hace 2 dias',
						type: ['LL', 'Ln'],
						incharge: 'Jimena',
						currentTasks: 2,
						amountPayable: 15,
						amountTasks: 0,
						incidents: 0
					},
					{
						name: 'Pedro de Arco',
						status: 'Hace 7 dias',
						type: ['LL', 'Ln'],
						incharge: 'Jimena',
						currentTasks: 2,
						amountPayable: 15,
						amountTasks: 0,
						incidents: 1
					},
					{
						name: 'Pedro Colmenarez',
						status: 'Invitado',
						type: ['LL', 'Ln'],
						incharge: 'Jimena',
						currentTasks: 2,
						amountPayable: 123,
						amountTasks: 4,
						incidents: 2
					}
				]}
			/>
		</Grid>
	)
}