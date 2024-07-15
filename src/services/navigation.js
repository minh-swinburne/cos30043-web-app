import { 
  mdiHome, mdiTools, mdiCheck, mdiClose, 
  mdiPost, mdiAlert, mdiPaw, mdiConnection
} from '@mdi/js'

const navItems = [
  {
    title: 'Home', 
    value: 1,
    props: {
      prependIcon: mdiHome,
      to: '/home',
    }
  },
  {
    title: 'Posts',
    value: 2,
    props: {
      prependIcon: mdiPost,
      to: '/posts',
    }
  },
  {
    title: 'Pets',
    value: 3,
    props: {
      prependIcon: mdiPaw,
      to: '/pets',
    }
  },
  {
    title: '404',
    value: 4,
    props: {
      prependIcon: mdiAlert,
      to: '/404',
    }
  },
  {
    title: 'Offline',
    value: 5,
    props: {
      prependIcon: mdiConnection,
      to: '/offline',
    }
  },
  { 
    title: 'Actions',
    value: 6,
    props: {
      prependIcon: mdiTools,
    },
    children: [
      { 
        title: 'Products', 
        value: 7,
        props: {
          prependIcon: mdiCheck,
          to: '/products',
        }
      },
      {
        title: 'More',
        value: 8,
        props: {
          prependIcon: mdiClose,
        },
        children: [
          { 
            title: 'About', 
            value: 9,
            props: {
              prependIcon: mdiCheck,
              to: '/about',
            }
          },
          // { 
          //   title: 'Contact', 
          //   value: 4,
          //   props: {
          //     prependIcon: mdiCheck,
          //     to: '/contact',
          //   }
          // },
          // { 
          //   title: 'FAQ', 
          //   value: 5,
          //   props: {
          //     prependIcon: mdiCheck,
          //     to: '/faq',
          //   }
          // },
        ],
      }
    ],
  },
];

export default navItems;