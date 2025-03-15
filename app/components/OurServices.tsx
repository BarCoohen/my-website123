

import styles from "../styles/OurServices.module.css";
import Image from "next/image";

export default function OurServices() {
  return (
    <section className={styles.ourServices}>
      <h2 className={styles.ourServicesTitle}>השירותים שלנו</h2>

      {/* החלק העליון - שירותים מרכזיים */}
      <div className={styles.features}>
        <div className={styles.feature}>
          <div className={styles.imageWrapper}>
            <Image
              src="/images/ourservice/בניית אתרים.webp"
              alt="בניית אתרים"
              className={styles.featureIcon}
              width={1000} 
              height={500}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              priority
            />
          </div>
          <h3>בניית אתרים</h3>
          <p>
            בניית אתרים מקצועית, הנעשית על ידנו באופן אישי ובהתאמה מדויקת לצרכים ולמטרות של העסק שלך. תהליך העבודה כולל ליווי אישי, הקשבה מלאה לדרישות ולחזון שלך, והקפדה על בניית אתר מודרני, איכותי, ונוח לשימוש. המטרה שלנו היא לייצר עבורך נוכחות דיגיטלית חזקה שתמשוך את הלקוחות המתאימים ותאפשר לך להתקדם ולהצליח ברשת.
          </p>
          <a href="#" className={styles.featureButton}>למידע נוסף</a>
          
        </div>

        <div className={styles.feature}>
          <div className={styles.imageWrapper}>
            <Image
              src="/images/ourservice/Seoקידום.webp"
              alt="קידום בגוגל"
              className={styles.featureIcon}
              width={1000} 
              height={500}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              priority
            />
          </div>
          <h3>קידום אורגני בגוגל SEO</h3>
          <p>
            קידום אתרים איכותי שמטרתו להביא אותך למקומות הראשונים בגוגל. אני מקדם את האתר שלך באופן אישי, בעזרת מחקר מדויק והבנת הקהל שלך, כדי להבטיח שהלקוחות הנכונים ימצאו אותך בקלות. תהליך הקידום נעשה בשקיפות מלאה, עם דוחות ברורים ומעקב שוטף אחר התוצאות, כך שתמיד תדע איפה האתר שלך עומד ומה השלב הבא בדרך להצלחה
          </p>
          <a href="#" className={styles.featureButton}>למידע נוסף</a>
        </div>

        <div className={styles.feature}>
          <div className={styles.imageWrapper}>
            <Image
              src="/images/ourservice/עיצוב גרפי.webp"
              alt="עיצוב גרפי"
              className={styles.featureIcon}
              width={1000} 
              height={500}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              priority
            />
          </div>
          <h3>עיצוב גרפי</h3>
          <p>
            עיצוב גרפי יצירתי ומקצועי בגישה אישית וידידותית, המותאם במיוחד לעסק שלך. אני אצור עבורך עיצוב ייחודי, מקורי, ובעל אופי שישקף בדיוק את מה שהעסק שלך מייצג. יחד נבחר את הסגנון, הצבעים והאווירה המתאימים, כך שהלקוחות שלך יתחברו למסר ולערכים של העסק כבר מהרגע הראשון.
          </p>
          <a href="#" className={styles.featureButton}>למידע נוסף</a>
        </div>
      </div>

      {/* החלק התחתון - קופסאות שירותים נוספים */}
      <div className={styles.serviceBoxes}>
        {[
          { img: "icons8-online-maintenance-portal-50.webp", text: "תחזוקת אתרים שוטפת" },
          { img: "icons8-website-50.webp", text: "ניהול ואחסון אתרים" },
          { img: "icons8-content-writing-48.webp", text: "ניהול תוכן וכתיבת תוכן" },
          { img: "icons8-branding-48.webp", text: "מיתוג עסקי ודיגיטלי מלא" },
          { img: "icons8-software-development-50.webp", text: "פיתוח תוכנות בהתאמה אישית" },
          { img: "icons8-automation-50.webp", text: "אוטומציות עסקיות" },
        ].map((service, index) => (
          <div key={index} className={styles.serviceBox}>
            <div className={styles.serviceIcon}>
              <Image
                src={`/images/ourservice/${service.img}`}
                alt={service.text}
                width={50}
                height={50}
              />
            </div>
            <h4>{service.text}</h4>
          </div>
        ))}
      </div>
    </section>
  );
}
