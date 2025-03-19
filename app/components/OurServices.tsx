import styles from "../styles/OurServices.module.css";
import Image from "next/image";
import Link from "next/link";

export default function OurServices() {
  return (
    // שיפור מבנה ה-ItemList לפי הסטנדרטים של Schema.org
    <section 
      className={styles.ourServices} 
      itemScope 
      itemType="https://schema.org/ItemList"
      aria-labelledby="services-title"
    >
      <h2 id="services-title" className={styles.ourServicesTitle} itemProp="name">השירותים שלנו</h2>
      <meta itemProp="numberOfItems" content="3" />

      {/* החלק העליון - שירותים מרכזיים */}
      <div className={styles.features}>
        <div 
          className={styles.feature} 
          itemScope 
          itemType="https://schema.org/Service"
          itemProp="itemListElement"
        >
          <meta itemProp="position" content="1" />
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
            <meta itemProp="image" content="/images/ourservice/בניית אתרים.webp" />
          </div>
          <h3 itemProp="name">בניית אתרים</h3>
          <p itemProp="description">
            בניית אתרים מקצועית, הנעשית על ידנו באופן אישי ובהתאמה מדויקת לצרכים ולמטרות של העסק שלך. תהליך העבודה כולל ליווי אישי, הקשבה מלאה לדרישות ולחזון שלך, והקפדה על בניית אתר מודרני, איכותי, ונוח לשימוש. המטרה שלנו היא לייצר עבורך נוכחות דיגיטלית חזקה שתמשוך את הלקוחות המתאימים ותאפשר לך להתקדם ולהצליח ברשת.
          </p>
          <Link
            href="/web-development"
            className={styles.featureButton}
            itemProp="url"
            aria-label="למידע נוסף על בניית אתרים"
          >
            למידע נוסף
          </Link>
          <div itemProp="provider" itemScope itemType="https://schema.org/Organization">
            <meta itemProp="name" content="SitePromotion" />
            <meta itemProp="url" content="https://www.sitepromotion.co.il" />
          </div>
        </div>

        <div 
          className={styles.feature} 
          itemScope 
          itemType="https://schema.org/Service"
          itemProp="itemListElement"
        >
          <meta itemProp="position" content="2" />
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
            <meta itemProp="image" content="/images/ourservice/Seoקידום.webp" />
          </div>
          <h3 itemProp="name">קידום אורגני בגוגל SEO</h3>
          <p itemProp="description">
            קידום אתרים איכותי שמטרתו להביא אותך למקומות הראשונים בגוגל. אני מקדם את האתר שלך באופן אישי, בעזרת מחקר מדויק והבנת הקהל שלך, כדי להבטיח שהלקוחות הנכונים ימצאו אותך בקלות. תהליך הקידום נעשה בשקיפות מלאה, עם דוחות ברורים ומעקב שוטף אחר התוצאות, כך שתמיד תדע איפה האתר שלך עומד ומה השלב הבא בדרך להצלחה.
          </p>
          <Link
            href="/seo"
            className={styles.featureButton}
            itemProp="url"
            aria-label="למידע נוסף על קידום אורגני בגוגל"
          >
            למידע נוסף
          </Link>
          <meta itemProp="serviceType" content="SEO" />
        </div>

        <div 
          className={styles.feature} 
          itemScope 
          itemType="https://schema.org/Service"
          itemProp="itemListElement"
        >
          <meta itemProp="position" content="3" />
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
            <meta itemProp="image" content="/images/ourservice/עיצוב גרפי.webp" />
          </div>
          <h3 itemProp="name">עיצוב גרפי</h3>
          <p itemProp="description">
            עיצוב גרפי יצירתי ומקצועי בגישה אישית וידידותית, המותאם במיוחד לעסק שלך. אני אצור עבורך עיצוב ייחודי, מקורי, ובעל אופי שישקף בדיוק את מה שהעסק שלך מייצג. יחד נבחר את הסגנון, הצבעים והאווירה המתאימים, כך שהלקוחות שלך יתחברו למסר ולערכים של העסק כבר מהרגע הראשון.
          </p>
          <Link
            href="/design"
            className={styles.featureButton}
            itemProp="url"
            aria-label="למידע נוסף על עיצוב גרפי"
          >
            למידע נוסף
          </Link>
          <meta itemProp="serviceType" content="Graphic Design" />
        </div>
      </div>

      {/* החלק התחתון - קופסאות שירותים נוספים */}
      <div 
        className={styles.serviceBoxes}
        role="list"
        aria-label="שירותים נוספים"
      >
        {[
          { img: "icons8-online-maintenance-portal-50.webp", text: "תחזוקת אתרים שוטפת", type: "Website Maintenance" },
          { img: "icons8-website-50.webp", text: "ניהול ואחסון אתרים", type: "Website Hosting" },
          { img: "icons8-content-writing-48.webp", text: "ניהול תוכן וכתיבת תוכן", type: "Content Writing" },
          { img: "icons8-branding-48.webp", text: "מיתוג עסקי ודיגיטלי מלא", type: "Business Branding" },
          { img: "icons8-software-development-50.webp", text: "פיתוח תוכנות בהתאמה אישית", type: "Custom Software Development" },
          { img: "icons8-automation-50.webp", text: "אוטומציות עסקיות", type: "Business Automation" },
        ].map((service, index) => (
          <div 
            key={index} 
            className={styles.serviceBox} 
            itemScope 
            itemType="https://schema.org/Service"
            role="listitem"
          >
            <div className={styles.serviceIcon}>
              <Image
                src={`/images/ourservice/${service.img}`}
                alt={`אייקון עבור שירות ${service.text}`}
                width={50}
                height={50}
              />
              <meta itemProp="image" content={`/images/ourservice/${service.img}`} />
            </div>
            <h4 itemProp="name">{service.text}</h4>
            <meta itemProp="serviceType" content={service.type} />
          </div>
        ))}
      </div>
    </section>
  );
}