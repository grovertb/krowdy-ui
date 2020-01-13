import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { withStyles, makeStyles } from '@krowdy-ui/core/styles'
import { Card, Avatar, Typography, IconButton, Checkbox } from '@krowdy-ui/core'
import MoreVertIcon from '@krowdy-ui/icons/MoreVert';

export const styles = () => ({
    headerLeft: {
        flex: '1'
    }
})

const useStyles = makeStyles(theme => ({
    root: {
        marginLeft: '8px'
    },
    iconMoreVert: {
        '& .MuiSvgIcon-root': {
            height: 18,
            width: 18
        },
        marginRight: '4px',
    },
    name: {
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '12px',
        color: '#595959'
    },
    card: {
        '&:hover': {
            background: '#E6F7FF',
            border: '0.5px solid rgb(128, 219, 255)'
        }
    },
    avatar: {
        // '&:hover': {
        //     backgroundColor: 'red',
        // }
    }
}))
const CardCandidate = props => {
    const searchCandidates = true
    const [checked, setChecked] = useState(false)
    const [changeCheckbox, setChangeCheckbox] = useState(false)
    const classes = useStyles()
    const handleMouseOver = () => {
        setChangeCheckbox(true)

    }
    const handleMouseLeave = () => {
        if (checked === false) {
            setChangeCheckbox(false)
        } else {
            setChangeCheckbox(true)
        }
    }

    const handleChange = (event) => {
        setChecked(event.target.checked)
    }
    const {
        id,
        label,
        src,
    } = props

    return (
        <div style={{ margin: '50px 0px 0px 150px', display: 'flex' }}>
            <Card
                key={id}
                className={classes.card}
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    marginBottom: 8,
                    width: 340,
                    height: 40,
                    justifyContent: 'space-between'
                }} >
                <div className={classes.root}>{
                    changeCheckbox ?
                        <Checkbox
                            checked={checked}
                            style={{
                                width: '28px',
                                height: '28px'
                            }}
                            color='primary'
                            onChange={handleChange}
                            onMouseLeave={handleMouseLeave}
                        />
                        :
                        <Avatar
                            src={src}
                            className={classes.avatar}
                            onMouseOver={handleMouseOver}
                            style={{
                                width: '28px',
                                height: '28px'
                            }}
                        >
                            CA
                        </Avatar>

                }
                </div>
                <div style={{
                    marginLeft: '8px',
                    width: '300px'
                }}>
                    <Typography className={classes.name} >
                        {label}
                    </Typography>
                </div>
                {searchCandidates === false ?
                    <IconButton className={classes.iconMoreVert}>
                        <MoreVertIcon />
                    </IconButton> : <></>
                }

            </Card>
        </div >
    )
}

CardCandidate.propTypes = {
    label: PropTypes.string,
    src: PropTypes.node,
}

CardCandidate.muiName = 'CardCandidate';

export default withStyles(styles, { name: 'KrowdyCardUser' })(CardCandidate)