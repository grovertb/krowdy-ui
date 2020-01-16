type sortValue = 'asc' | 'desc'
interface IColumnsTable {
	id: string
	label: string
	ordering: boolean
	minWidth?: number
	align?: string
	active: boolean
}

interface IRowsTable {
	_id?: string
	[extraProp: string]: any
}
interface ISortTable {
	orderBy: string
	sort: sortValue
}
interface IPagination {
	totalRows: number
	rowsPage: number
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
interface IFuncCheckbox {
	(onchange: (this: void, e: Event) => void): void
}


export type TableProps = {
	columns: Array<IColumnsTable>,
	rows: Array<IRowsTable>
	sortTable?: ISortTable
	titleTable?: string
	titleButton?: string
	pagination?: IPagination
	widthFooter?: boolean
	withCheckbox?: boolean
	withPagination?: boolean
	withHeader?: boolean
	withSelectColumns?: boolean
	withOrder?: boolean
	withSearch?: boolean
	withButton?: boolean
	paymentAmount?: number
	iconButton?: React.ComponentType
	onHandleBtnAction: IFuncBtnAction
	onHandlePaymentButton?: IFuncBtnAction
	onHandleSortTable: IFuncSortTable
	onHandleSearch: IFuncSearch
	onHandleChangeRowsPerPage?: IFuncPagination
	onHandleChangePage?: IFuncPagination
	onHandleSelectAll: IFuncCheckbox
	onHandleSelectItem: IFuncCheckbox
};

declare const Table: React.ComponentType<TableProps>;

export default Table;