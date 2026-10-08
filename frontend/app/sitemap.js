import { companyInfo } from '../data/companyData';

export default function sitemap() {
  return [
    {
      url: companyInfo.website,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
  ];
}
