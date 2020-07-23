import React from 'react'
import PropTypes from 'prop-types'
import { Card, CardHeader, Typography, CardContent, CardActions, Dot, Button } from '@krowdy-ui/core'

const RankingGroup = props => {
  const {
    classes,
    status,
    name,
    candidateScores
  } = props

  return (
    <Card className={classes.root} elevation={3}>
      <CardHeader
        // action={<MenuOptions />}
        className={classes.header}
        title={(
          <div className={classes.containerTitle}>
            <Dot color={status === 'active' ? 'success' : 'default'} />
            <Typography className={classes.title}>{name}</Typography>
          </div>
        )} />
      <CardContent className={classes.content}>
        {candidateScores.map((candidateScore, index) => (
          <div className={classes.candidateRankingContainer} key={candidateScore._id}>
            <div className={classes.index}>{status === 'active' && (index + 1)}</div>
            {/* <CandidateCard candidate={candidateScore.candidate}  /> */}
          </div>
        ))}
      </CardContent>
      <CardActions className={classes.actions}>
        <div className={classes.alignItems}>
          {/* <MultiCheckBox
            classes={{
              root: classes.multiCheckBox
            }}
            label='Revisores'
            onChange={_handleChangeMultiCheckBox}
            options={options} /> */}
        </div>
        { status === 'draft' && <Button color='primary' /* onClick={_handleClickActiveGroup} */>Activar</Button>}
      </CardActions>
    </Card>
  )
}

RankingGroup.propTypes = {
  classes: PropTypes.shape({
    buttongroup: PropTypes.string
  })
}

export default RankingGroup
