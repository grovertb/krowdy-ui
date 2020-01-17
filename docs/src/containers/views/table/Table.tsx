import React, { useState } from 'react'
import { Grid } from '@krowdy-ui/core'
import { Table } from '@krowdy-ui/views'
import AddIcon from '@material-ui/icons/Add'


const demoColumns = [
	{ id: 'name', label: 'Nombre', minWidth: 150, ordering: true, active: true },
	{ id: 'status', label: 'Estado', minWidth: 120, ordering: true, active: true },
	{ id: 'type', label: 'Tipo de actividad', minWidth: 170, ordering: false, active: true },
	{ id: 'incharge', label: 'Encargado', minWidth: 100, ordering: false, active: true },
	// { id: 'currentTasks', label: 'Tareas actuales', minWidth: 150, align: 'right', ordering: true, active: true },
	// { id: 'amountPayable', label: 'Monto por pagar', minWidth: 160, align: 'right', ordering: true, active: true },
	// { id: 'amountTasks', label: 'Tareas por pagar', minWidth: 160, align: 'right', ordering: true, active: true },
	// { id: 'incidents', label: 'Incidentes', minWidth: 90, align: 'right', ordering: true, active: true },
	// { id: 'other', label: 'Otro valor', minWidth: 120, ordering: false, active: false }
]

export default function () {
	// const [sortTable, setSort] = useState({orderBy: '',sort: 'asc' })
	const [columns, setColumns] = useState(demoColumns)

	const searchSuggestions = [
		{ title: 'The Shawshank Redemption', year: 1994 },
		{ title: 'The Godfather', year: 1972 },
		{ title: 'The Godfather: Part II', year: 1974 },
		{ title: 'The Dark Knight', year: 2008 },
		{ title: '12 Angry Men', year: 1957 },
		{ title: "Schindler's List", year: 1993 },
		{ title: 'Pulp Fiction', year: 1994 },
		{ title: 'The Lord of the Rings: The Return of the King', year: 2003 },
		{ title: 'The Good, the Bad and the Ugly', year: 1966 },
		{ title: 'Fight Club', year: 1999 },
		{ title: 'The Lord of the Rings: The Fellowship of the Ring', year: 2001 },
		{ title: 'Star Wars: Episode V - The Empire Strikes Back', year: 1980 },
		{ title: 'Forrest Gump', year: 1994 }
	]

	const rows = [
		{
			_id: '0',
			name: 'Juan Perez',
			status: 'En linea',
			type: ['LL', 'Ln', 'VoD', 'VE'],
			incharge: 'Jimena',
			currentTasks: 5,
			amountPayable: 45,
			amountTasks: 2,
			incidents: 5,
			extra: 'Status'
		},
		{
			_id: '1',
			name: 'Juana de Arco',
			status: 'Hace 2 dias',
			type: ['LL', 'Ln'],
			incharge: 'Jimena',
			currentTasks: 2,
			amountPayable: 15,
			amountTasks: 0,
			incidents: 0,
			extra: 'Status'
		},
		{
			_id: '2',
			name: 'Pedro de Arco',
			status: 'Hace 7 dias',
			type: ['LL', 'Ln'],
			incharge: 'Jimena',
			currentTasks: 2,
			amountPayable: 15,
			amountTasks: 0,
			incidents: 1,
			extra: 'Status'
		},
		{
			_id: '3',
			name: 'Pedro Colmenarez',
			status: 'Invitado',
			type: ['LL', 'Ln'],
			incharge: 'Jimena',
			currentTasks: 2,
			amountPayable: 123,
			amountTasks: 4,
			incidents: 2,
			extra: 'Status'
		},
		// {
		// 	_id: '4',
		// 	name: 'Juan Perez',
		// 	status: 'En linea',
		// 	type: ['LL', 'Ln', 'VoD', 'VE'],
		// 	incharge: 'Jimena',
		// 	currentTasks: 5,
		// 	amountPayable: 45,
		// 	amountTasks: 2,
		// 	incidents: 5
		// },
		// {
		// 	_id: '5',
		// 	name: 'Juana de Arco',
		// 	status: 'Hace 2 dias',
		// 	type: ['LL', 'Ln'],
		// 	incharge: 'Jimena',
		// 	currentTasks: 2,
		// 	amountPayable: 15,
		// 	amountTasks: 0,
		// 	incidents: 0
		// },
		// {
		// 	_id: '6',
		// 	name: 'Pedro de Arco',
		// 	status: 'Hace 7 dias',
		// 	type: ['LL', 'Ln'],
		// 	incharge: 'Jimena',
		// 	currentTasks: 2,
		// 	amountPayable: 15,
		// 	amountTasks: 0,
		// 	incidents: 1
		// },
		// {
		// 	_id: '7',
		// 	name: 'Pedro Colmenarez',
		// 	status: 'Invitado',
		// 	type: ['LL', 'Ln'],
		// 	incharge: 'Jimena',
		// 	currentTasks: 2,
		// 	amountPayable: 123,
		// 	amountTasks: 4,
		// 	incidents: 2
		// },
		// {
		// 	_id: '8',
		// 	name: 'Juan Perez',
		// 	status: 'En linea',
		// 	type: ['LL', 'Ln', 'VoD', 'VE'],
		// 	incharge: 'Jimena',
		// 	currentTasks: 5,
		// 	amountPayable: 45,
		// 	amountTasks: 2,
		// 	incidents: 5
		// },
		// {
		// 	_id: '9',
		// 	name: 'Juana de Arco',
		// 	status: 'Hace 2 dias',
		// 	type: ['LL', 'Ln'],
		// 	incharge: 'Jimena',
		// 	currentTasks: 2,
		// 	amountPayable: 15,
		// 	amountTasks: 0,
		// 	incidents: 0
		// },
		// {
		// 	_id: '10',
		// 	name: 'Pedro de Arco',
		// 	status: 'Hace 7 dias',
		// 	type: ['LL', 'Ln'],
		// 	incharge: 'Jimena',
		// 	currentTasks: 2,
		// 	amountPayable: 15,
		// 	amountTasks: 0,
		// 	incidents: 1
		// },
		// {
		// 	_id: '11',
		// 	name: 'Pedro Colmenarez',
		// 	status: 'Invitado',
		// 	type: ['LL', 'Ln'],
		// 	incharge: 'Jimena',
		// 	currentTasks: 2,
		// 	amountPayable: 123,
		// 	amountTasks: 4,
		// 	incidents: 2
		// },
	]

	const _handleSortTable = (orderBy: string, sort: string): void  => {
		// setSort({ orderBy, sort })
		console.log("TCL: _handleSortTable -> orderby", orderBy, sort)
	}

	const _handleSearch = (search: string): void => {
		console.log("TCL: _handleSearch -> search", search)
	}

	const _handleBtnAction = (e: Event): void => {
		console.log("TCL: _handleBtnAction -> e", e)
	}

	const _handleChangeRowsPerPage = () => {
		console.log('change row per page')
	}

	const _handleChangePage = () => {
		console.log('change page')
	}

	const _handleSelectAll = (value: boolean): void => {
		console.log('click select all', value)
	}

	const _handleSelectItem = (index: string): void => {
		console.log('click en select', index)
	}

	const _handlePaymentButton = () => {
		console.log('click en pagar ')
	}

	const _handleToggleColumnTable = (id: string): void => {
		console.log('click en column con id', id)
		const newCols = columns.map((column) =>
			column.id === id ? {
				...column,
				active: !column.active
			} : column
		)
		setColumns(newCols)
	}

	return (
		<Grid container>
			<Table
				withFooter={false}
				withCheckbox={false}
				withPagination={false}
				withHeader={true}
				withMenuColumns={false}
				withOrder={false}
				withSearch={true}
				withButton={false}
				enableAddCell={true}
				iconButton={<AddIcon />}
				// titleTable='Tabla de Krowders'
				searchSuggestions={searchSuggestions}
				paymentAmount={350.20}
				sortTable={{
					orderBy: '',
					sort: 'asc'
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
				onHandleSelectAll={_handleSelectAll}
				onHandleSelectItem={_handleSelectItem}
				onHandlePaymentButton={_handlePaymentButton}
				onHandleToggleColumnTable={_handleToggleColumnTable}
				columns={columns}
				rows={rows}
			/>
		</Grid>
	)
}