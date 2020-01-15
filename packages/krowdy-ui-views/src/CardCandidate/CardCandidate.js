import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@krowdy-ui/styles'
import { Card, Avatar, Typography, Checkbox } from '@krowdy-ui/core'

export const styles = theme => ({
	avatar: {
		height: 28,
		width: 28
	},
	card: {
		'&:hover': {
			background: theme.palette.primary['50'],
			border: `0.5px solid ${theme.palette.primary['100']}`
		},
		alignItems: 'center',
		display: 'flex',
		height: 40,
		justifyContent: 'space-between',
		marginBottom: 8,
		width: 340
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
	const [checked, setChecked] = useState(false)
	const [changeCheckbox, setChangeCheckbox] = useState(false)
	const _handleMouseOver = () => {
		setChangeCheckbox(true)

	}
	const _handleMouseLeave = () => {
		if (checked === false) {
			setChangeCheckbox(false)
		} else {
			setChangeCheckbox(true)
		}
	}

	const _handleChange = (event) => {
		setChecked(event.target.checked)
	}
	const {
		id,
		fullName,
		imageAvatar,
		classes
	} = props

	return (
		<Card
			key={id}
			className={classes.card}
		>
			<div className={classes.root}>{
				changeCheckbox ?
					<Checkbox
						checked={checked}
						className={classes.checkbox}
						color='primary'
						onChange={_handleChange}
						onMouseLeave={_handleMouseLeave}
					/>
					:
					<Avatar onMouseOver={_handleMouseOver} src={imageAvatar} className={classes.avatar} >
						CA
            </Avatar>

			}
			</div>
			<div className={classes.labelCandidate}>
				<Typography className={classes.name} >
					{fullName}
				</Typography>
			</div>
		</Card>

	)
}

CardCandidate.propTypes = {
	classes: PropTypes.object,
	fullName: PropTypes.string,
	imageAvatar: PropTypes.node,
}

CardCandidate.muiName = 'CardCandidate'

export default withStyles(styles, { name: 'KrowdyCardCandidate' })(CardCandidate)