import PageTemplate, { styles } from '../components/PageTemplate';
import type { Metadata } from 'next';
import Script from 'next/script';
import Link from 'next/link';


export const metadata: Metadata = {
  title: 'קידום אורגני SEO',
  description: 'שירותי קידום אורגני מקצועיים לאתרי אינטרנט, כולל אופטימיזציה וקידום במנועי חיפוש.',
  keywords: 'קידום אורגני, SEO, קידום אתרים, גוגל, מנועי חיפוש, אופטימיזציה',
};

export default function SEOPage() {
  return (
    <>
      <PageTemplate
        title="קידום אורגני (SEO)"
        subtitle="פתרונות מקצועיים להגדלת החשיפה של האתר שלך במנועי חיפוש – שיפור דירוגים, הגדלת התנועה והגעה לקהל הלקוחות המדויק ביותר עבורך."
        bannerImage="/images/pagesmig/1690.webp"
        imageAlt="מסך מחשב שנראה עתידני ועליו עובדים על אתר ולידו לוגו של seo"
      >
        <section className={styles.section} itemScope itemType="https://schema.org/Service">
          <meta itemProp="serviceType" content="קידום אורגני SEO" />
          
          <article className={styles.contentBlock}>
            <h2 id="seo-intro" className={styles.sectionTitle} itemProp="name">מתקדמים למקומות הראשונים בגוגל עם קידום אורגני מקצועי!</h2>
            <div itemProp="description">
              <p className={styles.paragraph}>
              כיום, יותר ויותר עסקים מבינים שהצלחה באינטרנט מתחילה לא רק בבניית אתר מרשים, אלא בהפיכתו לנגיש ומוכר ללקוחות הפוטנציאליים. עם <strong>קידום אורגני איכותי</strong>, תוכלו להבטיח שהאתר שלכם יגיע לראש תוצאות החיפוש וימשוך אליו בדיוק את הקהל הנכון. אנחנו עובדים עם אסטרטגיות מוכחות, כלים מתקדמים וצוות מומחים מנוסה כדי לדחוף את האתר שלכם קדימה, למצב את המותג שלכם כמוביל בתחום ולמנף את הנוכחות הדיגיטלית שלכם באופן טבעי וללא תלות בפרסום ממומן.
              </p>
            </div>
          </article>

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

          <article className={styles.contentBlock}>
            <h2 id="seo-benefits" className={styles.sectionTitle}>למה קידום אורגני חשוב?</h2>
            <ul className={styles.featureGrid} aria-labelledby="seo-benefits">
              <li className={styles.featureCard}>
                <h3 className={styles.featureTitle}>הגדלת תנועה איכותית לאתר:</h3>
                <p className={styles.featureDescription}>
                  באמצעות קידום אורגני ניתן למשוך לאתר שלך גולשים שמחפשים בדיוק את המוצרים או השירותים שאתה מציע – והכול ללא תשלום פר-קליק.
                </p>
              </li>
              
              <li className={styles.featureCard}>
                <h3 className={styles.featureTitle}>בניית אמון וסמכות מול לקוחות פוטנציאליים:</h3>
                <p className={styles.featureDescription}>
                  אתרים שמופיעים גבוה בתוצאות החיפוש נתפסים כאמינים ומקצועיים יותר בעיני הגולשים, דבר שמעודד אותם לבחור דווקא בך.
                </p>
              </li>
              
              <li className={styles.featureCard}>
                <h3 className={styles.featureTitle}>החזר השקעה לטווח ארוך:</h3>
                <p className={styles.featureDescription}>
                  השקעה בקידום אורגני משתלמת מאוד לאורך זמן, מפני שהתוצאות נשמרות וממשיכות להביא תנועה איכותית לאורך חודשים ואף שנים קדימה.
                </p>
              </li>
              
              <li className={styles.featureCard}>
                <h3 className={styles.featureTitle}>שיפור משמעותי של חוויית המשתמש:</h3>
                <p className={styles.featureDescription}>
                  תהליך SEO מקצועי משפר לא רק את הנראות שלך בגוגל אלא גם את המהירות, המבנה, והתוכן של האתר – מה שמוביל לחוויה חיובית יותר עבור הגולשים שלך.
                </p>
              </li>
              
              <li className={styles.featureCard}>
                <h3 className={styles.featureTitle}>יתרון תחרותי ברור על פני מתחרים:</h3>
                <p className={styles.featureDescription}>
                  אתר המקודם היטב בגוגל נמצא צעד אחד לפני המתחרים, מכיוון שהלקוחות מוצאים אותו ראשון ומזהים אותו כעסק מוביל בתחומו.
                </p>
              </li>
              
              <li className={styles.featureCard}>
                <h3 className={styles.featureTitle}>הרחבת החשיפה והמודעות למותג:</h3>
                <p className={styles.featureDescription}>
                  קידום אורגני מוצלח מייצר יותר חשיפות למותג שלך, מה שמחזק את הנוכחות שלך באינטרנט ומסייע לבנות מודעות גבוהה יותר לעסק.
                </p>
              </li>
              
              <li className={styles.featureCard}>
                <h3 className={styles.featureTitle}>הפחתת התלות בפרסום ממומן:</h3>
                <p className={styles.featureDescription}>
                  ככל שהאתר שלך ממוקם טוב יותר בצורה אורגנית, כך תהיה פחות תלוי בקמפיינים ממומנים ותחסוך בעלויות השיווק והפרסום.
                </p>
              </li>
              
              <li className={styles.featureCard}>
                <h3 className={styles.featureTitle}>הגעה לקהלים חדשים ורלוונטיים:</h3>
                <p className={styles.featureDescription}>
                  קידום אורגני מאפשר לך להיחשף לקהלים חדשים, לפנות לנישות חדשות ולהגדיל את בסיס הלקוחות שלך ללא השקעה כספית נוספת בפרסום.
                </p>
              </li>
            </ul>
          </article>

          <article className={styles.contentBlock}>
            <h2 id="seo-services" className={styles.sectionTitle}>השירותים שלנו בתחום קידום אורגני</h2>
            <ul className={styles.featureGrid} aria-labelledby="seo-services">
              <li className={styles.featureCard}>
                <h3 className={styles.featureTitle}>מחקר מילות מפתח</h3>
                <p className={styles.featureDescription}>
                  איתור מילות מפתח רלוונטיות לתחום העסק שלך.
                </p>
              </li>        
              <li className={styles.featureCard}>
                <h3 className={styles.featureTitle}>אופטימיזציית תוכן</h3>
                <p className={styles.featureDescription}>
                  התאמת התוכן באתר למילות מפתח וכתיבת תוכן איכותי.
                </p>
              </li>         
              <li className={styles.featureCard}>
                <h3 className={styles.featureTitle}>בניית קישורים</h3>
                <p className={styles.featureDescription}>
                  יצירת פרופיל קישורים איכותי שמחזק את האתר.
                </p>
              </li>           
              <li className={styles.featureCard}>
                <h3 className={styles.featureTitle}>אופטימיזציה טכנית לאתר</h3>
                <p className={styles.featureDescription}>
                  שיפור מהירות טעינה, התאמה למובייל ויצירת מבנה אתר ברור לגוגל.
                </p>
              </li>           
              <li className={styles.featureCard}>
                <h3 className={styles.featureTitle}>קידום מקומי (Local SEO)</h3>
                <p className={styles.featureDescription}>
                  אופטימיזציה ממוקדת לעסקים מקומיים שמטרתה להגדיל את החשיפה באזור פעילות ספציפי.
                </p>
              </li>           
              <li className={styles.featureCard}>
                <h3 className={styles.featureTitle}>שיפור חוויית המשתמש (UX)</h3>
                <p className={styles.featureDescription}>
                  התאמת ממשק האתר לחוויית משתמש טובה ונוחה יותר, מה שיתרום לקידום האתר בתוצאות החיפוש.
                </p>
              </li>           
              <li className={styles.featureCard}>
                <h3 className={styles.featureTitle}>דו{'"'}חות וניתוח נתונים</h3>
                <p className={styles.featureDescription}>
                  הכנת דו{'"'}חות מעקב, ניתוח ביצועים והמלצות שוטפות לשיפור הקידום האורגני.
                </p>
              </li>
              <li className={styles.featureCard}>
                <h3 className={styles.featureTitle}>ניהול תוכן ובלוג מקצועי</h3>
                <p className={styles.featureDescription}>
                  הקמה וניהול בלוג עסקי או מדור תוכן מקצועי באתר לצורך יצירת סמכות והגדלת התנועה האורגנית.
                </p>
              </li>
              <li className={styles.featureCard}>
                <h3 className={styles.featureTitle}>קידום אורגני בהתאמה אישית לצרכים שלך</h3>
                <p className={styles.featureDescription}>
                כל פרויקט SEO שאנחנו מבצעים מותאם באופן אישי לצרכים הייחודיים של העסק שלך, תוך דגש על מה שמתאים לו, על מה שהוא צריך ועל השגת התוצאות הטובות ביותר עבורו.
                </p>
              </li>
            </ul>
          </article>

          <article className={styles.contentBlock}>
            <h2 id="why-choose-us" className={styles.sectionTitle}>למה לבחור בנו לקידום אורגני?</h2>
            <div>
              <p className={styles.paragraph}>
              כשאתם בוחרים בנו לקידום אורגני, אתם בוחרים <strong>בשותפים אמיתיים לדרך</strong>. אנחנו לא מסתפקים רק בהבאת האתר שלכם לראש תוצאות החיפוש, אלא מתמקדים גם בצמיחת העסק שלכם לאורך זמן. ההצלחה שלכם היא ההצלחה שלנו – לכן אנו מקפידים על התאמה אישית של אסטרטגיית SEO חכמה, שימוש בכלים המתקדמים ביותר, ודיווחים שקופים לאורך כל הדרך. אנחנו מאמינים בקשר אישי ובליווי צמוד, ובזכות ניסיון עשיר והמון לקוחות מרוצים, נדאג שהאתר שלכם יקבל את החשיפה וההכרה שמגיעות לו.         
              </p>
            </div>
          </article>
          
          {/* הוספת קריאה לפעולה */}
          <div className={styles.ctaSection} role="complementary">
            <p className={styles.paragraph}>
              <strong>צרו קשר עוד היום</strong> לקבלת ייעוץ ראשוני ללא עלות והצעת מחיר מותאמת אישית לצרכים שלכם.
            </p>
            <Link 
              href="#form-description" 
              className={styles.ctaButton} 
              aria-label="צור קשר לקבלת הצעת מחיר לקידום אורגני"
            >
              דברו איתנו עכשיו
            </Link>
          </div>

          {/* הוספת חלק של שאלות נפוצות */}
          <aside className={styles.faqSection} aria-labelledby="seo-faq">
            <h2 id="seo-faq" className={styles.sectionTitle}>שאלות נפוצות על קידום אורגני</h2>
            <div itemScope itemType="https://schema.org/FAQPage">
              <details 
                itemScope 
                itemProp="mainEntity" 
                itemType="https://schema.org/Question" 
                className={styles.faqItem}
              >
                <summary 
                  itemProp="name" 
                  className={styles.faqQuestion}
                  aria-controls="faq-answer-1"
                >
                  כמה זמן לוקח לראות תוצאות מקידום אורגני?
                  <span className={styles.faqToggle} aria-hidden="true">+</span>
                </summary>
                <div 
                  id="faq-answer-1"
                  itemScope 
                  itemProp="acceptedAnswer" 
                  itemType="https://schema.org/Answer"
                >
                  <div itemProp="text" className={styles.faqAnswer}>
                    <p>קידום אורגני הוא תהליך ארוך טווח. בדרך כלל רואים תוצאות ראשוניות אחרי 3-6 חודשים, ותוצאות משמעותיות אחרי 6-12 חודשים.</p>
                  </div>
                </div>
              </details>
              
              <details 
                itemScope 
                itemProp="mainEntity" 
                itemType="https://schema.org/Question" 
                className={styles.faqItem}
              >
                <summary 
                  itemProp="name" 
                  className={styles.faqQuestion}
                  aria-controls="faq-answer-2"
                >
                  האם קידום אורגני עדיף על פרסום ממומן?
                  <span className={styles.faqToggle} aria-hidden="true">+</span>
                </summary>
                <div 
                  id="faq-answer-2"
                  itemScope 
                  itemProp="acceptedAnswer" 
                  itemType="https://schema.org/Answer"
                >
                  <div itemProp="text" className={styles.faqAnswer}>
                    <p>שני האפיקים חשובים. פרסום ממומן מביא תוצאות מיידיות, אך קידום אורגני מספק תוצאות ארוכות טווח ועלות נמוכה יותר לטווח ארוך.</p>
                  </div>
                </div>
              </details>
              
              <details 
                itemScope 
                itemProp="mainEntity" 
                itemType="https://schema.org/Question" 
                className={styles.faqItem}
               
              >
                <summary 
                  itemProp="name" 
                  className={styles.faqQuestion}
                  aria-controls="faq-answer-3"
                >
                  האם קידום אורגני מתאים לכל סוגי העסקים?
                  <span className={styles.faqToggle} aria-hidden="true">+</span>
                </summary>
                <div 
                  id="faq-answer-3"
                  itemScope 
                  itemProp="acceptedAnswer" 
                  itemType="https://schema.org/Answer"
                >
                  <div itemProp="text" className={styles.faqAnswer}>
                    <p>כן! קידום אורגני מתאים לכל עסק שיש לו נוכחות דיגיטלית ורוצה להגדיל את החשיפה שלו בגוגל. בין אם מדובר בעסק קטן, חנות אינטרנטית, חברה גדולה או אפילו נותני שירותים – SEO יכול לעזור לך להגיע לקהל היעד שלך באופן ממוקד וללא צורך בפרסום ממומן.</p>
                  </div>
                </div>
              </details>

              <details 
                itemScope 
                itemProp="mainEntity" 
                itemType="https://schema.org/Question" 
                className={styles.faqItem}
              
              >
                <summary 
                  itemProp="name" 
                  className={styles.faqQuestion}
                  aria-controls="faq-answer-4"
                >
                  האם תוכן הוא באמת כל כך חשוב לקידום אורגני?
                  <span className={styles.faqToggle} aria-hidden="true">+</span>
                </summary>
                <div 
                  id="faq-answer-4"
                  itemScope 
                  itemProp="acceptedAnswer" 
                  itemType="https://schema.org/Answer"
                >
                  <div itemProp="text" className={styles.faqAnswer}>
                    <p>בהחלט! תוכן איכותי הוא אחד הגורמים החשובים ביותר בקידום אורגני. מנועי החיפוש, ובראשם גוגל, נותנים עדיפות לאתרים שמספקים מידע שימושי, מקיף ורלוונטי למשתמשים. כתיבת תוכן עם מילות מפתח מתאימות, מבנה נכון וערך אמיתי לקהל היעד תסייע לך לשפר את דירוג האתר לאורך זמן.</p>
                  </div>
                </div>
              </details>

              <details 
                itemScope 
                itemProp="mainEntity" 
                itemType="https://schema.org/Question" 
                className={styles.faqItem}
              >
                <summary 
                  itemProp="name" 
                  className={styles.faqQuestion}
                  aria-controls="faq-answer-5"
                >
                  האם אפשר להפסיק לקדם את האתר אחרי שהגעתי למקום גבוה בגוגל?
                  <span className={styles.faqToggle} aria-hidden="true">+</span>
                </summary>
                <div 
                  id="faq-answer-5"
                  itemScope 
                  itemProp="acceptedAnswer" 
                  itemType="https://schema.org/Answer"
                >
                  <div itemProp="text" className={styles.faqAnswer}>
                    <p>לא מומלץ להפסיק לחלוטין. קידום אורגני הוא תהליך מתמשך. אם תפסיק להשקיע בו, האתר שלך עלול לאבד את המיקומים שהשגת ולרדת בדירוג לאורך זמן. מומלץ להמשיך בתחזוקה שוטפת כדי לשמור על ההישגים שלך ולהמשיך לצמוח.</p>
                  </div>
                </div>
              </details>
            </div>
          </aside>             
        </section>
      </PageTemplate>

      {/* הוספת Schema.org מורחב */}
      <Script id="seo-service-schema" type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "קידום אורגני SEO",
          "provider": {
            "@type": "LocalBusiness",
            "name": "SitePromotion",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "ישראל",
              "addressRegion": "מרכז"
            },
            "telephone": "03-1234567"
          },
          "description": "שירותי קידום אורגני מקצועיים לאתרי אינטרנט, כולל אופטימיזציה וקידום במנועי חיפוש.",
          "serviceType": "SEO",
          "category": "קידום אתרים",
          "areaServed": "ישראל",
          "offers": {
            "@type": "Offer",
            "availability": "https://schema.org/InStock",
            "priceSpecification": {
              "@type": "PriceSpecification",
              "priceCurrency": "ILS"
            }
          },
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "שירותי קידום אורגני",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "מחקר מילות מפתח"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "אופטימיזציית תוכן"
                }
              }
            ]
          }
        })
      }} />
    </>
  );
}
