import './globals.scss';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import { companyInfo } from '../data/companyData';

export const metadata = {
  metadataBase: new URL(companyInfo.website),
  title: {
    default: 'Dudez | Software Development & IT Services',
    template: '%s | Dudez',
  },
  description:
    'Dudez is a Chennai-based software development and IT services company building websites, web applications, e-commerce platforms and custom business software.',
  keywords: [
    'Software Development Company Chennai',
    'IT Services Chennai',
    'Custom Web Application Development',
    'E-Commerce Development India',
    'Business Management Systems',
    'Dudez',
  ],
  authors: [{ name: 'Dudez', url: companyInfo.website }],
  creator: 'Dudez',
  publisher: 'Dudez',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Dudez | Software Development & IT Services',
    description:
      'Dudez is a Chennai-based software development and IT services company building websites, web applications, e-commerce platforms and custom business software.',
    url: companyInfo.website,
    siteName: 'Dudez',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dudez | Software Development & IT Services',
    description:
      'Dudez is a Chennai-based software development and IT services company building websites, web applications, e-commerce platforms and custom business software.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export const viewport = {
  themeColor: '#0f172a',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
