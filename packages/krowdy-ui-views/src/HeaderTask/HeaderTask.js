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
		margin: '0px 8px'
	},
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
	inputTextfield: {
		paddingTop: 0,
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
		contentButton,
		onClickArrowBackIcon,
		showButtonsRight,
		disabledSelectCandidates,
		id,
		checkbox,
		disabledTitleTask,
		disabledUpdateTask,
		disabledSave,
		disableActiveTask
	} = props

	return (
		<Paper className={classes.paper}>
			<div className={classes.task}>
				<IconButton size='small' onClick={onClickArrowBackIcon} className={classes.arrowIcon}>
					{arrowBackIcon}
				</IconButton>
				<Typography className={classes.nameTask}>
					{titleHeader}
				</Typography>
				<Dropdown
					content={contentButton}
				>
					<Button
						variant='outlined'
						color='primary'
						onClick={onClickSelectCandidates}
						className={classes.textButton}
						disabled={disabledSelectCandidates}
					>
						{checkbox ? 'Todos' : ` ${numberCandidates} Candidatos`} - Etapa {stageIndex + 1}
					</Button>
				</Dropdown>
				{
					showInputName ?
						<TextField
							disabled={disabledTitleTask}
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
					(id && isDraft)
						?
						<div>
							<Button
								disabled={disabledSave}
								onClick={onClickSave}
								variant='outlined'
								color='primary'
								className={classes.textButton}>
								{isDraft && id ? 'Guardar ' : 'Guardar Borrador'}
							</Button>
							<Button
								disabled={disableActiveTask}
								onClick={onClickActiveTask}
								variant='contained'
								color='primary'
								className={classes.textButton}
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
								className={classes.textButton} >
								Actualizar tarea
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
	arrowBackIcon: PropTypes.node,
	checkbox: PropTypes.bool,
	checked: PropTypes.any,
	classes: PropTypes.object,
	contentButton: PropTypes.any,
	disableActiveTask: PropTypes.bool,
	disabledSave: PropTypes.bool,
	disabledSelectCandidates: PropTypes.bool,
	disabledTitleTask: PropTypes.bool,
	disabledUpdateTask: PropTypes.bool,
	id: PropTypes.string,
	isDraft: PropTypes.bool,
	numberCandidates: PropTypes.number,
	onChange: PropTypes.any,
	onChangeTitleTask: PropTypes.any,
	onClickActiveTask: PropTypes.any,
	onClickArrowBackIcon: PropTypes.func,
	onClickSave: PropTypes.any,
	onClickSelectCandidates: PropTypes.func,
	onClickUpdateTask: PropTypes.any,
	onKeyUpTitleTask: PropTypes.any,
	showButtonsRight: PropTypes.bool,
	showInputName: PropTypes.bool,
	stageIndex: PropTypes.number,
	titleHeader: PropTypes.string,
	titleTask: PropTypes.string,
	valueTitleTask: PropTypes.any

}

HeaderTask.muiName = 'HeaderTask'

export default withStyles(styles, { name: 'KrowdyHeaderTask' })(HeaderTask)

