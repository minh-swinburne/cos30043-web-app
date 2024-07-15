import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { aliases, mdi } from 'vuetify/iconsets/mdi-svg'
import colors from 'vuetify/util/colors'
import { useMediaQuery } from '@vueuse/core'

const isPreferredDark = useMediaQuery('(prefers-color-scheme: dark)')

const vuetify = createVuetify({
  components,
  directives,
  display: {
    mobileBreakpoint: 'sm',
  },
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi,
    },
  },
  theme: {
    defaultTheme: isPreferredDark.value ? 'dark' : 'light',
    themes: {
      light: {
        dark: false,
        colors: {
          // primary: colors.deepPurple.base,
          // secondary: colors.deepOrange.darken3,
          // accent: colors.blue.accent3,
          error: colors.red.base,
          // warning: colors.amber.base,
          // info: colors.blue.base,
          // success: colors.green.base,
        },
      },
      dark: {
        dark: true,
        colors: {
          // primary: colors.deepPurple.lighten3,
          // secondary: colors.deepOrange.darken3,
          // accent: colors.blue.accent3,
          error: colors.red.base,
          // warning: colors.amber.base,
          // info: colors.blue.base,
          // success: colors.green.base,
        },
      },
      highContrast: {
        dark: true,
        colors: {
          primary: '#ffeb3b',
          secondary: '#ff5722',
          accent: '#ff9800',
          error: '#f44336',
          warning: '#ffeb3b',
          info: '#2196f3',
          success: '#4caf50',
        },
      },
    },
  },
})

export default vuetify