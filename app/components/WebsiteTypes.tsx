

import Image from "next/image";
import styles from '../styles/WebsiteTypes.module.css';
import InteractiveNav from "./InteractiveNav.client"; 



export default function WebsiteTypes() {
  return (
    <section className={styles.websiteTypes}>
        <InteractiveNav />
      <div className={styles.featureSection}>
        <div id="landing-page" className={styles.contentContainer}>
          <h2 className={styles.sectionTitleFeature}>איזה אתר מתאים לך?</h2>
          <div className={styles.featureContent}>
            <div className={styles.featureDetails}>
              <h3 className={styles.featureHeading}>דף נחיתה</h3>
              <p className={styles.featureSubheading}>דף נחיתה הוא עמוד אינטרנט יחיד וקצר שמטרתו המרכזית היא לגרום למבקרים לבצע פעולה ספציפית, כמו השארת פרטים, רכישה או הרשמה, בצורה מהירה ופשוטה. הוא מתאים במיוחד לקמפיינים שיווקיים, השקות מוצרים ואיסוף לידים מלקוחות פוטנציאליים.</p>
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
                    alt=""
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority
                    className={styles.featureImage}
                  />
                  <div className={styles.backdrop}></div>
                  <div className={styles.featureOverlay}>
                    <a href="#contact-form" className={styles.buttonLink}>צרו קשר</a>
                    <button>לפרטים</button>
                  </div>
                </div>
              </div> 
            </div>
          </div>
        </div>
        
        <div id="business-page" className={styles.contentContainer}>
          <div className={styles.featureContent}>
            <div className={styles.featureDetails}>
              <h3 className={styles.featureHeading}>אתר תדמית</h3>
              <p className={styles.featureSubheading}>אתר תדמית הוא הפנים הדיגיטליות של החברה או המותג שלך. זה המקום שבו מציגים את זהות הארגון בצורה מקצועית, מבליטים את הערכים והחזון שלך, ויוצרים רושם ראשוני חיובי שגורם למבקרים להרגיש ביטחון וסקרנות. באמצעות עיצוב נקי, תוכן איכותי וכלים ויזואליים מתקדמים, האתר מספק פלטפורמה להצגת שירותים, פרויקטים והישגים, ומעודד מעורבות והתקשרות עם הקהל.</p>
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
                    alt="אתר תדמית"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className={styles.featureImage}
                  />
                  <div className={styles.backdrop}></div>
                  <div className={styles.featureOverlay}>
                    <a href="#contact-form" className={styles.buttonLink}>צרו קשר</a>
                    <button>לפרטים</button>
                  </div>
                </div>
              </div>    
            </div>
          </div>
        </div>
        
        <div id="ecommerce-page" className={styles.contentContainer}>
          <div className={styles.featureContent}>
            <div className={styles.featureDetails}>
              <h3 className={styles.featureHeading}>חנות אינטרנטית / Ecommerce</h3>
              <p className={styles.featureSubheading}>חנות אינטרנטית היא פלטפורמה דיגיטלית בה עסקים מציגים את מוצריהם ומספקים ללקוחות את האפשרות לרכוש אותם דרך האינטרנט. היא מאפשרת למשתמשים לעיין במלאי, להשוות מחירים ולבצע תשלומים באופן מאובטח ונוח, תוך חיסכון בזמן ובמאמץ</p>
              <div className={styles.contentRow}>
                <div className={styles.featureElementsWrapper}>     
                  <div className={styles.featureElements}>
                    <ul className={styles.landingPageFeatures}>
                      <li><strong>העלאת וניהול מוצרים בקלות</strong></li>
                      <li><strong>ניהול מלאי בזמן אמת</strong></li>
                      <li><strong>שילוב אמצעי תשלום </strong></li>
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
                    alt="חנות אינטרנטית"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className={styles.featureImage}
                  />
                  <div className={styles.backdrop}></div>
                  <div className={styles.featureOverlay}>
                    <a href="#contact-form" className={styles.buttonLink}>צרו קשר</a>
                    <button>לפרטים</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div id="custom-page" className={styles.contentContainer}>
          <div className={styles.featureContent}>
            <div className={styles.featureDetails}>
              <h3 className={styles.featureHeading}>אתר מותאם אישית / קוד</h3>
              <p className={styles.featureSubheading}>זהו אתר שנבנה מאפס תוך שימוש בקוד, על מנת להתאים בצורה מושלמת את העיצוב והפונקציונליות לצרכים הייחודיים של העסק או המותג שלך. היתרון הוא בגמישות מלאה, יכולת להוסיף תכונות מתקדמות ואינטגרציות מיוחדות, ובניית אתר שמשקף בצורה מדויקת את זהות המותג.</p>
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
                    alt="אתר מותאם אישית"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority
                    className={styles.featureImage}
                  />
                  <div className={styles.backdrop}></div>
                  <div className={styles.featureOverlay}>
                    <a href="#contact-form" className={styles.buttonLink}>צרו קשר</a>
                    <button>לפרטים</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}