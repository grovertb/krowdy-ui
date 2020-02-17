import React from 'react'
import { Grid } from '@krowdy-ui/core'
import { TableGroup } from '@krowdy-ui/views'
// import { makeStyles } from '@krowdy-ui/styles'

// const useStyles = makeStyles(() => ({
//   root: {
//     color     : '#595959',
//     fontSize  : 12,
//     fontWeight: 'normal',
//     maxWidth  : 249,
//     minWidth  : 247
//   }
// }))

export default function () {
  return (
    <Grid>
      <TableGroup grouping sorting />
    </Grid>
  )
}

// sorting? Bolean
// grouping? Bolean
