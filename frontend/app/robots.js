import { companyInfo } from '../data/companyData';

export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${companyInfo.website}/sitemap.xml`,
  };
}
