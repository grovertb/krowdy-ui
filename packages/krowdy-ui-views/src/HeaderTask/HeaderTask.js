import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@krowdy-ui/styles'
import {
	Paper,
	Typography,
	Button,
	TextField,
	IconButton,

} from '@krowdy-ui/core'
import { Dropdown } from '@krowdy-ui/views'

export const styles = theme => ({
	arrowIcon: {
		color: theme.palette.grey['500'],
		margin: theme.spacing(0, 1)
	},
	buttonsRight: {
		alignItems: 'center',
		display: 'flex'
	},
	iconArrow: {
		height: 18,
		width: 18
	},
	inputTextfield: {
		paddingTop: theme.spacing(0),
	},
	nameTask: {
		fontSize: 18,
		fontStyle: 'normal',
		fontWeight: 'bold',
		lineHeight: '24px',
		marginRight: theme.spacing(1.5),
	},
	paper: {
		alignItems: 'center',
		display: 'flex',
		height: 56,
		justifyContent: 'space-between',
		width: 'auto'
	},
	task: {
		alignItems: 'center',
		display: 'flex'
	},
	textButton: {
		fontSize: 12,
		fontStyle: 'normal',
		fontWeight: 'normal',
		height: 35,
		lineHeight: '100%',
		marginRight: 12,
		textAlign: 'center'
	},
	textButtonActive: {
		'&:active': {
			background: theme.palette.primary['500'],
		},
		'&:focus': {
			background: theme.palette.primary['600'],
		},
		'&:hover': {
			background: theme.palette.primary['400'],
		},
		fontSize: 12,
		fontStyle: 'normal',
		fontWeight: 'normal',
		height: 35,
		lineHeight: '100%',
		marginRight: 12,
		textAlign: 'center'
	},
	textTextfield: {
		fontSize: 14,
		fontStyle: 'normal',
		fontWeight: 'normal',
		lineHeight: '100%',

	},
})

const HeaderTask = props => {

	const {
		isDraft,
		classes,
		onClickSelectCandidates,
		onClickUpdateTask,
		onClickSave,
		onClickActiveTask,
		onChangeTitleTask,
		onKeyUpTitleTask,
		titleHeader,
		titleTask,
		valueTitleTask,
		numberCandidates,
		stageIndex,
		showInputName,
		arrowBackIcon,
		contentButton = <div> </div>,
		onClickArrowBackIcon,
		showButtonsRight,
		disabledSelectCandidates,
		_id = '',
		checkbox,
		disabledTitleTask,
		disabledUpdateTask,
		disabledSave,
		disableActiveTask,
		restPropsButton
	} = props

	return (
		<Paper className={classes.paper}>
			<div className={classes.task}>
				{IconButton && (<IconButton
					size='small'
					onClick={onClickArrowBackIcon}
					className={classes.arrowIcon}>
					{arrowBackIcon}
				</IconButton>)}
				<Typography className={classes.nameTask}>
					{titleHeader}
				</Typography>
				<Dropdown
					content={contentButton}
				>
					{
						(checkbox || numberCandidates) && stageIndex ?
							< Button
								color='primary'
								onClick={onClickSelectCandidates}
								className={classes.textButton}
								disabled={disabledSelectCandidates}
								{...restPropsButton}
							>
								{checkbox ? 'Todos' : ` ${numberCandidates} Candidatos`} - Etapa {stageIndex + 1}
							</Button>
							: null
					}

				</Dropdown>
				{
					showInputName ?
						<TextField
							disabled={disabledTitleTask}
							onChange={onChangeTitleTask}
							onKeyUp={onKeyUpTitleTask}
							value={valueTitleTask}
							className={classes.titleTask}
							placeholder={titleTask}
							InputLabelProps={{
								classes: {
									root: classes.textTextfield,
								}
							}}
							InputProps={{
								classes: {
									input: classes.inputTextfield,
									root: classes.textTextfield
								}
							}}
						/>
						:
						null
				}
			</div>
			<div className={classes.buttonsRight}>
				{showButtonsRight ?
					_id
						?
						isDraft ?
							<div>
								<Button
									disabled={disabledSave}
									onClick={onClickSave}
									variant='outlined'
									color='primary'
									className={classes.textButton}
									{...restPropsButton}
								>
									Guardar
								</Button>
								<Button
									disabled={disableActiveTask}
									onClick={onClickActiveTask}
									variant='contained'
									color='primary'
									className={classes.textButton}
									{...restPropsButton}
								>
									Activar tarea
								</Button>
							</div>
							:
							<div>
								<Button
									disabled={disabledUpdateTask}
									onClick={onClickUpdateTask}
									variant='outlined'
									color='primary'
									className={classes.textButton}
									{...restPropsButton}
								>
									Actualizar tarea
						    </Button>
							</div>
						:
						<div>
							<Button
								disabled={disabledSave}
								onClick={onClickSave}
								variant='outlined'
								color='primary'
								className={classes.textButton}
								{...restPropsButton}
							>
								Guardar Borrador
							</Button>
							<Button
								disabled={disableActiveTask}
								onClick={onClickActiveTask}
								variant='contained'
								color='primary'
								className={classes.textButtonActive}
								{...restPropsButton}
							>
								Activar tarea
						</Button>
						</div>
					:
					null
				}
			</div>

		</Paper >

	)
}

HeaderTask.propTypes = {
	_id: PropTypes.string,
	arrowBackIcon: PropTypes.node,
	checkbox: PropTypes.bool,
	checked: PropTypes.bool,
	classes: PropTypes.object,
	contentButton: PropTypes.any,
	disableActiveTask: PropTypes.bool,
	disabledSave: PropTypes.bool,
	disabledSelectCandidates: PropTypes.bool,
	disabledTitleTask: PropTypes.bool,
	disabledUpdateTask: PropTypes.bool,
	isDraft: PropTypes.bool,
	numberCandidates: PropTypes.number,
	onChange: PropTypes.func,
	onChangeTitleTask: PropTypes.func,
	onClickActiveTask: PropTypes.func,
	onClickArrowBackIcon: PropTypes.func,
	onClickSave: PropTypes.func,
	onClickSelectCandidates: PropTypes.func,
	onClickUpdateTask: PropTypes.func,
	onKeyUpTitleTask: PropTypes.func,
	showButtonsRight: PropTypes.bool,
	showInputName: PropTypes.bool,
	stageIndex: PropTypes.number,
	titleHeader: PropTypes.string,
	titleTask: PropTypes.string,
	valueTitleTask: PropTypes.any
}

HeaderTask.muiName = 'HeaderTask'

export default withStyles(styles, { name: 'KrowdyHeaderTask' })(HeaderTask)

