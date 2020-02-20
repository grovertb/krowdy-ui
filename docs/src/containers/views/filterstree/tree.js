import React from 'react'
// import { makeStyles } from '@krowdy-ui/styles'
import { FiltersTree } from '@krowdy-ui/views'

// const useStyles = makeStyles({
//   root: {
//   }
// }, { name: 'DemoFiltersTree' })

export default function () {
  // const classes = useStyles()

  return (
    <div>
      <FiltersTree
        treeData={
          [
            {
              children: [
                {
                  label: 'react-sortable-tree.js'
                }
              ],
              label: 'build'
            },
            {
              children: [
                {
                  children: [
                    {
                      label: 'styles.css'
                    }
                  ],
                  expanded: true,
                  label   : 'styles.css'
                }
              ],
              expanded: true,
              label   : 'src'
            },
            {
              children: [
                {
                  label: '12214124-log'
                },
                {
                  label: 'drag-disabled-file'
                }
              ] ,
              expanded: true,
              label   : 'package.json'
            }
          ]
        } />
    </div>
  )
}
