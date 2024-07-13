import { mdiHome, mdiTools, mdiCheck, mdiClose, mdiPost } from '@mdi/js'

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
    title: 'Blogs',
    value: 6,
    props: {
      prependIcon: mdiPost,
      to: '/blogs',
    }
  },
  { 
    title: 'Actions',
    value: 2,
    props: {
      prependIcon: mdiTools,
    },
    children: [
      { 
        title: 'Products', 
        value: 3,
        props: {
          prependIcon: mdiCheck,
          to: '/products',
        }
      },
      {
        title: 'More',
        value: 4,
        props: {
          prependIcon: mdiClose,
        },
        children: [
          { 
            title: 'About', 
            value: 5,
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