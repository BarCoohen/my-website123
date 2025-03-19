import styles from '../styles/FAQ.module.css';
import Script from 'next/script';

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQ() {
  const faqItems: FAQItem[] = [
    {
      question: 'כמה זמן לוקח לבנות אתר מקצועי?',
      answer: 'זמן הבנייה משתנה בהתאם למורכבות האתר. אתר תדמית בסיסי יכול לקחת 1-2 שבועות, ואתרים מורכבים (חנויות, מערכות ניהול תוכן) עשויים לקחת 2-8 שבועות.',
    },
    {
      question: 'איזה סוגי אתרים אתם בונים?',
      answer: 'אנו בונים אתרי תדמית, חנויות אונליין, אתרים מבוססי וורדפרס, אתרים מותאמים אישית, דפי נחיתה ועוד.',
    },
    {
      question: 'האם האתר יהיה מותאם למובייל?',
      answer: 'כן! כל האתרים שלנו רספונסיביים לחלוטין, מותאמים לכל סוגי המסכים – מחשבים, טאבלטים וסמארטפונים.',
    },
    {
      question: 'איך SEO עוזר לאתר שלי להופיע גבוה יותר בגוגל?',
      answer: 'SEO (אופטימיזציה למנועי חיפוש) משפר את דירוג האתר שלך בגוגל באמצעות שימוש נכון במילות מפתח, קישורים איכותיים, מבנה דפים תקין, מהירות אתר ועוד.',
    },
    {
      question: 'תוך כמה זמן אפשר לראות תוצאות מקידום אורגני (SEO)?',
      answer: 'SEO הוא תהליך שלוקח זמן – בדרך כלל רואים תוצאות משמעותיות לאחר 3-6 חודשים של עבודה עקבית.',
    },
    {
      question: 'האם כל אתר צריך SEO?',
      answer: 'כן! גם אם אתה לא משקיע בקידום אקטיבי, אתר ללא SEO בסיסי לא יקבל מספיק חשיפה בגוגל.',
    },
    {
      question: 'מה ההבדל בין SEO אורגני לפרסום ממומן בגוגל (Google Ads)?',
      answer: 'SEO אורגני עוזר לאתר שלך להופיע בתוצאות החיפוש ללא תשלום, לעומת פרסום ממומן (PPC) שבו אתה משלם לגוגל כדי להופיע בראש התוצאות.',
    },
    {
      question: 'האם אתם יוצרים עיצוב בהתאמה אישית או משתמשים בתבניות מוכנות?',
      answer: 'אנו מציעים שני סוגי עיצוב: <br> ✅ עיצוב בהתאמה אישית – כל אלמנט באתר נבנה בהתאם למיתוג שלך.<br> ✅ תבניות מוכנות עם התאמות – אופציה זולה ומהירה יותר.',
    },
    {
      question: 'איך לגרום לאתר שלי להיראות ייחודי?',
      answer: 'אנו מתאימים צבעים, פונטים, תמונות ואנימציות ייחודיות כדי לבדל את האתר שלך מהמתחרים.',
    },
    {
      question: 'האם אתם גם מעצבים לוגואים וחומרים גרפיים נוספים?',
      answer: 'כן! אנו מציעים שירותי עיצוב לוגואים, באנרים, פוסטים לרשתות חברתיות, עיצוב חומרים שיווקיים ועוד.',
    },
  ];

  // יצירת מבנה JSON-LD עבור מנועי חיפוש
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqItems.map((item) => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer.replace(/<br>/g, ' ').replace(/<\/?[^>]+(>|$)/g, '')
      }
    }))
  };

  return (
    <section 
      className={styles.faq}
      aria-labelledby="faq-heading"
      role="region"
    >
      {/* מידע מובנה עבור מנועי חיפוש */}
      <Script id="faq-schema" type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </Script>

      <h2 id="faq-heading" className={styles.faqTitle}>שאלות נפוצות</h2>
      <div className={styles.faqContainer} role="list">
        {faqItems.map((item, index) => (
          <details 
            key={index} 
            className={styles.faqItem}
            id={`faq-item-${index}`}
            role="listitem"
          >
            <summary 
              className={styles.faqQuestion}
              role="button" 
              aria-expanded="false"
              aria-controls={`faq-answer-${index}`}
              tabIndex={0}
            >
              {item.question}
              <span 
                className={styles.faqToggle}
                aria-hidden="true"
              >+</span>
            </summary>
            <div
              id={`faq-answer-${index}`}
              className={styles.faqAnswer}
              dangerouslySetInnerHTML={{ __html: item.answer }}
            ></div>
          </details>
        ))}
      </div>
    </section>
  );
}
