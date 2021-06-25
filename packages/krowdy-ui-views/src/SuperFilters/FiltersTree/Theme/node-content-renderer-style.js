import { makeStyles } from '@krowdy-ui/styles'

export default makeStyles(({ palette, spacing, shape }) => ({
  '@keyframes arrow-pulse': {
    '0%': {
      opacity  : 0,
      transform: 'translate(0, 0)'
    },
    '100%': {
      opacity  : 0,
      transform: 'translate(0, 1000%)'
    },
    '30%': {
      opacity  : 1,
      transform: 'translate(0, 300%)'
    },
    '70%': {
      opacity  : 1,
      transform: 'translate(0, 700%)'
    }
  },
  absoluteLineBlock: {
    position: 'absolute',
    top     : 0
  },
  collapseButton: {},
  containerCard : {
    alignItems: 'center',
    display   : 'flex',
    width     : '100%'
  },
  contentDrag: {
    alignItems: 'center',
    color     : palette.grey[600],
    cursor    : 'grab',
    display   : 'flex',
    zoom      : '75%'
  },
  expandButton             : {},
  highlightBottomLeftCorner: {
    zIndex: 3
  },
  highlightLineVertical: {
    zIndex: 3
  },
  highlightTopLeftCorner: {},
  lineBlock             : {
    display : 'inline-block',
    flex    : '0 0 auto',
    height  : '100%',
    position: 'relative'
  },
  lineChildren: {
    display: 'inline-block',
    height : '100%'
  },
  lockIcon: {
    color: palette.secondary[300]
  },
  nodeContent: {
    '& $collapseButton, & $expandButton': {
      '&::after': {
        border          : 'solid transparent 10px',
        borderLeftWidth : 7,
        borderRightWidth: 7,
        borderTopColor  : 'gray',
        content         : '""',
        position        : 'absolute',
        transform       : 'translate3d(-50%, -20%, 0)',
        transformOrigin : '7px 4px'
      },
      '&:focus': {
        '&::after': {
          filter: 'drop-shadow(0 0 1px #83bef9) drop-shadow(0 0 1px #83bef9) drop-shadow(0 0 1px #83bef9)'
        },
        outline: 'none'
      },
      '&:hover::after': {
        borderTopColor: 'black'
      },
      appearance: 'none',
      background: 'transparent',
      border    : 'none',
      cursor    : 'pointer',
      height    : 30,
      padding   : 0,
      position  : 'absolute',
      top       : '45%',
      transform : 'translate3d(-50%, -50%, 0)',
      width     : 30,
      zIndex    : 2
    },
    '& $lineBlock, & $absoluteLineBlock': {
      display : 'inline-block',
      flex    : '0 0 auto',
      height  : '100%',
      position: 'relative'
    },
    '& $rowContent': {
      alignItems     : 'center',
      backgroundColor: 'white',
      borderRadius   : '3px',
      color          : '#595959',
      display        : 'flex',
      height         : '100%',
      justifyContent : 'space-between',
      position       : 'relative'
    },
    '& $rowLabel': {
      flex   : 1,
      padding: spacing(0, .75)
    },
    width: '100%'
  },
  row: {
    '& $rowContentTitle, & $rowContentChips': {
      minWidth: 150
    },
    '& $rowIcon, & $rowLabel,& $rowToolbar': {
      alignItems: 'center',
      display   : 'flex'
    },
    '& $rowPanelLeft, & $rowPanelRight': {
      display       : 'flex',
      flexDirection : 'column',
      justifyContent: 'space-between'
    },
    '&$rowCancelPad': {
      '&::before': {
        backgroundColor: '#ffd2d6',
        border         : '2px dotted #e6a8ad'
      }
    },
    '&$rowLandingPad': {
      '&::before': {
        backgroundColor: '#dddddd',
        border         : '2px dotted #b5b5b5'
      }
    },
    '&$rowLandingPad, &$rowCancelPad': {
      '& *': {
        opacity: '.6 !important'
      },
      '&::before': {
        bottom  : 0,
        content : '""',
        left    : 0,
        position: 'absolute',
        right   : 0,
        top     : 0,
        zIndex  : -1
      },
      backgroundColor: 'transparent',
      border         : 'none',
      boxShadow      : 'none',
      outline        : 'none'
    },
    backgroundColor: 'white',
    border         : `1px solid ${palette.grey[400]}`,
    borderRadius   : shape.borderRadius * 2,
    display        : 'flex',
    margin         : spacing(0.5),
    padding        : spacing(1),
    position       : 'relative',
    width          : '100%'
  },
  rowCancelPad   : {},
  rowContent     : {},
  rowContentChips: {
    '& > div': {
      marginTop: spacing(.5)
    }
  },
  rowContentTitle: {},
  rowIcon        : {
    color: '#D9D9D9'
  },
  rowLabel     : {},
  rowLandingPad: {},
  rowPanelLeft : { flex: 1 },
  rowPanelRight: {
    marginLeft: spacing(0.5)
  },
  rowSearchFocus: {
    outline: 'solid 1px #fc6421'
  },
  rowSearchMatch: {
    outline: 'solid 1px #0080ff'
  },
  rowToolbar: {},
  rowWrapper: {
    '&:active': {
      opacity: 1
    },
    boxSizing: 'border-box',
    display  : 'flex',
    height   : '100%',
    width    : '100%'
  },
  rowWrapperDragDisabled: {
    cursor: 'default'
  }
}), { name: 'FiltersTreeNodeContent' })
