import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@krowdy-ui/styles'
import clsx from 'clsx'
import { Button, ExpansionPanel, ExpansionPanelSummary, Grid, ExpansionPanelDetails, Typography } from '@material-ui/core'


export const styles = theme => ({
  alignSelf: {
    alignSelf: 'flex-start',
  },
  button: {
    '&:hover': {
      backgroundColor: 'transparent'
    },
    margin: 0,
    minWidth: 0,
    padding: 0,
  },
  content: {
    padding: theme.spacing(0, 1.5, 1.5, 1.5)
  },
  defaultColor: {
    backgroundColor: '#F2F4F7'
  },
  expanded: {
    margin: theme.spacing(0.8, 0),
    minHeight: 32,
  },
  heading: {
    fontWeight: 'bold',
  },
  iconDragContainer: {
    color: theme.palette.grey[500]
  },
  inputContent: {
    display: 'flex',
    flex: 1,
    margin: theme.spacing(0, 1)
  },
  marginBottomStandar: {
    margin: theme.spacing(0, 0, 1, 0)
  },
  paddingSide: {
    minHeight: 32,
    padding: theme.spacing(0, 1)
  },
  size: {
    fontSize: 14,
  },
  styleLess: {
    margin: 0,
    padding: 0,
  },
})


const CardUser = props => {
  const {
    classes,
    content,
    color = 'defaultColor',
    iconRemove,
    iconDrag,
    id,
    expandIcon,
    onChange = () => { },
    onDeleteItem = () => { },
    title,
  } = props


  return (
    <div className={classes.root} id={id}>
      <Grid
        tabIndex='-1'
        container
        justify='space-between'
        alignItems='center'
      >
        <Grid className={clsx(classes.iconDragContainer, classes.styleLess)} key='drag-icon' item>
          {(iconDrag) ? iconDrag : null}
        </Grid>
        <Grid className={classes.inputContent} key='expand-section' item >
          <ExpansionPanel classes={{ root: clsx(classes[color], classes.styleLess) }} onChange={onChange}>

            <ExpansionPanelSummary
              classes={{ content: classes.styleLess, expanded: classes.expanded, root: classes.paddingSide }}
              expandIcon={expandIcon ? expandIcon : null}
              id='panel1a-header'
            >
              <Typography component='div' className={clsx(classes.heading, classes.size)}>{(title) ? title : null}</Typography>
            </ExpansionPanelSummary>

            <ExpansionPanelDetails classes={{ root: clsx(classes.styleLess) }} className={classes.content}>
              <Typography component='div' className={clsx(classes.content, classes.size)}>
                {(content) ? content : null}
              </Typography>
            </ExpansionPanelDetails>

          </ExpansionPanel>
        </Grid>
        <Grid item className={clsx(classes.alignSelf, classes.styleLess)}>
          {(iconRemove) ? <Button
            key='btn-delete'
            className={classes.button}
            onClick={onDeleteItem}>{iconRemove}</Button> : null}
        </Grid>
      </Grid>

    </div >)

}

CardUser.propTypes = {
  classes: PropTypes.object,
  color: PropTypes.oneOf(['defaultColor']),
  content: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  expandIcon: PropTypes.node,
  iconDrag: PropTypes.node,
  iconRemove: PropTypes.node,
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  onChange: PropTypes.func,
  onDeleteItem: PropTypes.func,
  title: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired,
}

CardUser.muiName = 'CardUser'

export default withStyles(styles, { name: 'KrowdyCardUser' })(CardUser)