import { MetadataRoute } from 'next'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.amininfotech.com' // Using the likely domain based on the project

  // Pages to include in sitemap
  const routes = [
    '',
    '/about',
    '/products',
    '/products/shoper-9',
    '/products/tally-auditors-edition',
    '/products/tally-developer-9',
    '/products/tally-erp-tns',
    '/products/tally-server-9',
    '/products/tally-software-services',
    '/services',
    '/services/corporate',
    '/services/customization',
    '/services/implementation',
    '/services/net-services',
    '/services/onsite-remote-support',
    '/services/tally-synchronization',
    '/contact',
    '/career',
    '/price-list',
  ]

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }))
}
