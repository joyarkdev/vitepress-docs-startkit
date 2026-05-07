import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-CN',
  title: 'App 文档中心',
  description: 'App 上架所需公开文档',
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '关于我们', link: '/about' },
      { text: '隐私政策', link: '/privacy-policy' },
      { text: '用户协议', link: '/terms-of-service' }
    ],
    sidebar: [
      {
        text: '公开文档',
        items: [
          { text: '关于我们', link: '/about' },
          { text: '隐私政策', link: '/privacy-policy' },
          { text: '用户协议', link: '/terms-of-service' }
        ]
      }
    ]
  }
})
