import Image from "next/image";
import styles from "../styles/WebsiteTypes.module.css";
import InteractiveNav from "./client/InteractiveNav.client";
import Link from "next/link";
import Script from 'next/script';

export default function WebsiteTypes() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "דף נחיתה",
        "description": "דף נחיתה הוא עמוד אינטרנט יחיד וקצר שמטרתו המרכזית היא לגרום למבקרים לבצע פעולה ספציפית"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "אתר תדמית",
        "description": "אתר תדמית הוא הפנים הדיגיטליות של החברה או המותג שלך"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "חנות אינטרנטית",
        "description": "חנות אינטרנטית היא פלטפורמה דיגיטלית מתקדמת בה עסקים מציגים את מוצריהם"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "אתר מותאם אישית",
        "description": "אתר שנבנה מאפס תוך שימוש בקוד, להתאמה מושלמת לצרכים הייחודיים של העסק"
      }
    ]
  };

  return (
    <>
      <Script id="website-types-schema" type="application/ld+json">
        {JSON.stringify(schema)}
      </Script>
      
      <section className={styles.websiteTypes} role="region" aria-label="סוגי אתרים">
        <InteractiveNav />
        <div className={styles.featureSection}>
          {/* דף נחיתה */}
          <article id="landing-page" className={styles.contentContainer} aria-labelledby="landing-page-heading">
            <h2 id="landing-page-heading" className={styles.sectionTitleFeature}>איזה אתר מתאים לך?</h2>
            <div className={styles.featureContent}>
              <div className={styles.featureDetails}>
                <h3 className={styles.featureHeading}>דף נחיתה</h3>
                <p className={styles.featureSubheading}>
                  דף נחיתה הוא עמוד אינטרנט יחיד וקצר שמטרתו המרכזית היא לגרום למבקרים לבצע פעולה ספציפית, כמו השארת פרטים, רכישה או הרשמה, בצורה מהירה ופשוטה. הוא מתאים במיוחד לקמפיינים שיווקיים, השקות מוצרים ואיסוף לידים מלקוחות פוטנציאליים.
                </p>
                <div className={styles.contentRow}>
                  <div className={styles.featureElementsWrapper}>
                    <div className={styles.featureElements}>
                      <ul className={styles.landingPageFeatures}>
                        <li><strong>עמוד אחד בלבד</strong></li>
                        <li><strong>כותרת ראשית ברורה וחזקה</strong></li>
                        <li><strong>הסבר קצר וברור</strong></li>
                        <li><strong>טופס יצירת קשר או הרשמה</strong></li>
                        <li><strong>תמונות או וידאו</strong></li>
                        <li><strong>כפתורי קריאה לפעולה (CTA)</strong></li>
                        <li><strong>קישורים לרשתות חברתיות</strong></li>
                        <li><strong>עדויות והמלצות</strong></li>
                        <li><strong>ועוד המון אפשרויות נוספות</strong></li>
                      </ul>
                    </div>
                  </div>
                  <div className={styles.featureImageContainer}>
                    <Image
                      src="/images/סוגי אתרים/2004.i518.011_responsive landing page website mobile UI app templates.webp"
                      alt="תצוגה של דף נחיתה רספונסיבי"
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      priority
                      className={styles.featureImage}
                    />
                    <div className={styles.backdrop}></div>
                    <div className={styles.featureOverlay}>
                      <a href="#contact-form" className={styles.buttonLink} aria-label="צור קשר לגבי דף נחיתה">
                        צרו קשר
                      </a>
                      <Link
                        href="/web-types/landing-page"
                        className={styles.buttonLink}
                        aria-label="למידע נוסף על דף נחיתה"
                        role="button"
                      >
                        לפרטים
                      </Link>
                    </div>
                  </div>
                </div> 
              </div>
            </div>
          </article>

          {/* אתר תדמית */}
          <article id="business-page" className={styles.contentContainer} aria-labelledby="business-page-heading">
            <div className={styles.featureContent}>
              <div className={styles.featureDetails}>
                <h3 id="business-page-heading" className={styles.featureHeading}>אתר תדמית</h3>
                <p className={styles.featureSubheading}>
                  אתר תדמית הוא הפנים הדיגיטליות של החברה או המותג שלך. זה המקום שבו מציגים את זהות הארגון בצורה מקצועית, מבליטים את הערכים והחזון שלך, ויוצרים רושם ראשוני חיובי שגורם למבקרים להרגיש ביטחון וסקרנות.
                </p>
                <div className={styles.contentRow}>
                  <div className={styles.featureElementsWrapper}>
                    <div className={styles.featureElements}>
                      <ul className={styles.landingPageFeatures}>
                        <li><strong>עיצוב מקצועי ונקי</strong></li>
                        <li><strong>מבנה רב-עמוד</strong></li>
                        <li><strong>ניווט פשוט וברור</strong></li>
                        <li><strong>תוכן עשיר ואינפורמטיבי</strong></li>
                        <li><strong>גלריית מדיה (תמונות, סרטונים)</strong></li>
                        <li><strong>עדויות והמלצות</strong></li>
                        <li><strong>כפתורי קריאה לפעולה (CTA)</strong></li>
                        <li><strong>אינטגרציות עם רשתות חברתיות</strong></li>
                        <li><strong>בלוג או עדכונים</strong></li>
                        <li><strong>טופס יצירת קשר</strong></li>
                        <li><strong>מערכת ניהול תוכן (CMS)</strong></li>
                        <li><strong>תמיכה ברספונסיביות</strong></li>
                        <li><strong>עיצוב מותאם למותג</strong></li>
                        <li><strong>ועוד המון אפשרויות נוספות</strong></li>
                      </ul>
                    </div>
                  </div>
                  <div className={styles.featureImageContainer}>
                    <Image
                      src="/images/סוגי אתרים/4089262_88261.webp"
                      alt="תצוגה של אתר תדמית"
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      priority
                      className={styles.featureImage}
                    />
                    <div className={styles.backdrop}></div>
                    <div className={styles.featureOverlay}>
                      <a href="#contact-form" className={styles.buttonLink} aria-label="צור קשר לגבי אתר תדמית">
                        צרו קשר
                      </a>
                      <Link
                        href="/web-types/buisness-site"
                        className={styles.buttonLink}
                        aria-label="למידע נוסף על אתר תדמית"
                        role="button"
                      >
                        לפרטים
                      </Link>
                    </div>
                  </div>
                </div>    
              </div>
            </div>
          </article>

          {/* חנות אינטרנטית */}
          <article id="ecommerce-page" className={styles.contentContainer} aria-labelledby="ecommerce-page-heading">
            <div className={styles.featureContent}>
              <div className={styles.featureDetails}>
                <h3 id="ecommerce-page-heading" className={styles.featureHeading}>חנות אינטרנטית / Ecommerce</h3>
                <p className={styles.featureSubheading}>
                  חנות אינטרנטית היא פלטפורמה דיגיטלית מתקדמת בה עסקים מציגים את מוצריהם ומספקים ללקוחות את האפשרות לרכוש אותם דרך האינטרנט בצורה מאובטחת, מהירה ופשוטה, מכל מקום ובכל שעה.
                </p>
                <div className={styles.contentRow}>
                  <div className={styles.featureElementsWrapper}>
                    <div className={styles.featureElements}>
                      <ul className={styles.landingPageFeatures}>
                        <li><strong>העלאת וניהול מוצרים בקלות</strong></li>
                        <li><strong>ניהול מלאי בזמן אמת</strong></li>
                        <li><strong>שילוב אמצעי תשלום</strong></li>
                        <li><strong>ניהול הזמנות ומשלוחים</strong></li>
                        <li><strong>דוחות וניתוחים מתקדמים לניהול העסק</strong></li>
                        <li><strong>ניהול לקוחות, מועדוני לקוחות ונאמנות</strong></li>
                        <li><strong>הפעלת קופונים, מבצעים וקודי הנחה</strong></li>
                        <li><strong>ניהול ביקורות ודירוגי מוצרים</strong></li>
                        <li><strong>תמיכה במספר שפות ומטבעות</strong></li>
                        <li><strong>ניהול החזרות, תלונות ושירות לקוחות</strong></li>
                        <li><strong>חיבור לאינטגרציות עם רשתות חברתיות</strong></li>
                        <li><strong>ועוד המון אפשרויות נוספות</strong></li>
                      </ul>
                    </div>
                  </div>
                  <div className={styles.featureImageContainer}>
                    <Image
                      src="/images/סוגי אתרים/iStock-1179101265.webp"
                      alt="תצוגה של חנות אינטרנטית"
                      fill
                      priority
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className={styles.featureImage}
                    />
                    <div className={styles.backdrop}></div>
                    <div className={styles.featureOverlay}>
                      <a href="#contact-form" className={styles.buttonLink} aria-label="צור קשר לגבי חנות מסחר מקוון">
                        צרו קשר
                      </a>
                      <Link
                        href="/web-types/ecommerce"
                        className={styles.buttonLink}
                        aria-label="למידע נוסף על חנות אינטרנטית"
                        role="button"
                      >
                        לפרטים
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>

          {/* אתר מותאם אישית */}
          <article id="custom-page" className={styles.contentContainer} aria-labelledby="custom-page-heading">
            <div className={styles.featureContent}>
              <div className={styles.featureDetails}>
                <h3 id="custom-page-heading" className={styles.featureHeading}>אתר מותאם אישית / קוד</h3>
                <p className={styles.featureSubheading}>
                  זהו אתר שנבנה מאפס תוך שימוש בקוד, על מנת להתאים בצורה מושלמת את העיצוב והפונקציונליות לצרכים הייחודיים של העסק או המותג שלך, תוך גמישות מלאה, יצירתיות בלתי מוגבלת ואפשרויות מתקדמות שיעזרו לעסק שלך לבלוט ולהוביל בתחום שלך.              </p>
                <div className={styles.contentRow}>
                  <div className={styles.featureElementsWrapper}>
                    <div className={styles.featureElements}>
                      <ul className={styles.landingPageFeatures}>
                        <li><strong>קוד מותאם אישית</strong></li>
                        <li><strong>עיצוב ייחודי ומותאם למותג</strong></li>
                        <li><strong>התאמה מלאה לצרכי העסק</strong></li>
                        <li><strong>פיתוח רספונסיבי</strong></li>
                        <li><strong>ביצועים ואופטימיזציה מקסימלית</strong></li>
                        <li><strong>אינטגרציות API מתקדמות</strong></li>
                        <li><strong>אבטחה מתקדמת ומוגנת</strong></li>
                        <li><strong>מערכת ניהול תוכן (CMS) מותאמת אישית</strong></li>
                        <li><strong>התאמה למנועי חיפוש (SEO)</strong></li>
                        <li><strong>תחזוקה ועדכונים שוטפים</strong></li>
                        <li><strong>תמיכה טכנית והדרכה</strong></li>
                        <li><strong>התאמה לטכנולוגיות ולמכשירים חדשים</strong></li>
                        <li><strong>ועוד המון אפשרויות נוספות</strong></li>
                      </ul>
                    </div>
                  </div>
                  <div className={styles.featureImageContainer}>
                    <Image
                      src="/images/סוגי אתרים/iStock-1029914960.webp"
                      alt="תצוגה של אתר מותאם אישית"
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      priority
                      className={styles.featureImage}
                    />
                    <div className={styles.backdrop}></div>
                    <div className={styles.featureOverlay}>
                      <a href="#contact-form" className={styles.buttonLink} aria-label="צור קשר לגבי אתר מותאם אישית">
                        צרו קשר
                      </a>
                      <Link
                        href="/web-types/custom"
                        className={styles.buttonLink}
                        aria-label="למידע נוסף על אתר מותאם אישית"
                        role="button"
                      >
                        לפרטים
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>

        </div>
      </section>
    </>
  );
}
