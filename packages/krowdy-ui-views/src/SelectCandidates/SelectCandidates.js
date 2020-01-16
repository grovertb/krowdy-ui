import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@krowdy-ui/styles'
import InfiniteScroll from 'react-infinite-scroll-component'
import {
	Card,
	CardContent,
	Checkbox,
	Typography,
	MenuItem,
	Select,
	Divider,
	FormGroup,
	FormControlLabel,
	CardHeader,
	CircularProgress
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
	circularProgress: {
		display: 'flex',
		justifyContent: 'center',
		overflow: 'hidden'
	},
	formGroup: {
		display: ' flex',
		flexDirection: 'row',
		marginBottom: 14
	},
	headerLeft: {
		flex: '1'
	},
	infiniteScroll: {
		'&::-webkit-box-shadow': {
			backgroundColor: '#F5F5F5',
			borderRadius: 10,

		},
		'&::-webkit-scrollbar': {
			height: 8,
			width: 5
		},
		'&::-webkit-scrollbar-thumb': {
			backgroundColor: '#D8D8D8',
			borderRadius: 2
		},
		'&::-webkit-scrollbar-track': {
			borderRadius: 2,
			width: 1
		},
		marginTop: 12,
		maxHeight: 220,
		minHeight: 218,
		overflow: 'hidden auto',
		paddingRight: 5
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
		'&:active': {
			borderBottom: '1px solid #096DD9'
		},
		'&:hover': {
			borderBottom: '1px solid #40A9FF'
		},
		'&:inactive': {
			borderBottom: '1px solid #D9D9D9'
		},
		borderBottom: '1px solid #D9D9D9',
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

	const {
		candidatesSelectIds = [],
		optionsSelect = [],
		placeholderSearch,
		onChangeSelectOptions,
		itemSelect,
		searchIcon,
		dataSource = [],
		CardCandidate,
		Search,
		onChangeIndeterminateCandidates,
		classes,
		checkedCurrentCandidates,
		onChangeCurrentCandidates,
		checkedcandidatesToCome,
		onChangecandidatesToCome,
		onChangeCheckboxItem
	} = props

	return (
		// <div style={{ margin: 10 }}>
		<Card className={classes.card}>
			<CardHeader
				className={classes.cardHeader}
				title='Selección de candidatos'
				classes={{ title: classes.titleCardheader }}
			/>
			<Divider />
			<CardContent className={classes.cardContent} >
				<Typography className={classes.text}>
					¿Para qué etapa es la tarea?
          </Typography>
				<Select
					disableUnderline
					className={classes.selectStage}
					onChange={onChangeSelectOptions}
					value={itemSelect}
				>
					{
						optionsSelect.map((item, index) => (
							<MenuItem
								key={item}
								value={item}
								className={classes.optionStages}
							>
								Etapa {index + 1}
							</MenuItem>
						))
					}

				</Select>
				<Typography className={classes.text}>
					¿Para qué candidatos es la tarea?
          </Typography>
				<FormGroup className={classes.formGroup}>
					<FormControlLabel
						control={
							<Checkbox
								name='currentCandidates'
								checked={checkedCurrentCandidates}
								onChange={onChangeCurrentCandidates}
								indeterminate={onChangeIndeterminateCandidates}
								color='primary' />
						}
						label='Candidatos actuales'
						className={classes.labelCheckbox}
					/>
					<FormControlLabel
						control={
							<Checkbox
								name='candidatesToCome'
								checked={checkedcandidatesToCome}
								onChange={onChangecandidatesToCome}
								color='primary' />
						}
						label='Candidatos nuevos'
						className={classes.labelCheckbox}
					/>
				</FormGroup>
				<Search
					placeholder={placeholderSearch}
					searchIcon={searchIcon}
				/>
				<InfiniteScroll
					className={classes.infiniteScroll}
					dataLength={dataSource.length}
					height={218}
					next={() => {
						console.log('trae mas')
					}}
					hasMore={true}
					loader={
						<div className={classes.circularProgress} >
							<CircularProgress size={20} />
						</div>

					}
				>
					{dataSource.map(({ id, firstName, lastName, photo }) => (
						<CardCandidate
							initials={`${firstName.charAt(0).toUpperCase()}${lastName.charAt(0).toUpperCase()}`}
							style={{ marginRight: '10px' }}
							checked={candidatesSelectIds.includes(id)}
							firstName={firstName}
							key={id}
							onChangeCheckbox={onChangeCheckboxItem}
							lastName={lastName}
							photo={photo}
							id={id}
						/>
					))}
				</InfiniteScroll>

			</CardContent>

		</Card >
		// </div >
	)
}

SelectCandidates.propTypes = {
	CardCandidate: PropTypes.any,
	Search: PropTypes.any,
	candidatesSelectIds: PropTypes.array,
	checkedCurrentCandidates: PropTypes.any,
	checkedcandidatesToCome: PropTypes.any,
	classes: PropTypes.object,
	dataSource: PropTypes.array,
	itemSelect: PropTypes.any,
	labelsCheckbox: PropTypes.array,
	onChangeCurrentCandidates: PropTypes.func,
	onChangeIndeterminateCandidates: PropTypes.bool,
	onChangeSelectOptions: PropTypes.func,
	onChangecandidatesToCome: PropTypes.func,
	optionsSelect: PropTypes.array,
	placeholderSearch: PropTypes.string,
	searchIcon: PropTypes.any
}

SelectCandidates.muiName = 'SelectCandidates'

export default withStyles(styles, { name: 'KrowdySelectCandidates' })(SelectCandidates)