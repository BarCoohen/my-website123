

import styles from "../styles/WhyChooseUs.module.css";

export default function WhyChooseUs() {
  return (
    <section 
      className={styles.whyChooseUs}
      aria-labelledby="why-choose-us-title"
      itemScope
      itemType="https://schema.org/Service"
    >
      <h2 
        id="why-choose-us-title" 
        className={styles.sectionTitle}
        itemProp="name"
      >
        למה לבחור בנו?
      </h2>
      
      <div 
        className={styles.sectionContent}
        itemProp="description"
      >
        <p className={styles.introText}>
          חברתנו היא השותף הדיגיטלי מהמובילים בישראל בתחום <span itemProp="serviceType">בניית אתרים</span>, 
          <span itemProp="serviceType">עיצוב</span> ו<span itemProp="serviceType">קידום אורגני</span>. 
          עם צוות מקצועי, יצירתי וקשוב, ובעלי ניסיון רב, אנו מחויבים ליצור עבורכם נוכחות אינטרנטית שאין לה תחרות.
        </p>

        <p className={styles.emphasisText}>
          אבל בואו נהיה כנים – כל אחד יכול להגיד שהוא &quot;הכי טוב&quot;, אבל אנחנו כאן כדי להוכיח את זה.
          אנחנו לא רק בונים אתרים – אנחנו יוצרים חוויות דיגיטליות אמיתיות שמבליטות אתכם מול המתחרים.
        </p>

        <ul className={styles.benefitsList} aria-label="היתרונות שלנו">
          <li className={styles.benefitItem}>
            <span className={styles.checkmark} aria-hidden="true">✓</span>
            <span>אתר מהיר יותר ממכונית מרוץ</span>
            <span className={styles.visuallyHidden}>(מהירות טעינה גבוהה)</span>
            <span className={styles.emoji} role="img" aria-label="מהירות">💨🏎️</span>
          </li>
          <li className={styles.benefitItem}>
            <span className={styles.checkmark} aria-hidden="true">✓</span>
            <span>אתר יפה יותר מפרסומת לקפה איטלקי</span>
            <span className={styles.visuallyHidden}>(עיצוב מרהיב)</span>
            <span className={styles.emoji} role="img" aria-label="איכותי ומושקע">☕✨</span>
          </li>
        </ul>

        <p className={styles.specializationText}>
          אנו מתמחים ב<strong itemProp="hasOfferCatalog">פיתוח אתרים ייחודיים</strong> המותאמים לצרכים המדויקים שלכם, 
          עם <strong>עיצובים מודרניים</strong> שמבליטים את זהות המותג 
          ו<strong>קידום אורגני</strong> שמביא תנועה איכותית ולא סתם קליקים רנדומליים.
        </p>

        <p className={styles.processText}>
          בכל שלב – מאפיון ועד להשקה – אנחנו כאן ללוות אתכם אישית.
          בלי חפירות טכניות, בלי הבטחות סרק – רק תוצאות אמיתיות שיביאו לכם לקוחות.
        </p>

        <p className={styles.callToActionText}>
            אז למה אתם מחכים? צרו עמנו קשר עוד היום לתיאום {' '}  
          <span itemProp="offers" itemScope itemType="https://schema.org/Offer">
            <span itemProp="name">פגישת ייעוץ ואיפיון ללא התחייבות</span>
            <meta itemProp="price" content="0" />
            <meta itemProp="priceCurrency" content="ILS" />
          </span>, 
          ונגלה יחד איך להפוך את הרעיונות שלכם למציאות דיגיטלית מנצחת.
        </p>
      </div>

      {/* מידע מובנה נוסף - מוסתר ויזואלית */}
      <div className={styles.visuallyHidden} aria-hidden="true">
        <meta itemProp="provider" content="SitePromotion" />
        <meta itemProp="areaServed" content="ישראל" />
        <div itemProp="review" itemScope itemType="https://schema.org/Review">
          <meta itemProp="reviewRating" content="5" />
          <meta itemProp="author" content="לקוחות מרוצים" />
        </div>
        <meta itemProp="audience" content="עסקים גדולים בנונים וקטנים" /> 
      </div>
    </section>
  );
}