import React from 'react'
import PropTypes from 'prop-types'
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
	makeStyles
} from '@krowdy-ui/core';
import TableContainer from '@material-ui/core/TableContainer';
import MuiTable from '@krowdy-ui/core/Table';


const useStyles = makeStyles({
	headerTable: {
		fontWeight: 'bold',
		fontSize: 12
	},
	bodyTable: {
		fontSize: 12
	}
})

const Table = ({ columns = [], rows = [] }) => {
	const classes = useStyles()
	return (
		<Paper>
			<TableContainer>
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
							{columns.map(({ id, align, minWidth, label, ordering }) => (
								<TableCell
									key={id}
									align={align}
									style={{ minWidth }}
								// sortDirection={orderBy === headCell.id ? order : false}
								>
									{ordering ? (
										<TableSortLabel
										// active={orderBy === headCell.id}
										// direction={orderBy === headCell.id ? order : 'asc'}
										// onClick={createSortHandler(headCell.id)}
										>
											<Typography className={classes.headerTable}>{label}</Typography>
											{/* {orderBy === headCell.id ? (
							<span className={classes.visuallyHidden}>
								{order === 'desc' ? 'sorted descending' : 'sorted ascending'}
							</span>
						) : null} */}
										</TableSortLabel>
									) : (
											<Typography className={classes.headerTable}>{label}</Typography>
									) }
								</TableCell>
							))}
						</TableRow>
					</TableHead>
					<TableBody>
						{/* {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(row => { */}
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
								</TableRow>
							);
						})}
					</TableBody>
				</MuiTable>
			</TableContainer>
			{/* <TablePagination
				rowsPerPageOptions={[10, 25, 100]}
				component="div"
				count={rows.length}
				rowsPerPage={rowsPerPage}
				page={page}
				onChangePage={handleChangePage}
				onChangeRowsPerPage={handleChangeRowsPerPage}
			/> */}
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
	),
	rows: PropTypes.arrayOf(
		PropTypes.shape({
			amountPayable: PropTypes.number,
			amountTasks: PropTypes.number,
			currentTasks: PropTypes.number,
			incharge: PropTypes.string,
			incidents: PropTypes.number,
			name: PropTypes.string.isRequired,
			status: PropTypes.string.isRequired,
			type: PropTypes.string.isRequired
		})
	)
}

export default Table