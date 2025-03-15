// components/Technologies.tsx
import Image from 'next/image';
import styles from '../styles/Technologies.module.css';

interface TechItem {
  src: string;
  label: string;
  title: string;
}

export default function Technologies() {
  // הגדרת המערך בתוך הקומפוננטה
  const arrayOfTechItems: TechItem[] = [
    // שורה 1 - Frontend
    { src: '/images/techonlogies/html.webp', label: 'HTML5', title: 'HTML5' },
    { src: '/images/techonlogies/text.webp', label: 'CSS3', title: 'CSS3' },
    { src: '/images/techonlogies/java-script.webp', label: 'JavaScript', title: 'JavaScript' },
    { src: '/images/techonlogies/physics.webp', label: 'React', title: 'React' },
    { src: '/images/techonlogies/document.webp', label: 'Vue.js', title: 'Vue.js' },
    { src: '/images/techonlogies/typescript.webp', label: 'TypeScript', title: 'TypeScript' },
  
    // שורה 2 - Backend
    { src: '/images/techonlogies/node-js.webp', label: 'Node.js', title: 'Node.js' },
    { src: '/images/techonlogies/php-programming-language.webp', label: 'PHP', title: 'PHP' },
    { src: '/images/techonlogies/icons8-mysql-512.webp', label: 'MySQL', title: 'MySQL' },
    { src: '/images/techonlogies/icons8-angular-512.webp', label: 'Angular', title: 'Angular' },
    { src: '/images/techonlogies/icons8-express-js-512.webp', label: 'Express.js', title: 'Express.js' },
    { src: '/images/techonlogies/icons8-redux-96.webp', label: 'Redux', title: 'Redux' },
  
    // שורה 3 - כלים נוספים
    { src: '/images/techonlogies/photoshop.webp', label: 'PhotoShop', title: 'PhotoShop' },
    { src: '/images/techonlogies/illustrator.webp', label: 'Illustrator', title: 'Illustrator' },
    { src: '/images/techonlogies/figma.webp', label: 'Figma', title: 'Figma' },
    { src: '/images/techonlogies/wordpress.webp', label: 'WordPress', title: 'WordPress' },
    { src: '/images/techonlogies/elementor.webp', label: 'Elementor', title: 'Elementor' },
    { src: '/images/techonlogies/shopify.webp', label: 'Shopify', title: 'Shopify' },
  ];
  

  return (
    <section className={styles.technologies}>
      <div className={styles.technologiesHeader}>
        <h2>הטכנולוגיות שלנו</h2>
        <p>אנו משתמשים בטכנולוגיות מתקדמות כדי לספק לכם את הפתרונות הטובים ביותר.</p>
      </div>

      <div className={styles.techGrid}>
        {arrayOfTechItems.map((item, index) => (
          <div key={index} className={styles.techItem}>
            <Image
              src={item.src}
              alt={item.title}
              width={50}
              height={50}
              className={styles.techIcon}
            />
            <div className={styles.techDesc}>{item.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

