export interface Page {
  title: string;
  path?: string;
  routes?: Array<Page>;
}

const pages: Array<Page> = [
  {
    routes: [
      {
        path : '/getting-started/installation',
        title: 'Installation'
      },
      {
        path : '/getting-started/usage',
        title: 'Usage'
      }
    ],
    title: 'Getting Started'
  },
  {
    routes: [
      {
        routes: [
          {
            path : '/components/box',
            title: 'Box'
          },
          {
            path : '/components/container',
            title: 'Container'
          },
          {
            path : '/components/grid',
            title: 'Grid'
          },
          {
            path : '/components/hidden',
            title: 'Hidden'
          }
        ],
        title: 'Layout'
      },
      {
        routes: [
          {
            path : '/components/buttons',
            title: 'Buttons'
          },
          {
            path : '/components/checkboxes',
            title: 'Checkboxes'
          }
        ],
        title: 'Inputs'
      },
      {
        routes: [
          {
            path : '/components/typography',
            title: 'Typography'
          },
          {
            path : '/components/tables',
            title: 'Table'
          }
        ],
        title: 'Data Display'
      },
      {
        routes: [
          {
            path : '/components/tabs',
            title: 'Tabs'
          }
        ],
        title: 'Navigation'
      },
      {
        routes: [
          {
            path : '/components/cards',
            title: 'Card'
          }
        ],
        title: 'Surfaces'
      },
      {
        routes: [
          {
            path : '/components/notify',
            title: 'Notify'
          },
          {
            path : '/components/dots',
            title: 'Dot'
          },
          {
            path : '/components/hideonscroll',
            title: 'HideOnScroll'
          }
        ],
        title: 'Utils'
      }
    ],
    title: 'Components'
  },
  {
    routes: [
      {
        path : '/api/button',
        title: 'Button'
      },
      {
        path : '/api/checkbox',
        title: 'Checkbox'
      }
    ],
    title: 'Component API'
  },
  {
    routes: [
      // A
      {
        path : '/views/audioRecorder',
        title: 'Audio Recorder'
      },
      {
        path : '/views/avataruser',
        title: 'Avatar user'
      },
      // B
      {
        path : '/views/backgroundAlert',
        title: 'Background Alert'
      },
      {
        path : '/views/bubblechart',
        title: 'Bubble chart'
      },
      // C
      {
        path : '/views/cardexpand',
        title: 'Card Expand'
      },
      {
        path : '/views/cardcandidate',
        title: 'Card Candidate'
      },
      {
        path : '/views/cardcandidateranking',
        title: 'Card Candidate Ranking'
      },
      {
        path : '/views/cardconfig',
        title: 'Card Config'
      },
      {
        path : '/views/counter',
        title: 'Counter'
      },
      // D
      {
        path : '/views/dashboard',
        title: 'Dashboard'
      },
      {
        path : '/views/dragcomponent',
        title: 'Drag'
      },
      // F
      {
        path : '/views/filters',
        title: 'Filters'
      },
      // G
      {
        path : '/views/graphicbar',
        title: 'GraphicBar'
      },
      // H
      {
        path : '/views/histogram',
        title: 'Histogram'
      },
      // J
      {
        path : '/views/jobdetail',
        title: 'Job Detail'
      },
      // l
      {
        path : '/views/listinfo',
        title: 'List Info'
      },
      {
        path : '/views/listinfoitem',
        title: 'List Info Item'
      },
      {
        path : '/views/loginform',
        title: 'Login Form'
      },
      // M
      {
        path : '/views/modalkrowder',
        title: 'Modal'
      },
      {
        path : '/views/main',
        title: 'Main'
      },
      {
        path : '/views/multicheckbox',
        title: 'MultiCheckBox'
      },
      // O
      {
        path : '/views/onetapauth',
        title: 'Onetap Auth'
      },
      // P
      {
        path : '/views/pagination',
        title: 'Pagination'
      },
      {
        path : '/views/profile',
        title: 'Profile'
      },
      {
        path : '/views/profilecandidate',
        title: 'Profile Candidate'
      },
      // R
      {
        path : '/views/radioLabelGroup',
        title: 'RadioLabelGroup'
      },
      {
        path : '/views/rangeschedule',
        title: 'RangeSchedule'
      },
      {
        path : '/views/rankinggroup',
        title: 'RankingGroup'
      },
      {
        path : '/views/referent',
        title: 'Referent'
      },
      {
        path : '/views/referentinput',
        title: 'ReferentInput'
      },
      {
        path : '/views/root',
        title: 'Root'
      },
      // S
      {
        path : '/views/samplebar',
        title: 'SampleBar'
      },
      {
        path : '/views/search',
        title: 'Search'
      },
      {
        path : '/views/selectinfo',
        title: 'SelectInfo'
      },
      {
        path : '/views/superfilters',
        title: 'SuperFilters'
      },
      {
        path : '/views/switchbutton',
        title: 'SwitchButton'
      },
      // T
      {
        path : '/views/taskconfig',
        title: 'Task Config'
      },
      {
        path : '/views/table',
        title: 'Table'
      },
      {
        path : '/views/tablewindow',
        title: 'Table Window'
      },
      {
        path : '/views/tableInfinity',
        title: 'Table Infinity'
      },
      {
        path : '/views/topappbar',
        title: 'Top AppBar'
      },
      {
        path : '/views/tablegroup',
        title: 'Table Group'
      },
      // U
      {
        path : '/views/userpoint',
        title: 'User Point'
      }
      // V
    ],
    title: 'Views'
  }
]

export const apiRoutes = [
  '/api/button'
]

export default pages
