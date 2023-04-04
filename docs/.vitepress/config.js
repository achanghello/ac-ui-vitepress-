import nav from './configs/nav'
import { defineConfig } from 'vitepress'
import sidebar from "./configs/sidebar.js"
import { demoBlockPlugin } from 'vitepress-theme-demoblock'
export default defineConfig({
  // 网站标题
  title: "AC-UI组件库",
  description: "123",
  markdown: {
    headers: {
      level: [0, 0]
    },

    anchor: { permalink: false },

    toc: { includeLevel: [1, 2] },

    theme: { light: 'github-light', dark: 'github-dark' },

    config: (md) => {
      md.use(demoBlockPlugin, {
        cssPreprocessor: 'less'
      })
    }
  },
  themeConfig: {
    // 顶部右上角导航
    nav,
    // 左侧导航
    sidebar: sidebar,
    logo: "/logo.png",
    siteTitle: "AC-UI",
    socialLinks: [
      { icon: "github", link: "https://github.com/achanghello/ac-ui" },
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2023-present 常文彬'
    }
  },
  // rollupInputOptions: {
  //   plugins: [
  //     require('@rollup/plugin-babel').babel({
  //       babelHelpers: 'bundled',
  //       exclude: 'node_modules/**',
  //     }),
  //   ],
  // },
});
