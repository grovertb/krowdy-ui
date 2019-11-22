export interface Page {
  title: string;
  path?: string;
  routes?: Array<Page>;
}

const pages: Array<Page> = [
  // {
  //   title: 'Getting Started',
  //   routes: [
  //     {
  //       title: 'Installation'
  //     },
  //     {
  //       title: 'Usage'
  //     },
  //     {
  //       title: 'Example Projects'
  //     }
  //   ]
  // },
  {
    title: 'Components',
    routes: [
      // {
      //   title: 'Layout',
      //   routes: [
      //     {
      //       title: 'Box'
      //     },
      //     {
      //       title: 'Container'
      //     },
      //     {
      //       title: 'Grid'
      //     },
      //     {
      //       title: 'Grid List'
      //     },
      //     {
      //       title: 'Hidden'
      //     }
      //   ]
      // },
      {
        title: 'Inputs',
        routes: [
          {
            title: 'Buttons',
            path: '/components/buttons'
          },
          // {
          //   title: 'Checkboxes',
          //   path: '/components/checkboxes'
          // },
          // {
          //   title: 'Date / Time',
          //   path: '/components/pickers'
          // },
          // {
          //   title: 'Radio Buttons',
          //   path: '/components/radio-buttons'
          // },
          // {
          //   title: 'Selects'
          // },
          // {
          //   title: 'Slider'
          // },
          // {
          //   title: 'Switches'
          // },
          // {
          //   title: 'Text Fields'
          // }
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
  {
    title: 'Component API',
    routes: [
      {
        title: 'Button',
        path: '/api/button'
      }
    ]
  }
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

export const apiRoutes = [
  '/api/button'
]

export default pages