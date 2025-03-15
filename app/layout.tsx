// app/layout.tsx
import { Rubik, Varela_Round, } from "next/font/google";
import "./globals.css";
import Navbar from './components/Navbar';
import type { Metadata, Viewport } from 'next';

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
  title: 'האתר שלי',
  description: 'תיאור האתר',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
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
           <Navbar/>
        </header>
        
        <main>{children}</main>

        <footer>
          {/* תוכן הפוטר */}
        </footer>
      </body>
    </html>
  );
}
