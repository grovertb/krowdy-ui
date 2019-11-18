interface Page {
  label: string; 
  routes?: Array<Page>;
}

const pages: Array<Page> = [
  {
    label: 'Getting Started',
    routes: [
      {
        label: 'Installation'
      },
      {
        label: 'Usage'
      },
      {
        label: 'Example Projects'
      }
    ]
  },
  {
    label: 'Components',
    routes: [
      {
        label: 'Layout',
        routes: [
          {
            label: 'Box'
          },
          {
            label: 'Container'
          },
          {
            label: 'Grid'
          },
          {
            label: 'Grid List'
          },
          {
            label: 'Hidden'
          }
        ]
      },
      {
        label: 'Inputs',
        routes: [
          {
            label: 'Buttons'
          },
          {
            label: 'Checkboxes'
          },
          {
            label: 'Date / Time'
          },
          {
            label: 'Radio Buttons'
          },
          {
            label: 'Selects'
          },
          {
            label: 'Slider'
          },
          {
            label: 'Switches'
          },
          {
            label: 'Text Fields'
          }
        ]
      },
      // {
      //   label: 'Navigation'
      // },
      // {
      //   label: 'Surfaces'
      // },
      // {
      //   label: 'Feedback'
      // },
      // {
      //   label: 'Data Display'
      // },
      // {
      //   label: 'Utils'
      // },
      // {
      //   label: 'Lab'
      // }
    ]
  },
  // {
  //   label: 'Styles'
  // },
  // {
  //   label: 'System'
  // },
  // {
  //   label: 'Customization'
  // }
]

export default pages