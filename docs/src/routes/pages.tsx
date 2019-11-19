export interface Page {
  title: string; 
  routes?: Array<Page>;
}

const pages: Array<Page> = [
  {
    title: 'Getting Started',
    routes: [
      {
        title: 'Installation'
      },
      {
        title: 'Usage'
      },
      {
        title: 'Example Projects'
      }
    ]
  },
  {
    title: 'Components',
    routes: [
      {
        title: 'Layout',
        routes: [
          {
            title: 'Box'
          },
          {
            title: 'Container'
          },
          {
            title: 'Grid'
          },
          {
            title: 'Grid List'
          },
          {
            title: 'Hidden'
          }
        ]
      },
      {
        title: 'Inputs',
        routes: [
          {
            title: 'Buttons'
          },
          {
            title: 'Checkboxes'
          },
          {
            title: 'Date / Time'
          },
          {
            title: 'Radio Buttons'
          },
          {
            title: 'Selects'
          },
          {
            title: 'Slider'
          },
          {
            title: 'Switches'
          },
          {
            title: 'Text Fields'
          }
        ]
      },
      // {
      //   title: 'Navigation'
      // },
      // {
      //   title: 'Surfaces'
      // },
      // {
      //   title: 'Feedback'
      // },
      // {
      //   title: 'Data Display'
      // },
      // {
      //   title: 'Utils'
      // },
      // {
      //   title: 'Lab'
      // }
    ]
  },
  // {
  //   title: 'Styles'
  // },
  // {
  //   title: 'System'
  // },
  // {
  //   title: 'Customization'
  // }
]

export default pages