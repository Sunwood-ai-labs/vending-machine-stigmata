import { defineConfig } from 'vitepress'

const repo = 'https://github.com/Sunwood-ai-labs/vending-machine-stigmata'

export default defineConfig({
  title: 'VENDING MACHINE STIGMATA',
  description: 'A polished asset kit for a gothic dark electro J-pop music release.',
  base: '/vending-machine-stigmata/',
  cleanUrls: true,
  head: [
    ['link', { rel: 'icon', href: '/vending-machine-stigmata/brand/vending-machine-stigmata-mark.svg' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: 'VENDING MACHINE STIGMATA' }],
    ['meta', { property: 'og:description', content: 'Album art, MV visuals, prompts, and publishing notes for the release.' }],
    ['meta', { property: 'og:image', content: 'https://sunwood-ai-labs.github.io/vending-machine-stigmata/assets/hero/vending-machine-stigmata_mv-loop_title_16x9_1920x1080.png' }]
  ],
  themeConfig: {
    logo: '/brand/vending-machine-stigmata-mark.svg',
    search: {
      provider: 'local'
    },
    socialLinks: [
      { icon: 'github', link: repo }
    ]
  },
  locales: {
    root: {
      label: 'English',
      lang: 'en-US',
      title: 'VENDING MACHINE STIGMATA',
      description: 'A polished asset kit for a gothic dark electro J-pop music release.',
      themeConfig: {
        nav: [
          { text: 'Guide', link: '/guide/asset-catalog' },
          { text: 'Workflow', link: '/guide/workflow' },
          { text: 'Rights', link: '/guide/rights' },
          { text: 'Japanese', link: '/ja/' }
        ],
        sidebar: {
          '/guide/': [
            {
              text: 'Project Guide',
              items: [
                { text: 'Asset catalog', link: '/guide/asset-catalog' },
                { text: 'Prompt archive', link: '/guide/prompts' },
                { text: 'Production workflow', link: '/guide/workflow' },
                { text: 'Rights and publishing', link: '/guide/rights' }
              ]
            }
          ]
        },
        docFooter: {
          prev: 'Previous page',
          next: 'Next page'
        },
        outline: {
          label: 'On this page'
        }
      }
    },
    ja: {
      label: '日本語',
      lang: 'ja-JP',
      title: 'VENDING MACHINE STIGMATA',
      description: 'ゴシック・ダークエレクトロ J-pop リリース用のアセットキットです。',
      themeConfig: {
        nav: [
          { text: 'ガイド', link: '/ja/guide/asset-catalog' },
          { text: '制作フロー', link: '/ja/guide/workflow' },
          { text: '権利', link: '/ja/guide/rights' },
          { text: 'English', link: '/' }
        ],
        sidebar: {
          '/ja/guide/': [
            {
              text: 'プロジェクトガイド',
              items: [
                { text: 'アセットカタログ', link: '/ja/guide/asset-catalog' },
                { text: 'プロンプト記録', link: '/ja/guide/prompts' },
                { text: '制作フロー', link: '/ja/guide/workflow' },
                { text: '権利と公開', link: '/ja/guide/rights' }
              ]
            }
          ]
        },
        docFooter: {
          prev: '前のページ',
          next: '次のページ'
        },
        outline: {
          label: 'このページ'
        }
      }
    }
  }
})
