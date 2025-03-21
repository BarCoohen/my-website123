import styles from "../styles/Footer.module.css";
import ContactForm from "./client/ContactForm.client";
import Link from 'next/link';
import Script from 'next/script';

export default function Footer() {
  // מידע מובנה לשיפור SEO
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "בניית אתרים קידום באינטרנט ועיצוב גרפי",
    "url": "https://SitePromotion.co.il",
    "logo": "https://SitePromotion.co.il/images/SP-LOGO.webp",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "058-5209911",
      "contactType": "customer service",
      "areaServed": "IL",
      "availableLanguage": ["Hebrew", "English"]
    },
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "IL"
    },

  };

  return (
    <footer className={styles["site-footer"]} role="contentinfo" aria-label="פוטר האתר">
      {/* הוספת מידע מובנה למנועי חיפוש */}
      <Script id="organization-schema" type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </Script>

      <ContactForm />
      
      <div className={styles["footer-container"]}>
        {/* עמודה 1 - תפריט */}
        <nav 
          className={styles["footer-column"]} 
          aria-label="תפריט ניווט משני"
        >   
          <h3 className={styles.h3}>תפריט</h3>
          <ul>
            <li>
              <Link href="/" aria-label="מעבר לדף הבית">דף הבית</Link>
            </li>
            <li>
              <Link href="/web-development" aria-label="מידע על שירותי בניית אתרים שלנו">בניית אתרים</Link>
            </li>
            <li>
              <Link href="/web-types/custom" aria-label="מידע על בניית אתר מותאם אישית">אתר מותאם אישית</Link>
            </li>
            <li>
              <Link href="/web-types/landing-page" aria-label="מידע על בניית דפי נחיתה">דף נחיתה</Link>
            </li>
            <li>
              <Link href="/web-types/business-site" aria-label="מידע על בניית אתר תדמית">אתר תדמית</Link>
            </li>
            <li>
              <Link href="/web-types/ecommerce" aria-label="מידע על בניית חנות אינטרנטית">חנות אינטרנטית</Link>
            </li>
            <li>
              <Link href="/seo" aria-label="מידע על שירותי קידום אורגני">קידום אורגני</Link>
            </li>
            <li>
              <Link href="/design" aria-label="מידע על שירותי עיצוב גרפי">עיצוב גרפי</Link>
            </li>
            <li>
              <Link href="/about" aria-label="מידע על החברה שלנו">קצת עלינו</Link>
            </li>
          </ul>
        </nav>

        {/* עמודה 2 - בלוג */}
        <div className={`${styles["footer-column"]} ${styles["hidden"]}`}  role="region" aria-label="פוסטים מהבלוג">
          <h3 className={styles.h3}>בלוג</h3>
          <ul>
            <li>
              <Link href="/blog/how-to-choose-website">איך לבחור אתר מתאים לעסק</Link>
            </li>
            <li>
              <Link href="/blog/seo-tips">טיפים לקידום אתר בגוגל</Link>
            </li>
            <li>
              <Link href="/blog/business-vs-landing">הבדלים בין אתר תדמית לדף נחיתה</Link>
            </li>
            <li>
              <Link href="/blog/ecommerce-guide">כל מה שצריך לדעת על מסחר אלקטרוני</Link>
            </li>
            <li>
              <Link href="/blog/design-trends-2025">עיצוב אתרים - טרנדים לשנת 2025</Link>
            </li>
          </ul>
        </div>

        {/* עמודה 3 - צור קשר */}
        <address className={styles["footer-column"]} aria-label="פרטי יצירת קשר">
          <h3 className={styles.h3}>צור קשר</h3>
          <ul className={styles["contact-list"]}>
            <li>
              <span className={styles.icon} aria-hidden="true">📱</span> 
              <span>טלפון: </span>
              <a href="tel:+972585209911" aria-label="התקשר אלינו בטלפון 058-5209911">058-5209911</a>
            </li>
            <li>
              <span className={styles.icon} aria-hidden="true">✉️</span> 
              <span>אימייל: </span>
              <a href="mailto:barcohenn123@gmail.com" aria-label="שלח לנו אימייל">barcohenn123@gmail.com</a>
            </li>
            <li>
              <span className={styles.icon} aria-hidden="true">⏰</span> 
              <span>שעות פעילות: </span>
              <time dateTime="20:00">20:00</time>-<time dateTime="9:00">9:00</time> א&apos;-ה&apos;
            </li>
          </ul>
        </address>
      </div>

      {/* מידע נוסף ואייקונים */}
      <div className={styles["footer-info"]}>
        <div className={styles["footer-icons"]}>
          <div className={styles["contact-details"]}>
            <a href="mailto:barcohenn123@gmail.com" 
               className={styles["contact-link"]}
               aria-label="שלח לנו אימייל">
              <span className={styles.icon} aria-hidden="true">✉️</span> barcohenn123@gmail.com
            </a>
            <a href="tel:+972585209911" 
               className={styles["contact-link"]}
               aria-label="התקשר אלינו">
              <span className={styles.icon} aria-hidden="true">📞</span> 058-5209911
            </a>
          </div>
        </div>
        <div className={styles["copyright"]} role="contentinfo">
          <p>© {new Date().getFullYear()} כל הזכויות שמורות</p>
        </div>
      </div>
    </footer>
  );
}
