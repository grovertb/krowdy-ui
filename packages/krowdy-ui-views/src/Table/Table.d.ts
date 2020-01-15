type orderValue = 'asc' | 'desc'
interface IColumnsTable {
	id: string,
	label: string,
	ordering: boolean,
	minWidth?: number,
	align?: string,
	active: boolean
}

interface IRowsTable {
	name: string
	status: string,
	type: Array<string>,
	incharge: string,
	currentTasks: number
	amountPayable: number,
	amountTasks: number,
	incidents: number
}
interface ISortTable {
	key: string,
	order: orderValue
}
interface IPagination {
	totalRows: number,
	rowsPage: number,
	currentPage: number
}
interface IFuncSortTable {
	(id: string, sort: string): void
}
interface IFuncSearch {
	(search: string): void
}
interface IFuncBtnAction {
	(onclick: (this: void, e: Event) => void): void
}
interface IFuncPagination {
	(num: number): void
}

export type TableProps = {
	columns: Array<IColumnsTable>,
	rows: Array<IRowsTable>,
	sortTable?: ISortTable,
	titleTable?: string,
	titleButton?: string,
	pagination?: IPagination,
	onHandleBtnAction: IFuncBtnAction
	onHandleSortTable: IFuncSortTable
	onHandleSearch: IFuncSearch
	onHandleChangeRowsPerPage: IFuncPagination
	onHandleChangePage: IFuncPagination
};

declare const Table: React.ComponentType<TableProps>;

export default Table;