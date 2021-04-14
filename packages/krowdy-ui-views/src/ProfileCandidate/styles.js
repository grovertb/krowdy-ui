import { makeStyles } from '@krowdy-ui/styles'

export const useStyles = makeStyles(({ spacing, palette, shape }) => ({
  block: {
    display: 'block'
  },
  chip: {
    backgroundColor: palette.primary[50],
    border         : `solid 1px ${palette.primary[400]}`
  },
  companyContent: {
    alignItems: 'center',
    display   : 'flex'
  },
  companyImageContent: {
    border      : `1px solid ${palette.grey[400]}`,
    borderRadius: shape.borderRadius,
    height      : 32,
    marginRight : spacing(1.5),
    padding     : spacing(.5),
    width       : 32
  },
  marginBottom: {
    marginBottom: spacing(1)
  },
  root: {
    '& > *': {
      marginBottom: spacing(.5)
    },
    borderTop : `1px solid ${palette.grey[400]}`,
    marginTop : spacing(1.5),
    paddingTop: spacing(1.5)
  }
}), { name: 'ProfileCandidateCommon' })
