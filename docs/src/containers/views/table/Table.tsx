import React from 'react'
import { Grid } from '@krowdy-ui/core'
import { Table } from '@krowdy-ui/views'

export default function () {
	return (
		<Grid container>
			<Table
				columns={[
					{ id: 'name', label: 'Nombre', minWidth: 170, ordering: true },
					{ id: 'status', label: 'Estado', minWidth: 120, ordering: true },
					{ id: 'type', label: 'Tipo de actividad', minWidth: 170, ordering: false },
					{ id: 'incharge', label: 'Encargado', minWidth: 170, ordering: false },
					{ id: 'curentTasks', label: 'Tareas actuales', minWidth: 170, align: 'right', ordering: true },
					{ id: 'amountPayable', label: 'Monto por pagar', minWidth: 170, align: 'right', ordering: true },
					{ id: 'amountTasks', label: 'Tareas por pagar', minWidth: 170, align: 'right', ordering: true, },
					{ id: 'incidents', label: 'Incidentes', minWidth: 100, align: 'right', ordering: true }
				]}
				rows={[]}
			/>
		</Grid>
	)
}