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
	sort: 'asc' | 'desc'
}
interface IPagination {
	totalRows: number
	rowsPerPage: number
	currentPage: number
}
interface IFuncSortTable {
	(orderBy: string, sort: string): void
}
interface IFuncSearch {
	(search: string): void
}
interface IFuncBtnAction {
	(e: Event): void
}
interface IFuncPagination {
	(num: number): void
}
interface IFuncCheckbox {
	(value: string, e?: Event): void
}
interface IFuncSelectAll {
	(value: boolean, e?: Event): void
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
	withMenuColumns?: boolean
	withOrder?: boolean
	withSearch?: boolean
	withFooter?: boolean
	withButton?: boolean
	enableAddCell?: boolean
	paymentAmount?: number
	iconButton?: React.ReactNode
	searchSuggestions?: object[]
	onHandleBtnAction?: IFuncBtnAction
	onHandlePaymentButton?: IFuncBtnAction
	onHandleSortTable?: IFuncSortTable
	onHandleSearch?: IFuncSearch
	onHandleChangeRowsPerPage?: IFuncPagination
	onHandleChangePage?: IFuncPagination
	onHandleSelectAll?: IFuncSelectAll
	onHandleSelectItem?: IFuncCheckbox
	onHandleToggleColumnTable?: IFuncCheckbox
};

declare const Table: React.ComponentType<TableProps>;

export default Table;