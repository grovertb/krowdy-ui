interface IMultipleProps {
	[extraProp: string]: any
}
interface IColumnsTable {
	key: string
	label: string
	ordering: boolean
	minWidth?: number
	align?: string
	visible: boolean
	currency?: boolean
	columnComponent?: React.ReactNode
	codeCheck?: string
	excludeOfFilter?: string
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
	total: number
	perPage: number
	page: number
}
interface IFuncSortTable {
	(sort: ISortTable): void
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
interface IFuncId {
	(value: string, e?: Event): void
}
interface IFuncSelectAll {
	(value: boolean, e?: Event): void
}

interface IFuncAddNewCell {
	(newCell: IMultipleProps): void
}

interface ICheckIcons {
	code?: string
	component?: React.ReactNode
}

export type TableProps = {
	checkIcons: Array<ICheckIcons>
	columns: Array<IColumnsTable>
	rows: Array<IRowsTable>
	sortTable?: ISortTable
	titleTable?: string
	titleButton?: string
	addNewCell?: boolean
	pagination?: IPagination
	currency?: string
	widthFooter?: boolean
	withCheckbox?: boolean
	withPagination?: boolean
	withHeader?: boolean
	withMenuColumns?: boolean
	withOrder?: boolean
	withSearch?: boolean
	withFooter?: boolean
	withButton?: boolean
	withAutocomplete?: boolean
	enableAddCell?: boolean
	stickyHeader?: boolean
	paymentAmount?: number
	maxHeight?: number | string
	iconButton?: React.ReactNode
	newCellProps?: IMultipleProps
	searchSuggestions?: Array<IMultipleProps>
	onHandleBtnAction?: IFuncBtnAction
	onHandlePaymentButton?: IFuncBtnAction
	onHandleSortTable?: IFuncSortTable
	onHandleSearch?: IFuncSearch
	onHandleChangeRowsPerPage?: IFuncPagination
	onHandleChangePage?: IFuncPagination
	onHandleSelectAll?: IFuncSelectAll
	onHandleSelectItem?: IFuncId
	onHandleClickRow?: IFuncId
	onHandleToggleColumnTable?: IFuncId
	onHandleAddNewCell?: IFuncAddNewCell
	onHandleSendNewCell?: IFuncAddNewCell
	onHandleSelectAutocomplete?: IFuncId
};

declare const Table: React.ComponentType<TableProps>;

export default Table;