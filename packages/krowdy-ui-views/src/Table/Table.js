import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import { 
	Paper, 
	TableBody, 
	TableCell,  
	TableHead, 
	TableSortLabel, 
	TablePagination, 
	TableRow, 
	Checkbox, 
	Typography,
	Menu,
	MenuItem,
	FormControlLabel,
	Box,
	InputAdornment,
	TextField,
	Button,
	makeStyles
} from '@krowdy-ui/core';
import TableContainer from '@material-ui/core/TableContainer';
import MuiTable from '@krowdy-ui/core/Table';
import IconButton from '@krowdy-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles(theme => ({
	container: {
		// maxHeight: 400,
		// overflow: 'auto'
	},
	containerSearch: {
		display: 'flex',
		justifyContent: 'space-between',
		'&.flexEnd':{
			justifyContent: 'flex-end'
		}
	},
	containerTable: {
		overflow: 'hidden'
	},
	headerTable: {
		fontWeight: 'bold',
		fontSize: 12
	},
	bodyTable: {
		fontSize: 12
	},
	inputSearch: {
		margin: '2px 0',
		'& * input': {
			padding: '12px 10px',
			fontSize: 14,
			width: 400
		}
	},
	customBottomAdd: {
		border: 'dashed 1px',
		margin: '2px 10px',
		textTransform: 'initial'
	},
	searchIcon: {
		cursor: 'pointer'
	},
	containerHeaderTable: {
		padding: '16px',
		'&.spaceBetween':{
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'space-between'
		}
	},
	textAmount: {
		color: theme.palette.primary.main,
		fontSize: 18,
		lineHeight: '24px',
		fontWeight: 'bold'
	},
	textTotal: {
		marginRight: 5,
		fontSize: 14,
		lineHeight: '20px',
		fontWeight: 'bold'
	},
	buttonFooter: {
		width: '100px',
		fontSize: 12
	}
}))

const Table = ({ 
	titleTable,
	titleButton,
	sortTable,
	pagination,
	paymentAmount,
	iconButton,
	columns = [], 
	rows = [],
	withFooter = false,
	withCheckbox = false,
	withPagination = false,
	withHeader = false,
	withSelectColumns = false,
	withOrder = false,
	withSearch = true,
	withButton = false,
	onHandleSortTable = () => false,
	onHandleSearch = () => false,
	onHandleBtnAction = () => false,
	onHandleChangePage = () => false,
	onHandleChangeRowsPerPage = () => false,
	onHandleSelectAll = () => false,
	onHandleSelectItem = () => false,
	onHandlePaymentButton = () => false
}) => {
	const classes = useStyles()
	const inputSearch = useRef(null)

	const _handleSearchValidate = (e) => {
		const { value } = e.target
		if (e.keyCode === 13) onHandleSearch(value)
	}

	const handleSortTable = (id, ref) => {
		const { orderBy, sort } = ref
		const invertSort = sort === 'asc' ? 'desc' : 'asc'
		if(id !== orderBy){
			return onHandleSortTable(id, 'asc')
		}
		return onHandleSortTable(id, invertSort)
	}

	return (
		<Paper className={classes.containerTable}>
			{
				withHeader ? (
					<div className={clsx(classes.containerHeaderTable, { spaceBetween: titleTable })}>
						{titleTable && <Typography>{titleTable}</Typography>}
						<div className={clsx(classes.containerSearch, { flexEnd: titleTable })}>
							{withSearch ? (
								<TextField
									variant="outlined"
									className={classes.inputSearch}
									id="input-with-icon-textfield"
									placeholder='Buscar'
									inputRef={inputSearch}
									onKeyUp={_handleSearchValidate}
									InputLabelProps={{ shrink: false }}
									InputProps={{
										endAdornment: (
											<InputAdornment position="end">
												<SearchIcon onClick={() => onHandleSearch(inputSearch.current.value)} className={classes.searchIcon} />
											</InputAdornment>
										),
									}}
								/>
							) : null}
							{withButton ? (
								<Button
									className={classes.customBottomAdd}
									color='primary'
									onClick={onHandleBtnAction}
									variant='outlined'>
									{iconButton}
									{titleButton}
								</Button>
							) : null}
							
						</div>
					</div>
				) : null
			}
			<TableContainer className={classes.container}>
				<MuiTable stickyHeader aria-label="sticky table">
					<TableHead>
						<TableRow>
							{withCheckbox ? (
								<TableCell padding="checkbox">
									<Checkbox
										onChange={(e) => onHandleSelectAll(e.target.checked)}
										inputProps={{ 'aria-label': 'select all desserts' }}
									/>
								</TableCell>
							) : null}
							{columns.filter(({ active }) =>  active).map(({ id, align, minWidth, label, ordering }) => (
								<TableCell
									key={id}
									align={align}
									style={{ minWidth }}
									sortDirection={sortTable.orderBy === id ? sortTable.sort : false}
								>
									{withOrder && ordering ? (
										<TableSortLabel
											active={sortTable.orderBy === id}
											direction={sortTable.orderBy === id ? sortTable.sort : 'asc'}
											onClick={() => handleSortTable(id, sortTable)}
										>
											<Typography className={classes.headerTable}>{label}</Typography>
										</TableSortLabel>
									) : (
											<Typography className={classes.headerTable}>{label}</Typography>
									) }
								</TableCell>
							))}
							{withSelectColumns ? (
								<TableCell>
									<IconButton
										aria-label="more"
										aria-controls="long-menu"
										aria-haspopup="true"
									// onClick={_handleClickOpenMenu}
									>
										<MoreVertIcon />
									</IconButton>
								</TableCell>
							) : null}
								
						</TableRow>
					</TableHead>
					<TableBody>
						{rows.map((row, index) => {

							const { _id, selected } = row
							return (
								<TableRow hover key={index} role="checkbox">
									{withCheckbox ? (
										<TableCell padding="checkbox">
											<Checkbox
												checked={selected}
												onChange={() => onHandleSelectItem(_id)}
												// inputProps={{ 'aria-labelledby': name }}
											/>
										</TableCell>
									) : null}
									{columns.filter(({ active }) => active).map(({ id }) => {
										return (
											<TableCell align={typeof row[id] === 'number' ? 'right': 'left'}>
												<Typography className={classes.bodyTable}>
													{Array.isArray(row[id]) ? (row[id].join(', ')) : row[id] }
												</Typography>
											</TableCell>
										)
									})}
									{withSelectColumns ? (<TableCell />) : null}
								</TableRow>
							);
						})}
					</TableBody>
				</MuiTable>
			</TableContainer>
			{
				withPagination ? (
					<TablePagination
						rowsPerPageOptions={[10, 25, 100]}
						component="div"
						count={pagination.totalRows}
						rowsPerPage={pagination.rowsPerPage}
						page={pagination.currentPage}
						onChangePage={onHandleChangePage}
						onChangeRowsPerPage={onHandleChangeRowsPerPage}
					/>
				) : null
			}
			{
				withFooter ? (
					<Box display='flex' justifyContent='flex-end' padding={2} className={classes.footerTable}>
						<Box display='flex' className={classes.containerPayment}>
							<Box display='flex' marginRight={3} alignItems='center' className={classes.paymentText}>
								<Typography className={classes.textTotal}>Total</Typography>
								<Typography className={classes.textAmount}>s/ {paymentAmount.toFixed(2)}</Typography>
							</Box>
							<Button onClick={onHandlePaymentButton} className={classes.buttonFooter} color='primary' variant='contained'>Pagar</Button>
						</Box>
					</Box>
				) : null
			}
		</Paper>
	)
}

Table.propTypes = {
	columns: PropTypes.arrayOf(
		PropTypes.shape({
			align: PropTypes.string,
			id: PropTypes.string.isRequired,
			label: PropTypes.string.isRequired,
			minWidth: PropTypes.number,
			ordering: PropTypes.bool.isRequired,
		})
	).isRequired,
	rows: PropTypes.arrayOf(
		PropTypes.shape({
			_id: PropTypes.string.isRequired,
			amountPayable: PropTypes.number,
			amountTasks: PropTypes.number,
			currentTasks: PropTypes.number,
			incharge: PropTypes.string,
			incidents: PropTypes.number,
			name: PropTypes.string.isRequired,
			selected: PropTypes.bool,
			status: PropTypes.string.isRequired,
			type: PropTypes.array.isRequired
		})
	).isRequired,
	titleTable: PropTypes.string,
	titleButton: PropTypes.string,
	withFooter: PropTypes.bool,
	withCheckbox: PropTypes.bool,
	withPagination: PropTypes.bool,
	withHeader: PropTypes.bool,
	withSelectColumns: PropTypes.bool,
	withOrder: PropTypes.bool,
	withSearch: PropTypes.bool,
	withButton: PropTypes.bool,
	iconButton: PropTypes.element,
	paymentAmount: PropTypes.number,
	sortTable: PropTypes.shape({
		orderBy: PropTypes.string,
		sort: PropTypes.oneOf(['asc', 'desc'])
	}),
	pagination: PropTypes.shape({
		totalRows: PropTypes.number.isRequired,
		rowsPerPage: PropTypes.number.isRequired,
		currentPage: PropTypes.number.isRequired
	}),
	onHandleSortTable: PropTypes.func.isRequired,
	onHandleSearch: PropTypes.func.isRequired,
	onHandleBtnAction: PropTypes.func.isRequired,
	onHandleChangePage: PropTypes.func.isRequired,
	onHandleChangeRowsPerPage: PropTypes.func.isRequired,
	onHandleSelectAll: PropTypes.func.isRequired,
	onHandleSelectItem: PropTypes.func.isRequired,
	onHandlePaymentButton: PropTypes.func
}

export default Table