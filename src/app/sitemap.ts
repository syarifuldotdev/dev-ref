import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: 'https://dev-ref.vercel.app/',
            lastModified: new Date(),
        },
    ]
}