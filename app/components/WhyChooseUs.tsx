

import styles from "../styles/WhyChooseUs.module.css";

export default function WhyChooseUs() {
  return (
    <section 
      className={styles.whyChooseUs}
      aria-labelledby="why-choose-us-title"
    >
      <h2 
        id="why-choose-us-title" 
        className={styles.sectionTitle}

      >
        למה לבחור בנו?
      </h2>
      
      <div 
        className={styles.sectionContent}
      >
        <p className={styles.introText}>
          חברתנו היא השותף הדיגיטלי מהמובילים בישראל בתחום <span>בניית אתרים</span>, 
          <span>עיצוב</span> ו<span >קידום אורגני</span>. 
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
          אנו מתמחים ב<strong>פיתוח אתרים ייחודיים</strong> המותאמים לצרכים המדויקים שלכם, 
          עם <strong>עיצובים מודרניים</strong> שמבליטים את זהות המותג 
          ו<strong>קידום אורגני</strong> שמביא תנועה איכותית ולא סתם קליקים רנדומליים.
        </p>

        <p className={styles.processText}>
          בכל שלב – מאפיון ועד להשקה – אנחנו כאן ללוות אתכם אישית.
          בלי חפירות טכניות, בלי הבטחות סרק – רק תוצאות אמיתיות שיביאו לכם לקוחות.
        </p>

        <p className={styles.callToActionText}>
            אז למה אתם מחכים? צרו עמנו קשר עוד היום לתיאום {' '}  
          <span >
            <span >פגישת ייעוץ ואיפיון ללא התחייבות</span>
          </span>, 
          ונגלה יחד איך להפוך את הרעיונות שלכם למציאות דיגיטלית מנצחת.
        </p>
      </div>
    </section>
  );
}