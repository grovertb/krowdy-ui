export interface Page {
  title: string;
  path?: string;
  routes?: Array<Page>;
}

const pages: Array<Page> = [
  {
    title: 'Getting Started',
    routes: [
      {
        title: 'Installation',
        path: '/getting-started/installation'
      },
      {
        title: 'Usage',
        path: '/getting-started/usage'
      },
      // {
      //   title: 'Example Projects'
      // }
    ]
  },
  {
    title: 'Components',
    routes: [
      {
        title: 'Layout',
        routes: [
          {
            title: 'Box',
            path: '/components/box'
          },
          {
            title: 'Container',
            path: '/components/container'
          },
          {
            title: 'Grid',
            path: '/components/grid'
          },
          // {
          //   title: 'Grid List',
          //   path: '/components/gridlist'
          // },
          {
            title: 'Hidden',
            path: '/components/hidden'
          }
        ]
      },
      {
        title: 'Inputs',
        routes: [
          {
            title: 'Buttons',
            path: '/components/buttons'
          },
          {
            title: 'Checkboxes',
            path: '/components/checkboxes'
          },
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
      {
        title: 'Data Display',
        routes: [
          {
            title: 'Typography',
            path: '/components/typography'
          }
        ]
      },
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
      },
      {
        title: 'Checkbox',
        path: '/api/checkbox'
      }
    ]
  },
  {
    title: 'Views',
    routes: [
      {
        title: 'Job Detail',
        path: '/views/jobdetail'
      },
      {
        title: 'Card User',
        path: '/views/carduser'
      },
      {
        title: 'Dashboard',
        path: '/views/dashboard'
      },
      {
        title: 'Questionary',
        path: '/views/questionary'
      },
      {
        title: 'Tasks',
        path: '/views/cardtask'
      },
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

export const apiRoutes = [
  '/api/button'
]

export default pages