import React, { useState } from 'react'
import { MultiCheckBox } from '@krowdy-ui/views'

export default function () {
  const [ options, setOptions ] = useState([ {
    checked   : true,
    key       : 'Reclutadores',
    label     : 'Reclutadores',
    subOptions: [ {
      checked: true,
      key    : '1',
      label  : 'Panchito'
    }, {
      checked: true,
      key    : '2',
      label  : 'Jaimito'
    }, {
      checked: true,
      key    : '3',
      label  : 'Anafleto'
    }  ]
  }, {
    checked   : true,
    key       : 'Responsables',
    label     : 'Responsables',
    subOptions: [ {
      checked: true,
      key    : '4',
      label  : 'Panchito'
    }, {
      checked: true,
      key    : '5',
      label  : 'Jaimito'
    }, {
      checked: true,
      key    : '6',
      label  : 'Anafleto'
    }  ]
  } ])

  const _handleChange = (newOptions) => {
    setOptions(newOptions)
  }

  return (
    <div>
      <MultiCheckBox label='Revisores' onChange={_handleChange} options={options} />
    </div>
  )
}
