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
                  title: 'Empresa'
                }
              ],
              optionLabel: 'Contiene exactamente',
              title      : 'Cargo',
              value      : [ 'Gerente', 'Jefe' ]
            },
            {
              children: [
                {
                  children: [
                    {
                      title: 'styles.css'
                    }
                  ],
                  expanded: true,
                  title   : 'styles.css'
                }
              ],
              expanded: true,
              title   : 'src'
            },
            {
              children: [
                {
                  title: '12214124-log'
                },
                {
                  title: 'drag-disabled-file'
                }
              ] ,
              expanded: true,
              title   : 'package.json'
            }
          ]
        } />
    </div>
  )
}
