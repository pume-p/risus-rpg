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
    navbar: ["/rules/README.md", "/bot/README.md"],
    sidebar: {
      "/rules/": "structure",
      "/bot/": "structure",
    },
    pageInfo: ["Author", "Original", "Date", "Category", "Tag"],
    locales: {
      "/": {
        logo: "/side-enlogo.png",
      },
      "/th/": {
        logo: "/logo.png",
        navbarLocales: {
          selectLangAriaLabel: 'ไทย',
          langName: 'ไทย'
        }
      },
    },
    plugins: {
      copyCode: false,
      git: false,
      prismjs: false,
    },
    backToTop: false,
    darkmode: 'toggle',
    iconAssets: 'fontawesome',
  })
})