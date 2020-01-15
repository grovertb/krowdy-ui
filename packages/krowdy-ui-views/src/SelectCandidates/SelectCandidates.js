import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@krowdy-ui/styles'
import {
	Card,
	CardContent,
	Checkbox,
	Typography,
	Select,
	Divider,
	FormGroup,
	FormControlLabel,
	CardHeader
} from '@krowdy-ui/core'

export const styles = theme => ({
	card: {
		borderRadius: 8,
		height: 'auto',
		width: 420
	},
	cardContent: {
		margin: '20px 38px 35px 42px',
		padding: 0
	},
	cardHeader: {
		margin: '16px 38px 16px 20px',
		padding: 0
	},
	formGroup: {
		display: ' flex',
		flexDirection: 'row'
	},
	headerLeft: {
		flex: '1'
	},
	labelCheckbox: {
		color: theme.palette.grey['700'],
		fontSize: 14,
		fontStyle: 'normal',
		fontWeight: 'normal',
		lineHeight: '16px'
	},
	optionStages: {
		color: theme.palette.grey['700'],
		fontSize: 14,
		fontWeight: 'normal',
		lineHeight: '16px'
	},
	selectStage: {
		color: theme.palette.grey['700'],
		fontSize: 14,
		fontWeight: 'normal',
		lineHeight: '16px',
		width: 340
	},
	text: {
		color: theme.palette.grey['800'],
		fontSize: 14,
		fontStyle: 'normal',
		fontWeight: 'normal',
		height: 20,
		lineHeight: '20px',
		margin: '20px 0px 16px 0px'
	},
	titleCardheader: {
		color: theme.palette.grey['700'],
		fontSize: 18,
		fontWeight: 'bold',
		lineHeight: '24px',
	}
})


const SelectCandidates = props => {
	const [changeCheckbox, setChangeCheckbox] = useState(false)

	const {
		optionsSelect,
		placeholderSearch,
		searchIcon,
		labelsCheckbox,
		CardCandidate,
		dataSource,
		Search,
		classes
	} = props

	return (
		<div style={{ margin: 10 }}>
			<Card className={classes.card}>
				<CardHeader
					className={classes.cardHeader}
					title='Seleccion de candidatos'
					classes={{ title: classes.titleCardheader }}
				/>
				<Divider />
				<CardContent className={classes.cardContent} >
					<Typography className={classes.text}>
						¿Para qué etapa es la tarea?
                    </Typography>
					<Select
						className={classes.selectStage}
						native
					>
						{
							optionsSelect.map((item, index) => (
								<option
									key={item}
									value={item}
									className={classes.optionStages}
								>
									Etapa {index + 1}
								</option>
							))
						}

					</Select>
					<Typography className={classes.text}>
						¿Para que candidato es la tarea?
                    </Typography>
					<FormGroup className={classes.formGroup}>
						{labelsCheckbox.map((txt) => (
							<FormControlLabel
								key={txt}
								value={txt}
								control={
									<Checkbox color='primary' />
								}
								label={txt}
								className={classes.labelCheckbox}

							/>
						))}
					</FormGroup>
					<Search
						placeholder={placeholderSearch}
						searchIcon={searchIcon}
					/>
					{dataSource.map(({ id, firstName, lastName, photo }) => (
						<CardCandidate
							key={id}
							style={{ alignItems: 'center', display: 'flex', marginBottom: 8 }}
							firstName={firstName}
							lastName={lastName}
							photo={photo}
							id={id}
						/>
					))}


				</CardContent>

			</Card >
		</div >
	)
}

SelectCandidates.propTypes = {
	CardCandidate: PropTypes.any,
	Search: PropTypes.any,
	classes: PropTypes.object,
	dataSource: PropTypes.array,
	labelsCheckbox: PropTypes.array,
	optionsSelect: PropTypes.array,
	placeholderSearch: PropTypes.string,
	searchIcon: PropTypes.any
}

SelectCandidates.muiName = 'SelectCandidates'

export default withStyles(styles, { name: 'KrowdySelectCandidates' })(SelectCandidates)