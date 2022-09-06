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
    navbar: [/*"/rules/README.md",*/ "/bot.md"],
    sidebar: {
    },
    pageInfo: ["Author", "Original", "Date", "Category", "Tag"],
    locales: {
      "/": {
        logo: "/side-enlogo.png",
        footer: "Contact me <a href='https://www.reddit.com/user/pumegaming' target='_blank'>here</a><br><br>"
        + "P.S. Writing the rest of the site would be cool. But I just don't want to bother with it right now.",
      },
      "/th/": {
        logo: "/logo.png",
        footer: '',
        navbarLocales: {
          selectLangAriaLabel: 'ไทย',
          langName: 'ไทย'
        }
      },
    },
    plugins: {
      mdEnhance: {
        tabs: true,
        mark: true,
        imageSize: true,
      },
      copyCode: false,
      git: false,
      prismjs: false,
      photoSwipe: false
    },
    displayFooter: true,
    backToTop: false,
    darkmode: 'toggle',
    iconAssets: 'fontawesome',
  })
})