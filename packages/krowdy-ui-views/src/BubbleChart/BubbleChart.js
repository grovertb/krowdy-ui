import React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import { makeStyles, Tooltip, Typography } from '@krowdy-ui/core'
import Circle from './Circle'
import Avatar from './Avatar'

const BubbleChart = (props) => {
  const {
    skills,
    candidates,
    max = 4,
    skillWidth = 'auto'
  } = props
  const classes = useStyles({ skillWidth })

  return (
    <div className={classes.root}>
      <div className={clsx(classes.row, classes.container)}>
        <div className={clsx(classes.column, classes.skill)}>
          {
            skills.map(({ name }, index) => (
              <div className={classes.titleContainer} key={index}>
                {!isNaN(skillWidth) ? (
                  <Tooltip placement='right' title={name}>
                    <Typography className={classes.textTitle} variant='caption'>{name.length >= skillWidth / 3 ? `${name.slice(0, skillWidth / 3)}...`: name }</Typography>
                  </Tooltip>
                ): (
                  <Typography
                    variant='caption'>{name}</Typography>
                )}

              </div>
            ))
          }
        </div>
        <div className={clsx(classes.row, classes.bubblesContainer)}>
          {
            candidates.map(({ firstName, lastName, photo, skillsCandidate, selected }, index) => (
              <div className={clsx(classes.column, classes.center, classes.candidate, classes.hover)} key={index}>
                <div className={classes.avatar}>
                  <Avatar
                    active={selected ? selected : undefined}
                    classes={{
                      unselected: classes.avatarUnselected
                    }}
                    firstName={firstName}
                    key={index}
                    lastName={lastName}
                    photo={photo}
                    selected={selected} />
                </div>
                <div className={classes.bubbles} key={index}>
                  {
                    skills.map(({ name }) =>
                      skillsCandidate.find(skill => name === skill.name) || { name, scaleOrder: 0, value: '' }
                    ).map(({ scaleOrder, value }, index) => (
                      <div className={classes.bubble} key={index}>
                        <Circle
                          firstName={firstName}
                          lastName={lastName}
                          max={max}
                          selected={selected}
                          size={scaleOrder}
                          subtitle={value} />
                      </div>
                    ))
                  }
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

BubbleChart.propTypes = {
  candidates: PropTypes.arrayOf(PropTypes.shape({
    firstName      : PropTypes.string,
    lastName       : PropTypes.string,
    photo          : PropTypes.string,
    selected       : PropTypes.bool,
    skillsCandidate: PropTypes.arrayOf(PropTypes.shape({
      name      : PropTypes.string,
      scaleOrder: PropTypes.number,
      value     : PropTypes.string
    }))
  })),
  max       : PropTypes.number,
  skillWidth: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.oneOf([ 'auto' ])
  ]),
  skills: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string
  }))
}

const useStyles = makeStyles((theme) => ({
  avatar: {
    position: 'absolute',
    top     : -theme.spacing(4.5)
  },
  avatarUnselected: {
  },
  bubble: {
    alignItems    : 'center',
    display       : 'flex',
    height        : 38,
    justifyContent: 'center',
    width         : 38
  },
  bubbles: {
    display       : 'flex',
    flexDirection : 'column',
    height        : '100%',
    justifyContent: 'space-between'
  },
  bubblesContainer: {
    flex          : 1,
    justifyContent: 'space-between',
    overflowX     : 'auto',
    paddingTop    : theme.spacing(4.75)
  },
  candidate: {
    marginRight: theme.spacing(2)
  },
  center: {
    alignItems: 'center',
    position  : 'relative'
  },
  column: {
    display      : 'flex',
    flexDirection: 'column'
  },
  container: {
    marginTop: theme.spacing(3.25),
    minHeight: 150,
    width    : '100%'
  },
  hover: {
    '&:hover': {
      '& $avatarUnselected': {
        visibility: 'visible'
      }
    }
  },
  root: {
    display: 'flex'
  },
  row: {
    display      : 'flex',
    flexDirection: 'row'
  },
  skill: {
    alignItems    : 'flex-end',
    justifyContent: 'space-between',
    marginLeft    : theme.spacing(2),
    marginRight   : theme.spacing(2.5),
    paddingTop    : theme.spacing(4.75)
  },
  textTitle: {
    '-webkit-box-orient': 'vertical',
    '-webkit-line-clamp': 2,
    display             : '-webkit-box',
    overflow            : 'hidden'
  },
  title: {
    marginBottom: theme.spacing(1.25),
    marginTop   : theme.spacing(1.25)
  },
  titleContainer: {
    alignItems    : 'center',
    display       : 'flex',
    height        : 28,
    justifyContent: 'flex-end',
    textAlign     : 'end',
    width         : ({ skillWidth }) => skillWidth
  }
}), { name: 'BubbleChart' })

export default BubbleChart
