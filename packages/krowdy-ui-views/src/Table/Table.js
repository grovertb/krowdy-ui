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
import AddIcon from '@material-ui/icons/Add'


const useStyles = makeStyles({
	container: {
		// maxHeight: 400,
		overflow: 'auto'
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
	}
})

const Table = ({ 
	titleTable,
	titleButton,
	sortTable,
	pagination,
	columns = [], 
	rows = [],
	onHandleSortTable = () => false,
	onHandleSearch = () => false,
	onHandleBtnAction = () => false,
	onHandleChangePage = () => false,
	onHandleChangeRowsPerPage = () => false
}) => {
	const classes = useStyles()
	const inputSearch = useRef(null)

	const _handleSearchValidate = (e) => {
		const { value } = e.target
		if (e.keyCode === 13) onHandleSearch(value)
	}

	return (
		<Paper className={classes.containerTable}>
			<div className={clsx(classes.containerHeaderTable, { spaceBetween: titleTable })}>
				{titleTable  && <Typography>{titleTable}</Typography>}
				<div className={clsx(classes.containerSearch, { flexEnd: titleTable })}>
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
					<Button
						className={classes.customBottomAdd}
						color='primary'
						onClick={onHandleBtnAction}
						variant='outlined'>
						<AddIcon />
						{titleButton}
					</Button> 
				</div>
			</div>
			<TableContainer className={classes.container}>
				<MuiTable stickyHeader aria-label="sticky table">
					<TableHead>
						<TableRow>
							<TableCell padding="checkbox">
								<Checkbox
									// indeterminate={numSelected > 0 && numSelected < rowCount}
									// checked={numSelected === rowCount}
									onChange={() => false}
									inputProps={{ 'aria-label': 'select all desserts' }}
								/>
							</TableCell>
							{columns.filter(({ active }) =>  active).map(({ id, align, minWidth, label, ordering }) => (
								<TableCell
									key={id}
									align={align}
									style={{ minWidth }}
									sortDirection={sortTable.key === id ? sortTable.order : false}
								>
									{ordering ? (
										<TableSortLabel
											active={sortTable.key === id}
											direction={sortTable.key === id ? sortTable.order : 'asc'}
											onClick={() => onHandleSortTable(id, 'asc')}
										>
											<Typography className={classes.headerTable}>{label}</Typography>
										</TableSortLabel>
									) : (
											<Typography className={classes.headerTable}>{label}</Typography>
									) }
								</TableCell>
							))}
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
						</TableRow>
					</TableHead>
					<TableBody>
						{rows.map(({ name, status, type, incharge, currentTasks, amountPayable, amountTasks, incidents }, index) => {
							return (
								<TableRow hover key={index} role="checkbox">
									<TableCell padding="checkbox">
										<Checkbox
											// checked={isItemSelected}
											// inputProps={{ 'aria-labelledby': labelId }}
										/>
									</TableCell>
									<TableCell><Typography className={classes.bodyTable}>{name}</Typography></TableCell>
									<TableCell><Typography className={classes.bodyTable}>{status}</Typography></TableCell>
									<TableCell><Typography className={classes.bodyTable}>{type.join(', ')}</Typography></TableCell>
									<TableCell><Typography className={classes.bodyTable}>{incharge}</Typography></TableCell>
									<TableCell align='right'><Typography className={classes.bodyTable}>{currentTasks}</Typography></TableCell>
									<TableCell align='right'><Typography className={classes.bodyTable}>{amountPayable}</Typography></TableCell>
									<TableCell align='right'><Typography className={classes.bodyTable}>{amountTasks}</Typography></TableCell>
									<TableCell align='right'><Typography className={classes.bodyTable}>{incidents}</Typography></TableCell>
									<TableCell />
								</TableRow>
							);
						})}
					</TableBody>
				</MuiTable>
			</TableContainer>
			<TablePagination
				rowsPerPageOptions={[10, 25, 100]}
				component="div"
				count={pagination.totalRows}
				rowsPerPage={pagination.rowsPerPage}
				page={pagination.currentPage}
				onChangePage={onHandleChangePage}
				onChangeRowsPerPage={onHandleChangeRowsPerPage}
			/>
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
			amountPayable: PropTypes.number,
			amountTasks: PropTypes.number,
			currentTasks: PropTypes.number,
			incharge: PropTypes.string,
			incidents: PropTypes.number,
			name: PropTypes.string.isRequired,
			status: PropTypes.string.isRequired,
			type: PropTypes.array.isRequired
		})
	).isRequired,
	titleTable: PropTypes.string,
	titleButton: PropTypes.string,
	sortTable: PropTypes.shape({
		key: PropTypes.string.isRequired,
		order: PropTypes.oneOf(['asc', 'desc'])
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
	onHandleChangeRowsPerPage: PropTypes.func.isRequired
}

export default Table