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
        ]
      },
      {
        title: 'Data Display',
        routes: [
          {
            title: 'Typography',
            path: '/components/typography'
          },
          {
            title: 'Table',
            path: '/components/tables'
          }
        ]
      },
      {
        title: 'Navigation',
        routes: [
          {
            title: 'Tabs',
            path: '/components/tabs'
          }
        ]
      },
      {
        title: 'Surfaces',
        routes: [
          {
            title: 'Card',
            path: '/components/cards'
          },
        ]
      }
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
        title: 'A',
        routes: [
          {
            title: 'Audio Recorder',
            path: '/views/audioRecorder'
          },
          {
            title: 'Avatar user',
            path: '/views/avataruser'
          },
        ]
      },
      {
        title: 'C',
        routes: [
          {
            title: 'Card Expand',
            path: '/views/cardexpand'
          },
          {
            title: 'Card Candidate',
            path: '/views/cardcandidate'
          },
          {
            title: 'Counter',
            path: '/views/counter'
          },
        ]
      },
      {
        title: 'D',
        routes: [
          {
            title: 'Dashboard',
            path: '/views/dashboard'
          },
          {
            title: 'Drag',
            path: '/views/dragcomponent'
          },
        ]
      },
      {
        title: 'J',
        routes: [
          {
            title: 'Job Detail',
            path: '/views/jobdetail'
          },
        ]
      },
      {
        title: 'M',
        routes: [
          {
            title: 'Modal',
            path: '/views/modalkrowder'
          }
        ]
      },
      {
        title: 'P',
        routes: [
          {
            title: 'Pagination',
            path: '/views/pagination'
          }
        ]
      },
      {
        title: 'S',
        routes: [
          {
            title: 'Search',
            path: '/views/search'
          },

          {
            title: 'SwitchButton',
            path: '/views/switchbutton'
          },
        ]
      },
      {
        title: 'T',
        routes: [
          {
            title: 'Table',
            path: '/views/table'
          },
          {
            title: 'Table Window',
            path: '/views/tablewindow'
          },
          {
            title: 'Top AppBar',
            path: '/views/topappbar'
          }
        ]
      },
    ]
  },
]

export const apiRoutes = [
  '/api/button'
]

export default pages
