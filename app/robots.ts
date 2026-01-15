import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  // Update base URL when domain is connected
  const baseUrl = 'https://yourdomain.com' // TODO: Update with your actual domain

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/admin/'],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
