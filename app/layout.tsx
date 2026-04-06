import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: '年金Lab',
  description: '年金・老後資金情報',
  openGraph: { title: '年金Lab', description: '年金・老後資金情報', type: 'website', locale: 'ja_JP', siteName: '年金Lab' },
  twitter: { card: 'summary_large_image', title: '年金Lab', description: '年金・老後資金情報' },
  robots: { index: true, follow: true },
}
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <head>
        <meta name="google-site-verification" content="xpdiFRYHloMJxfhCT-IMD08p5na4v9WUqvPY9OrDsHs" />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-SVQXY5C3PW"></script>
        <script dangerouslySetInnerHTML={{__html:`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-SVQXY5C3PW');`}} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{__html:`{"@context": "https://schema.org", "@type": "WebSite", "name": "年金Lab", "description": "年金・老後資金情報", "url": "https://pension-lab-jp.vercel.app", "publisher": {"@type": "Organization", "name": "AOKAE合同会社"}}`}} />
      </head>
      <body>{children}</body>
    </html>
  )
}