// components/Technologies.tsx
import Image from 'next/image';
import styles from '../styles/Technologies.module.css';
import Script from 'next/script';

interface TechItem {
  src: string;
  label: string;
  title: string;
  category?: string;
}

export default function Technologies() {
  // הגדרת המערך בתוך הקומפוננטה עם קטגוריות
  const arrayOfTechItems: TechItem[] = [
    // שורה 1 - Frontend
    { src: '/images/techonlogies/html.webp', label: 'HTML5', title: 'HTML5', category: 'Frontend' },
    { src: '/images/techonlogies/text.webp', label: 'CSS3', title: 'CSS3', category: 'Frontend' },
    { src: '/images/techonlogies/java-script.webp', label: 'JavaScript', title: 'JavaScript', category: 'Frontend' },
    { src: '/images/techonlogies/physics.webp', label: 'React', title: 'React', category: 'Frontend' },
    { src: '/images/techonlogies/document.webp', label: 'Vue.js', title: 'Vue.js', category: 'Frontend' },
    { src: '/images/techonlogies/typescript.webp', label: 'TypeScript', title: 'TypeScript', category: 'Frontend' },
  
    // שורה 2 - Backend
    { src: '/images/techonlogies/node-js.webp', label: 'Node.js', title: 'Node.js', category: 'Backend' },
    { src: '/images/techonlogies/php-programming-language.webp', label: 'PHP', title: 'PHP', category: 'Backend' },
    { src: '/images/techonlogies/icons8-mysql-512.webp', label: 'MySQL', title: 'MySQL', category: 'Backend' },
    { src: '/images/techonlogies/icons8-angular-512.webp', label: 'Angular', title: 'Angular', category: 'Backend' },
    { src: '/images/techonlogies/icons8-express-js-512.webp', label: 'Express.js', title: 'Express.js', category: 'Backend' },
    { src: '/images/techonlogies/icons8-redux-96.webp', label: 'Redux', title: 'Redux', category: 'Backend' },
  
    // שורה 3 - כלים נוספים
    { src: '/images/techonlogies/photoshop.webp', label: 'PhotoShop', title: 'PhotoShop', category: 'Design & CMS' },
    { src: '/images/techonlogies/illustrator.webp', label: 'Illustrator', title: 'Illustrator', category: 'Design & CMS' },
    { src: '/images/techonlogies/figma.webp', label: 'Figma', title: 'Figma', category: 'Design & CMS' },
    { src: '/images/techonlogies/wordpress.webp', label: 'WordPress', title: 'WordPress', category: 'Design & CMS' },
    { src: '/images/techonlogies/elementor.webp', label: 'Elementor', title: 'Elementor', category: 'Design & CMS' },
    { src: '/images/techonlogies/shopify.webp', label: 'Shopify', title: 'Shopify', category: 'Design & CMS' },
  ];
  
  // יצירת schema.org עבור רשימת הטכנולוגיות
  const techSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": arrayOfTechItems.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.title,
      "description": `${item.title} - ${item.category || 'Web Technology'}`
    }))
  };

  return (
    <section 
      className={styles.technologies}
      aria-labelledby="tech-heading"
      role="region"
    >
      <Script id="tech-schema" type="application/ld+json">
        {JSON.stringify(techSchema)}
      </Script>

      <div className={styles.technologiesHeader}>
        <h2 id="tech-heading">הטכנולוגיות שלנו</h2>
        <p>אנו משתמשים בטכנולוגיות מתקדמות כדי לספק לכם את הפתרונות הטובים ביותר.</p>
      </div>

      {/* החלוקה לקטגוריות נשמרת בצורה סמנטית אך ויזואלית לא משתנה */}
      <div 
        className={styles.techGrid}
        role="list"
        aria-label="רשימת טכנולוגיות"
      >
        {arrayOfTechItems.map((item, index) => (
          <div 
            key={index} 
            className={styles.techItem}
            role="listitem"
            aria-label={`${item.title} - ${item.category || 'טכנולוגיית פיתוח'}`}
            tabIndex={0} // מאפשר מיקוד מקלדת
          >
            <Image
              src={item.src}
              alt={`לוגו ${item.title}`} // תיאור אלט מפורט יותר
              width={50}
              height={50}
              className={styles.techIcon}
              loading="lazy" // טעינה לזיה משפרת ביצועים
            />
            <div className={styles.techDesc}>{item.label}</div>
          </div>
        ))}
      </div>

      {/* הוספת מידע מוסתר למנועי חיפוש על קטגוריות */}
      <div className={styles.visuallyHidden}>
        <h3>קטגוריות טכנולוגיות</h3>
        <dl>
          <dt>Frontend</dt>
          <dd>HTML5, CSS3, JavaScript, React, Vue.js, TypeScript</dd>
          <dt>Backend</dt>
          <dd>Node.js, PHP, MySQL, Angular, Express.js, Redux</dd>
          <dt>Design & CMS</dt>
          <dd>PhotoShop, Illustrator, Figma, WordPress, Elementor, Shopify</dd>
        </dl>
      </div>
    </section>
  );
}

