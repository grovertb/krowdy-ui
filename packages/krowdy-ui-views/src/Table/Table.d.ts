interface ColumnsTable {
	id: string,
	label: string,
	ordering: boolean,
	minWidth?: number,
	align?: string
}

interface RowsTable {
	name: string
	status: string,
	type: Array<string>,
	incharge: string,
	currentTasks: number
	amountPayable: number,
	amountTasks: number,
	incidents: number
}

export type TableProps = {
	columns: Array<ColumnsTable>,
	rows: Array<RowsTable>
};

declare const Table: React.ComponentType<TableProps>;

export default Table;