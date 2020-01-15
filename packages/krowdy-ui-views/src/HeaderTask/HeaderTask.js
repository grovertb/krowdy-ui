import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@krowdy-ui/styles'
import {
	Paper,
	Typography,
	Button,
	TextField,
	Switch,
	IconButton,
	FormControlLabel
} from '@krowdy-ui/core'


export const styles = theme => ({
	buttonsRight: {
		alignItems: 'center',
		display: 'flex'
	},
	headerLeft: {
		flex: '1'
	},
	iconArrow: {
		height: 18,
		width: 18
	},
	labelSwitch: {
		fontSize: '14px !important',
		fontStyle: 'normal',
		fontWeight: 'normal',
		lineHeight: '20px',
	},
	nameTask: {
		fontSize: 18,
		fontStyle: 'normal',
		fontWeight: 'bold',
		lineHeight: '24px',
		marginRight: 12,
	},
	paper: {
		alignItems: 'center',
		display: 'flex',
		height: 56,
		justifyContent: 'space-between',
		width: 1308
	},
	'switch': {
		marginRight: 6
	},
	task: {
		alignItems: 'center',
		display: 'flex'
	},
	textButton: {
		fontSize: 12,
		fontStyle: 'normal',
		fontWeight: 'normal',
		lineHeight: '100 %',
		marginRight: 12,
		textAlign: 'center'
	},
	textTextfield: {
		fontSize: 14,
		fontStyle: 'normal',
		fontWeight: 'normal',
		lineHeight: '100%',
	},
	titleTask: {
		marginBottom: 10
	}

})

const HeaderTask = props => {
	// const nameTask = 'Video Cuestionario'
	// const titleTask = 'Titulo de video entrevista'
	// const numberCandidates = 10
	// const index = 0
	// const id = null
	const {
		classes,
		onClickSelectCandidates,
		onClickUpdateTask,
		onClickSave,
		onClickActiveTask,
		onChangeTitleTask,
		onKeyUpTitleTask,
		nameTask,
		titleTask,
		valueTitleTask,
		numberCandidates,
		index,
		iconArrow,
		id
	} = props

	return (
		<Paper className={classes.paper}>
			<div className={classes.task}>
				<IconButton >
					{iconArrow}
				</IconButton>
				<Typography className={classes.nameTask}>
					{nameTask}
				</Typography>
				<Button
					variant='outlined'
					color='primary'
					onClick={onClickSelectCandidates}
					className={classes.textButton}>
					{`${numberCandidates} Candidatos - Etapa ${index + 1}`}
				</Button>
				<TextField
					onChange={onChangeTitleTask}
					onKeyUp={onKeyUpTitleTask}
					value={valueTitleTask}
					className={classes.titleTask}
					label={titleTask}
					InputLabelProps={{
						classes: {
							root: classes.textTextfield,
						}
					}}
					InputProps={{
						classes: {
							root: classes.textTextfield
						}
					}}
				>
				</TextField>
			</div>
			<div className={classes.buttonsRight}>
				{
					id
						?
						<div>
							<FormControlLabel
								classes={{
									label: classes.labelSwitch,
								}}
								className={classes.switch}
								control={
									<Switch
										color='primary'
										size='small'
									// checked={checked} 
									// onChange={toggleChecked}
									/>
								}
								label='Tarea activada'
								labelPlacement='start'
							/>
							<Button
								onClick={onClickUpdateTask}
								variant='outlined'
								color='primary'
								className={classes.textButton} >
								Actualizar tarea
                </Button>
						</div>
						:
						<div>
							<Button
								onClick={onClickSave}
								variant='outlined'
								color='primary'
								className={classes.textButton}>
								Guardar Borrador
              </Button>
							<Button
								onClick={onClickActiveTask}
								variant='contained'
								color='primary'
								className={classes.textButton}>
								Activar tarea
            </Button>
						</div>

				}
			</div>

		</Paper >

	)
}

HeaderTask.propTypes = {
	classes: PropTypes.object,
	id: PropTypes.number,
	index: PropTypes.number,
	nameTask: PropTypes.string,
	numberCandidates: PropTypes.number,
	onChangeTitleTask: PropTypes.any,
	onClickActiveTask: PropTypes.any,
	onClickSave: PropTypes.any,
	onClickSelectCandidates: PropTypes.any,
	onClickUpdateTask: PropTypes.any,
	onKeyUpTitleTask: PropTypes.any,
	titleTask: PropTypes.string,
	valueTitleTask: PropTypes.any,

}

HeaderTask.muiName = 'HeaderTask'

export default withStyles(styles, { name: 'KrowdyHeaderTask' })(HeaderTask)