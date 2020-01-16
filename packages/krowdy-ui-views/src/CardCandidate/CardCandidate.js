import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@krowdy-ui/styles'
import { Card, Avatar, Typography, Checkbox, Paper } from '@krowdy-ui/core'

export const styles = theme => ({
	avatar: {
		height: 28,
		width: 28,
		fontStyle: 'normal',
		fontWeight: 'normal',
		fontSize: 10,
		lineHeight: '100%',
		textAlign: 'center',
		color: '#8C8C8C',
		backgroundColor: '#FFFFFF',
		border: '1px solid #E8E8E8'
	},
	card: {
		'&:hover': {
			background: theme.palette.primary['50'],
			border: `0.5px solid ${theme.palette.primary['100']}`
		},
		alignItems: 'center',
		borderRadius: 8,
		display: 'flex',
		boxShadow: 'none',
		boxSizing: 'border-box',
		border: `1px solid ${theme.palette.grey['400']}`,
		height: 40,
		justifyContent: 'space-between',
		marginBottom: 8,
		width: '100%'
	},
	checkbox: {
		height: 28,
		width: 28
	},
	headerLeft: {
		flex: '1'
	},
	labelCandidate: {
		marginLeft: 8,
		width: 300
	},
	name: {
		color: theme.palette.grey['700'],
		fontSize: 12,
		fontStyle: 'normal',
		fontWeight: 'normal'
	},
	root: {
		marginLeft: 8
	}
})

const CardCandidate = props => {
	const {
		checked,
		id,
		firstName,
		initials,
		lastName,
		onChangeCheckbox,
		imageAvatar,
		classes
	} = props


	const [changeCheckbox, setChangeCheckbox] = useState(false)
	const _handleMouseOver = () => {
		setChangeCheckbox(checked)

	}
	const _handleMouseLeave = () => {
		setChangeCheckbox(checked)

	}


	return (
		<Paper
			className={classes.card}
			key={id}
		>
			<div className={classes.root}>{
				checked ? (
					<Checkbox
						checked={checked}
						className={classes.checkbox}
						color='primary'
						onChange={onChangeCheckbox}
						onMouseLeave={_handleMouseLeave}
					/>
				) : changeCheckbox ?
						<Checkbox
							checked={checked}
							className={classes.checkbox}
							color='primary'
							onChange={onChangeCheckbox}
							onMouseLeave={_handleMouseLeave}
						/>
						:
						<Avatar
							className={classes.avatar}
							onMouseOver={_handleMouseOver}
							src={imageAvatar}
						>
							{initials}
						</Avatar>

			}
			</div>
			<div className={classes.labelCandidate}>
				<Typography className={classes.name} >
					{firstName} {lastName}
				</Typography>
			</div>
		</Paper>

	)
}

CardCandidate.propTypes = {
	initials: PropTypes.string,
	checked: PropTypes.any,
	classes: PropTypes.object,
	firstName: PropTypes.string,
	id: PropTypes.number,
	imageAvatar: PropTypes.node,
	lastName: PropTypes.string,
	onChangeCheckbox: PropTypes.any,
}

CardCandidate.muiName = 'CardCandidate'

export default withStyles(styles, { name: 'KrowdyCardCandidate' })(CardCandidate)