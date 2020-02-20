import { makeStyles } from '@krowdy-ui/styles'

export default makeStyles({
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
  expandButton  : {
    // '&::after': {
    //   transform: 'translate3d(-50%, -20%, 0) rotateZ(-90deg)'
    // }
  },
  highlightBottomLeftCorner: {
    // '&::after': {
    //   borderBottom: '7px solid transparent',
    //   borderLeft  : '7px solid #36c2f6',
    //   borderTop   : '7px solid transparent',
    //   content     : '""',
    //   height      : 0,
    //   marginTop   : -7,
    //   position    : 'absolute',
    //   right       : 0,
    //   top         : '100%'
    // },
    // '&::before': {
    //   borderBottom: 'solid 6px #36c2f6',
    //   borderLeft  : 'solid 6px #36c2f6',
    //   boxSizing   : 'border-box',
    //   content     : '""',
    //   height      : 'calc(100% + 3px)',
    //   position    : 'absolute',
    //   right       : 7,
    //   top         : 0,
    //   width       : 'calc(50% - 4px)'
    // },
    zIndex: 3
  },
  highlightLineVertical: {
    // '&::after': {
    //   animation  : '$arrow-pulse 1s infinite linear both',
    //   borderLeft : '3px solid transparent',
    //   borderRight: '3px solid transparent',
    //   borderTop  : '3px solid white',
    //   content    : '""',
    //   height     : 0,
    //   left       : '50%',
    //   marginLeft : -3,
    //   position   : 'absolute',
    //   top        : 0
    // },
    // '&::before': {
    //   backgroundColor: '#36c2f6',
    //   content        : '""',
    //   height         : '100%',
    //   left           : '50%',
    //   marginLeft     : -3,
    //   position       : 'absolute',
    //   top            : 0,
    //   width          : 6
    // },
    zIndex: 3
  },
  highlightTopLeftCorner: {
    // '&::before': {
    //   borderLeft: 'solid 6px #36c2f6',
    //   borderTop : 'solid 6px #36c2f6',
    //   boxSizing : 'border-box',
    //   content   : '""',
    //   height    : 'calc(50% + 3px)',
    //   marginTop : -3,
    //   position  : 'absolute',
    //   right     : 0,
    //   top       : '50%',
    //   width     : 'calc(50% + 3px)',
    //   zIndex    : 3
    // }
  },
  lineBlock: {
    display : 'inline-block',
    flex    : '0 0 auto',
    height  : '100%',
    position: 'relative'
  },
  lineChildren: {
    display: 'inline-block',
    height : '100%'
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
    '& $rowContents': {
      alignItems     : 'center',
      backgroundColor: 'white',
      // border         : '1px solid #D9D9D9',
      borderRadius   : '3px',
      color          : '#595959',
      display        : 'flex',
      // flex           : '1 0 auto',
      height         : '100%',
      justifyContent : 'space-between',
      // padding        : 10,
      position       : 'relative'
    },
    '& $rowLabel': {
      flex   : 1,
      padding: '0px 6px'
      // flex        : '0 1 auto',
      // paddingRight: 20
    }
  },
  row: {
    // '& > *': {
    //   boxSizing: 'border-box'
    // },
    '& $rowIcon, & $rowLabel,& $rowToolbar': {
      alignItems: 'center',
      display   : 'flex'
    },
    '&$rowCancelPad': {
      '&::before': {
        backgroundColor: '#ffd2d6', // '#e6a8ad'
        border         : '2px dotted #e6a8ad'
      }
    },
    '&$rowLandingPad': {
      '&::before': {
        backgroundColor: '#dddddd', // color de fondo cuando es posible draggear
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
    // alignItems: 'center',
    // display   : 'flex',
    flex    : 1,
    height  : '100%',
    // transition  : 'all 1s ease-in-out',
    position: 'relative'
    // whiteSpace: 'nowrap'
  },
  rowCancelPad: {},
  rowContents : {},
  rowIcon     : {
    color: '#D9D9D9'
  },
  rowLabel      : {},
  rowLandingPad : {},
  rowSearchFocus: {
    // boxShadow: 'inset 0 -7px 7px -3px #fc6421',
    outline: 'solid 1px #fc6421'
  },
  rowSearchMatch: {
    outline: 'solid 1px #0080ff'
    // boxShadow: 'inset 0 -7px 7px -3px #0080ff'
  },
  rowToolbar: {
    // display: 'flex',
    // flex   : '0 1 auto'
  },
  rowWrapper: {
    '&:active': {
      opacity: 1
    },
    '&:hover': {
      opacity: 0.7
    },
    boxSizing: 'border-box',
    cursor   : 'grab',
    display  : 'flex',
    height   : '100%'
    // margin   : '2px 2px 2px 0'
  },
  rowWrapperDragDisabled: {
    cursor: 'default'
  }
}, { name: 'FiltersTreeNodeContent' })
