import { MetadataRoute } from 'next'

export const dynamic = 'force-static'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/under-construction',
    },
    sitemap: 'https://www.amininfotech.com/sitemap.xml',
  }
}
