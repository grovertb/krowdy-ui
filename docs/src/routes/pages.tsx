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
      },
      {
        title: 'Utils',
        routes: [
          {
            title: 'Notify',
            path: '/components/notify'
          },
          {
            title: 'Dot',
            path: '/components/dots'
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
      // A
      {
        title: 'Audio Recorder',
        path: '/views/audioRecorder'
      },
      {
        title: 'Avatar user',
        path: '/views/avataruser'
      },
      // B
      {
        title: 'Bubble chart',
        path: '/views/bubblechart'
      },
      // C
      {
        title: 'Card Expand',
        path: '/views/cardexpand'
      },
      {
        title: 'Card Candidate',
        path: '/views/cardcandidate'
      },
      {
        title: 'Card Candidate Ranking',
        path: '/views/cardcandidateranking'
      },
      {
        title: 'Card Config',
        path: '/views/cardconfig'
      },
      {
        title: 'Counter',
        path: '/views/counter'
      },
      // D
      {
        title: 'Dashboard',
        path: '/views/dashboard'
      },
      {
        title: 'Drag',
        path: '/views/dragcomponent'
      },
      // F
      {
        title: 'Filters',
        path: '/views/filters'
      },
      // G
      {
        title: 'GraphicBar',
        path: '/views/graphicbar'
      },
      // H
      {
        title: 'Histogram',
        path: '/views/histogram'
      },
      // J
      {
        title: 'Job Detail',
        path: '/views/jobdetail'
      },
      // l
      {
        title: 'List Info',
        path: '/views/listinfo'
      },
      // M
      {
        title: 'Modal',
        path: '/views/modalkrowder'
      },
      {
        title: 'Main',
        path: '/views/main'
      },
      {
        title: 'MultiCheckBox',
        path: '/views/multicheckbox'
      },
      // P
      {
        title: 'Pagination',
        path: '/views/pagination'
      },
      {
        title: 'Profile',
        path: '/views/profile'
      },
      // R
      {
        title: 'RadioLabelGroup',
        path: '/views/radioLabelGroup'
      },
      {
        title: 'RankingGroup',
        path: '/views/rankinggroup'
      },
      {
        title: 'Referent',
        path: '/views/referent'
      },
      {
        title: 'ReferentInput',
        path: '/views/referentinput'
      },
      {
        title: 'Root',
        path: '/views/root'
      },
      // S
      {
        title: 'SampleBar',
        path: '/views/samplebar'
      },
      {
        title: 'Search',
        path: '/views/search'
      },
      {
        title: 'SuperFilters',
        path: '/views/superfilters'
      },
      {
        title: 'SwitchButton',
        path: '/views/switchbutton'
      },
      // T
      {
        title: 'Task Config',
        path: '/views/taskconfig'
      },
      {
        title: 'Table',
        path: '/views/table'
      },
      {
        title: 'Table Window',
        path: '/views/tablewindow'
      },
      {
        title: 'Table Infinity',
        path: '/views/tableInfinity'
      },
      {
        title: 'Top AppBar',
        path: '/views/topappbar'
      },
      {
        title: 'Table Group',
        path: '/views/tablegroup'
      },
      // U
      {
        title: 'User Point',
        path: '/views/userpoint'
      }
      // V
    ]
  },
]

export const apiRoutes = [
  '/api/button'
]

export default pages
