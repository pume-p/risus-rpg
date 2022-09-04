import { defineUserConfig } from 'vuepress-vite'
import { hopeTheme } from 'vuepress-theme-hope';

export default defineUserConfig({
  base: '/risus-rpg/',
  locales: {
    "/": {
      lang: 'en-US',
      title: 'Risus RPG',
      description: 'Just playing around',
    },
    "/th/": {
      lang: "th-TH",
      description: 'Just playing around',
    },
  },

  theme: hopeTheme({
  darkmode: 'toggle',

    locales: {
      "/": {
        logo: "/logo.png",
      },
      "/th/": {
        logo: "/logo.png",
        navbarLocales: {
          selectLangAriaLabel: 'ไทย',
          langName: 'ไทย'
        }
      },
    },
  }),
})