import React from 'react'
import { Grid } from '@krowdy-ui/core'
import { Table } from '@krowdy-ui/views'

export default function () {
	const _handleSortTable = (orderby, sort) => {
    console.log("TCL: _handleSortTable -> orderby", orderby, sort)
	}

	const _handleSearch = (search) => {
    console.log("TCL: _handleSearch -> search", search)
	}

	const _handleBtnAction = (e) => {
    console.log("TCL: _handleBtnAction -> e", e)
	}

	const _handleChangeRowsPerPage = () => {
		console.log('change row per page')
	}

	const _handleChangePage = () => {
		console.log('change page')
	}

	return (
		<Grid container>
			<Table
				sortTable={{
					key: 'name',
					order: 'asc'
				}}
				pagination={{
					totalRows: 275,
					rowsPerPage: 25,
					currentPage: 2
				}}
				titleButton='Agregar Krowder'
				onHandleSortTable={_handleSortTable}
				onHandleSearch={_handleSearch}
				onHandleBtnAction={_handleBtnAction}
				onHandleChangeRowsPerPage={_handleChangeRowsPerPage}
				onHandleChangePage={_handleChangePage}
				columns={[
					{ id: 'name', label: 'Nombre', minWidth: 150, ordering: true, active: true },
					{ id: 'status', label: 'Estado', minWidth: 120, ordering: true, active: true },
					{ id: 'type', label: 'Tipo de actividad', minWidth: 170, ordering: false, active: true },
					{ id: 'incharge', label: 'Encargado', minWidth: 100, ordering: false, active: true },
					{ id: 'currentTasks', label: 'Tareas actuales', minWidth: 150, align: 'right', ordering: true, active: true },
					{ id: 'amountPayable', label: 'Monto por pagar', minWidth: 160, align: 'right', ordering: true, active: true },
					{ id: 'amountTasks', label: 'Tareas por pagar', minWidth: 160, align: 'right', ordering: true, active: true },
					{ id: 'incidents', label: 'Incidentes', minWidth: 90, align: 'right', ordering: true, active: true },
					{ id: 'other', label: 'Otro valor', minWidth: 120, ordering: false, active: false }
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
						incidents: 5,
					},
					{
						name: 'Juana de Arco',
						status: 'Hace 2 dias',
						type: ['LL', 'Ln'],
						incharge: 'Jimena',
						currentTasks: 2,
						amountPayable: 15,
						amountTasks: 0,
						incidents: 0,
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
					},
					{
						name: 'Juan Perez',
						status: 'En linea',
						type: ['LL', 'Ln', 'VoD', 'VE'],
						incharge: 'Jimena',
						currentTasks: 5,
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
					},
					{
						name: 'Juan Perez',
						status: 'En linea',
						type: ['LL', 'Ln', 'VoD', 'VE'],
						incharge: 'Jimena',
						currentTasks: 5,
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
					},
				]}
			/>
		</Grid>
	)
}