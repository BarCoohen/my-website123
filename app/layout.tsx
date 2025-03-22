// app/layout.tsx
import { Rubik, Varela_Round, } from "next/font/google";
import "./globals.css";
import Navbar from './components/Navbar';
import type { Metadata, Viewport } from 'next';
import Footer from "./components/Footer";
import Script from 'next/script';

// הגדרות הפונטים
const rubik = Rubik({
  subsets: ["latin", "hebrew"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-rubik",
});

const varelaRound = Varela_Round({
  weight: ["400"],
  subsets: ["latin", "hebrew"],
  variable: "--font-varela-round",
});

// הוסף את יתר הגדרות הפונטים כאן...

// הוספת metadata - חובה בגרסאות חדשות של Next.js
export const metadata: Metadata = {
  title: {
    template: '%s | SitePromotion',
    default: 'בניית אתרים  | SitePromotion',
  },
  description: 'בניית אתרים , קידום אורגני ועיצוב גרפי לעסקים וארגונים. פתרונות מקצועיים בהתאמה מלאה.',
  keywords: 'בניית אתרים, בניית אתר, בניית אתר לעסקים, קידום אורגני, עיצוב גרפי, SEO, אתרי תדמית, חנות אינטרנטית, דף נחיתה',
  authors: [{ name: 'SitePromotion' }],
  creator: 'SitePromotion',
  publisher: 'SitePromotion',

  metadataBase: new URL('https://sitepromotion.co.il'),

  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  twitter: {
    card: 'summary_large_image',
    images: 'https://sitepromotion.co.il/images/SP-LOGO.webp',
  },
  openGraph: {
    type: 'website',
    locale: 'he_IL',
    url: 'https://sitepromotion.co.il',
    siteName: 'SitePromotion',
    title: 'בניית אתרים  | SitePromotion',
    description: 'בניית אתרים , קידום אורגני ועיצוב גרפי לעסקים.',
    images: [{
      url: '/images/SP-LOGO.webp',
      width: 385,
      height: 96,
      alt: 'לוגו SitePromotion',
    }],
  },
  icons: {
    icon: [
      { url: '/icon.png', sizes: '512x512' },
    ],
    apple: [
      { url: '/apple-icon.png', sizes: '180x180' },
    ],
    shortcut: '/icon.png',
    
  },
  other: {
    'format-detection': 'telephone=no',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  minimumScale: 1,
  userScalable: true,
  themeColor: '#0066CC', // החלף בצבע המותג העיקרי שלך
  viewportFit: 'cover',
};

// תיקון החתימה של הפונקציה - להשתמש בטיפוס סטנדרטי
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="he" dir="rtl">
      <body className={`${rubik.variable} ${varelaRound.variable}`}>
        <header>
          <Navbar />
        </header>

        <main id="main-content">{children}</main>
        
        <Footer />
        <Script id="organization-schema" type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "@id": "https://SitePromotion.co.il/#organization",
            "name": "SitePromotion",
            "url": "https://SitePromotion.co.il",
            "logo": "https://SitePromotion.co.il/images/SP-LOGO.webp",
            "subOrganization": {
              "@type": "LocalBusiness",
              "@id": "https://SitePromotion.co.il/#business",
              "name": "SitePromotion",
              "url": "https://SitePromotion.co.il",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "IL",
                "addressRegion": "דרום",
                "addressLocality": "נחלה", 
                "postalCode": "7954000",     
                "streetAddress": "נחלה 47",
              },
              "areaServed": "ישראל",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "058-5209911", 
                "email": "barcohenn123@gmail.com",
                "contactType": "customer service",
                "availableLanguage": ["Hebrew"],
                "hoursAvailable": "Su-Th 09:00-22:00"
              },
            },
          })}
        </Script>
      </body>
    </html>
  );
}
