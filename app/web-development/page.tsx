import PageTemplate, { styles } from '../components/PageTemplate';
import type { Metadata } from 'next';
import Script from 'next/script';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'בניית אתרים',
    description: 'שירותי בניית אתרים בניית אתר , דף נחיתה ואתר תדמית ומסחר',
    keywords: 'בניית אתר , בניית אתרים, דף נחיתה , מיני סייט , אתר תדמית, בלוג , חנות מסחר, חנות אינטרנטית,  אתר מותאם אישית, אתר קוד',
  };

export default function WebDevelopmentPage() {
    return(
      <>
        <PageTemplate
            title="בניית אתרים"
            subtitle="אנחנו בונים אתרים שמדויקים עבורך – מעוצבים, מהירים, ומותאמים בדיוק לצרכים של העסק שלך. עם דגש על חוויית משתמש, ביצועים גבוהים וקידום במנועי חיפוש, אנחנו יוצרים עבורך נוכחות דיגיטלית מנצחת."
            bannerImage="/images/pagesmig/ui-ux-representations-with-laptop-min.webp"
            imageAlt="מישהו עובד על המחשב ומייצר אתר כשברקע כל הפונקציות של האתר מרחפות באוויר"
        >
        <article className={styles.contentBlock}>
            <h2 id="what-is-seo" className={styles.sectionTitle}>מה זה קידום אורגני?</h2>
            <div>
              <p className={styles.paragraph}>
              קידום אורגני, או <strong>Search Engine Optimization (SEO)</strong>, הוא תהליך שיפור הנראות של האתר שלך במנועי חיפוש. באמצעות קידום אורגני מקצועי, האתר שלך יופיע <em>גבוה יותר</em> בתוצאות החיפוש הרלוונטיות לתחום העסק שלך, מה שמאפשר לך להגדיל באופן טבעי את כמות הכניסות לאתר (טראפיק).
              קידום אתר באופן אורגני מתמקד ביצירת תוכן איכותי, אופטימיזציה טכנית ומבנה נכון של האתר, בניית קישורים חיצוניים ופנימיים, ושיפור חוויית המשתמש. תהליך SEO איכותי מבטיח שהאתר שלך יהיה רלוונטי, נגיש וברור יותר עבור מנועי החיפוש וגם עבור המשתמשים, דבר שיגרום לכך שהלקוחות הפוטנציאליים שלך ימצאו אותך בדיוק ברגע שבו הם זקוקים לשירות או למוצר שאתה מציע.
              במילים אחרות, קידום אורגני הוא השקעה לטווח ארוך שמשפרת משמעותית את הסמכות, החשיפה וההצלחה העסקית שלך ברשת.
              </p>
            </div>
        </article>
        </PageTemplate>
     
      </>
    );
}