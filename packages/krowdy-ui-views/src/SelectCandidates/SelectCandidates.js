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
	CircularProgress,
	IconButton
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
	close: {
		color: theme.palette.grey['800']
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
			backgroundColor: theme.palette.grey['100'],
			borderRadius: 10,

		},
		'&::-webkit-scrollbar': {
			height: 8,
			width: 5
		},
		'&::-webkit-scrollbar-thumb': {
			backgroundColor: theme.palette.grey['300'],
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
			borderBottom: `1px solid ${theme.palette.primary['600']}`
		},
		'&:hover': {
			borderBottom: `1px solid ${theme.palette.primary['400']}`
		},
		'&:inactive': {
			borderBottom: `1px solid ${theme.palette.grey['400']}`
		},
		borderBottom: `1px solid ${theme.palette.grey['400']}`,
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
		fontWeight: 'bold',
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
		numberSelecteds,
		Search,
		closeIcon,
		checkboxIndeterminate,
		classes,
		onChangeSearchText,
		checkedCurrentCandidates,
		onChangeCurrentCandidates,
		checkedcandidatesToCome,
		onChangecandidatesToCome,
		onChangeCheckboxItem,
		onNextCandidates,
		hasMore
	} = props

	return (
		<Card className={classes.card}>
			<div style={{ display: 'flex', justifyContent: 'space-between' }}>
				<CardHeader
					className={classes.cardHeader}
					title={`Candidatos (${numberSelecteds} seleccionados)`}
					classes={{ title: classes.titleCardheader }}
				/>
				<div style={{
					alignItems: 'center',
					display: 'flex',
					justifyContent: 'center',
					paddingRight: 23
				}}>
					<IconButton
						size='small'
						className={classes.close}>
						{closeIcon}
					</IconButton>
				</div>
			</div>

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
						className={classes.labelCheckbox}
						control={
							<Checkbox
								checked={checkedCurrentCandidates}
								color='primary'
								indeterminate={checkboxIndeterminate}
								name='currentCandidates'
								onChange={onChangeCurrentCandidates}
							/>
						}
						label='Candidatos actuales'
					/>
					<FormControlLabel
						className={classes.labelCheckbox}
						control={
							<Checkbox
								checked={checkedcandidatesToCome}
								color='primary'
								name='candidatesToCome'
								onChange={onChangecandidatesToCome}
							/>
						}
						label='Candidatos nuevos'
					/>
				</FormGroup>
				<Search
					onChange={onChangeSearchText}
					placeholder={placeholderSearch}
					searchIcon={searchIcon}
				/>
				<InfiniteScroll
					className={classes.infiniteScroll}
					dataLength={dataSource.length}
					hasMore={hasMore}
					height={218}
					loader={
						<div className={classes.circularProgress} >
							<CircularProgress size={20} />
						</div>
					}
					next={onNextCandidates}
				>
					{dataSource.map(({ _id, firstName, lastName, photo }) => (
						<CardCandidate
							_id={_id}
							checked={candidatesSelectIds.includes(_id)}
							firstName={firstName}
							initials={`${firstName.charAt(0).toUpperCase()}${lastName.charAt(0).toUpperCase()}`}
							key={_id}
							lastName={lastName}
							onChangeCheckbox={onChangeCheckboxItem}
							photo={photo}
							style={{ marginRight: '10px' }}
						/>
					))}
				</InfiniteScroll>

			</CardContent>

		</Card >
	)
}

SelectCandidates.propTypes = {
	CardCandidate: PropTypes.any,
	Search: PropTypes.any,
	candidatesSelectIds: PropTypes.array,
	checkboxIndeterminate: PropTypes.bool,
	checkedCurrentCandidates: PropTypes.any,
	checkedcandidatesToCome: PropTypes.any,
	classes: PropTypes.object,
	closeIcon: PropTypes.node,
	dataSource: PropTypes.array,
	itemSelect: PropTypes.any,
	labelsCheckbox: PropTypes.array,
	numberSelecteds: PropTypes.number,
	onChangeCurrentCandidates: PropTypes.func,
	onChangeSelectOptions: PropTypes.func,
	onChangecandidatesToCome: PropTypes.func,
	optionsSelect: PropTypes.array,
	placeholderSearch: PropTypes.string,
	searchIcon: PropTypes.node
}

SelectCandidates.muiName = 'SelectCandidates'

export default withStyles(styles, { name: 'KrowdySelectCandidates' })(SelectCandidates)