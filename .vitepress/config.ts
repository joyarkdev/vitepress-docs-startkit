import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'en-US',
  title: 'App Documentation Center',
  description: 'Public documents required for app store listing',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'About Us', link: '/about' },
      { text: 'Privacy Policy', link: '/privacy-policy' },
      { text: 'Terms of Service', link: '/terms-of-service' }
    ],
    sidebar: [
      {
        text: 'Public Documents',
        items: [
          { text: 'About Us', link: '/about' },
          { text: 'Privacy Policy', link: '/privacy-policy' },
          { text: 'Terms of Service', link: '/terms-of-service' }
        ]
      }
    ]
  }
})
