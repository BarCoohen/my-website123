import styles from "../styles/OurServices.module.css";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";

export default function OurServices() {
  // מערך השירותים הנוספים לשימוש גם בתצוגה וגם בסכימה
  const additionalServices = [
    { img: "icons8-online-maintenance-portal-50.webp", text: "תחזוקת אתרים שוטפת", type: "Website Maintenance" },
    { img: "icons8-website-50.webp", text: "ניהול ואחסון אתרים", type: "Website Hosting" },
    { img: "icons8-content-writing-48.webp", text: "ניהול תוכן וכתיבת תוכן", type: "Content Writing" },
    { img: "icons8-branding-48.webp", text: "מיתוג עסקי ודיגיטלי מלא", type: "Business Branding" },
    { img: "icons8-software-development-50.webp", text: "פיתוח תוכנות בהתאמה אישית", type: "Custom Software Development" },
    { img: "icons8-automation-50.webp", text: "אוטומציות עסקיות", type: "Business Automation" },
  ];

  return (
    <section 
      className={styles.ourServices} 
      aria-labelledby="services-title"
    >
      <h2 id="services-title" className={styles.ourServicesTitle}>השירותים שלנו</h2>

      {/* החלק העליון - שירותים מרכזיים */}
      <div className={styles.features}>
        <div className={styles.feature}>
          <div className={styles.imageWrapper}>
            <Image
              src="/images/ourservice/בניית אתרים.webp"
              alt="מסך מחשב המציג בניית אתר אינטרנט מעוצב ומתקדם"
              className={styles.featureIcon}
              width={1000} 
              height={500}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              priority
              loading="eager"
            />
          </div>
          <h3>בניית אתרים</h3>
          <p>
            בניית אתרים מקצועית, הנעשית על ידנו באופן אישי ובהתאמה מדויקת לצרכים ולמטרות של העסק שלך. תהליך העבודה כולל ליווי אישי, הקשבה מלאה לדרישות ולחזון שלך, והקפדה על בניית אתר מודרני, איכותי, ונוח לשימוש. המטרה שלנו היא לייצר עבורך נוכחות דיגיטלית חזקה שתמשוך את הלקוחות המתאימים ותאפשר לך להתקדם ולהצליח ברשת.
          </p>
          <Link
            href="/web-development"
            className={styles.featureButton}
            aria-label="למידע נוסף על בניית אתרים"
          >
            למידע נוסף
          </Link>
        </div>

        <div className={styles.feature}>
          <div className={styles.imageWrapper}>
            <Image
              src="/images/ourservice/Seoקידום.webp"
              alt="מסך מחשב עם אייקון SEO, המדגים אופטימיזציה וקידום אתרים בגוגל"
              className={styles.featureIcon}
              width={1000} 
              height={500}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              loading="eager"
            />
          </div>
          <h3>קידום אורגני בגוגל SEO</h3>
          <p>
            קידום אתרים איכותי שמטרתו להביא אותך למקומות הראשונים בגוגל. אני מקדם את האתר שלך באופן אישי, בעזרת מחקר מדויק והבנת הקהל שלך, כדי להבטיח שהלקוחות הנכונים ימצאו אותך בקלות. תהליך הקידום נעשה בשקיפות מלאה, עם דוחות ברורים ומעקב שוטף אחר התוצאות, כך שתמיד תדע איפה האתר שלך עומד ומה השלב הבא בדרך להצלחה.
          </p>
          <Link
            href="/seo"
            className={styles.featureButton}
            aria-label="למידע נוסף על קידום אורגני בגוגל"
          >
            למידע נוסף
          </Link>
        </div>

        <div className={styles.feature}>
          <div className={styles.imageWrapper}>
            <Image
              src="/images/ourservice/עיצוב גרפי.webp"
              alt="הדגמה של שירות עיצוב גרפי על גבי מסך מחשב, המדגיש יצירתיות וחדשנות"
              className={styles.featureIcon}
              width={1000} 
              height={500}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              loading="eager"
            />
          </div>
          <h3>עיצוב גרפי</h3>
          <p>
            עיצוב גרפי יצירתי ומקצועי בגישה אישית וידידותית, המותאם במיוחד לעסק שלך. אני אצור עבורך עיצוב ייחודי, מקורי, ובעל אופי שישקף בדיוק את מה שהעסק שלך מייצג. יחד נבחר את הסגנון, הצבעים והאווירה המתאימים, כך שהלקוחות שלך יתחברו למסר ולערכים של העסק כבר מהרגע הראשון.
          </p>
          <Link
            href="/design"
            className={styles.featureButton}
            aria-label="למידע נוסף על עיצוב גרפי"
          >
            למידע נוסף
          </Link>
        </div>
      </div>

      {/* החלק התחתון - קופסאות שירותים נוספים */}
      <div 
        className={styles.serviceBoxes}
        role="list"
        aria-label="שירותים נוספים"
      >
        {additionalServices.map((service, index) => (
          <div 
            key={index} 
            className={styles.serviceBox} 
            role="listitem"
          >
            <div className={styles.serviceIcon}>
              <Image
                src={`/images/ourservice/${service.img}`}
                alt={`אייקון עבור שירות ${service.text}`}
                width={50}
                height={50}
              />
            </div>
            <h4>{service.text}</h4>
          </div>
        ))}
      </div>

      {/* Schema.org כולל - במקום פזירת itemProps */}
      <Script id="our-services-schema" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          "name": "השירותים שלנו",
          "numberOfItems": 9, // 3 שירותים מרכזיים + 6 נוספים
          "itemListElement": [
            // שלושת השירותים המרכזיים
            {
              "@type": "Service",
              "position": 1,
              "name": "בניית אתרים",
              "description": "בניית אתרים מקצועית, הנעשית על ידנו באופן אישי ובהתאמה מדויקת לצרכים ולמטרות של העסק שלך.",
              "url": "https://SitePromotion.co.il/web-development",
              "image": "https://SitePromotion.co.il/images/ourservice/בניית אתרים.webp",
            },
            {
              "@type": "Service",
              "position": 2,
              "name": "קידום אורגני בגוגל SEO",
              "description": "קידום אתרים איכותי שמטרתו להביא אותך למקומות הראשונים בגוגל.",
              "url": "https://SitePromotion.co.il/seo",
              "image": "https://SitePromotion.co.il/images/ourservice/Seoקידום.webp",
              "serviceType": "SEO",
            },
            {
              "@type": "Service",
              "position": 3,
              "name": "עיצוב גרפי",
              "description": "עיצוב גרפי יצירתי ומקצועי בגישה אישית וידידותית, המותאם במיוחד לעסק שלך.",
              "url": "https://SitePromotion.co.il/design",
              "image": "https://SitePromotion.co.il/images/ourservice/עיצוב גרפי.webp",
              "serviceType": "Graphic Design",
            },
            // השירותים הנוספים
            ...additionalServices.map((service, index) => ({
              "@type": "Service",
              "position": index + 4,
              "name": service.text,
              "image": `https://SitePromotion.co.il/images/ourservice/${service.img}`,
              "serviceType": service.type,
            }))
          ]
        })}
      </Script>
    </section>
  );
}