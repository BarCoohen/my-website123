import React, { ReactNode } from 'react';
import styles from '../styles/PageTemplate.module.css';
import SiteNameLogo from "./inside/SiteNameLogo";
export { styles };

interface PageTemplateProps {
  title: string;
  subtitle?: string;
  bannerImage?: string;
  children: ReactNode;
  className?: string;
  imageAlt?: string; // תיאור תמונת הבאנר לנגישות
}

export default function PageTemplate({
  title,
  subtitle,
  bannerImage,
  children,
  className = '',
  imageAlt = 'תמונת באנר', // ערך ברירת מחדל
}: PageTemplateProps) {
  return (
    <>
      <div 
        className={`${styles.pageContainer} ${className}`}
        itemScope 
        itemType="https://schema.org/WebPage"
      >
        {/* באנר עם תמונת רקע וכותרות */}
        <header 
          className={styles.pageBanner}
          style={bannerImage ? { backgroundImage: `url(${bannerImage})` } : {}}
          role="banner"
          aria-labelledby="page-title"
        >
          {/* הוספת תיאור חלופי לתמונת הרקע עבור קוראי מסך */}
          {bannerImage && (
           <span className={styles.srOnly}>
            {imageAlt}
           </span>
          )}
          
          <div className={styles.bannerContent}>
            <SiteNameLogo />
            <h1 id="page-title" className={styles.pageTitle} itemProp="headline">{title}</h1>
            {subtitle && (
              <p 
                className={styles.pageSubtitle} 
                itemProp="description"
                aria-label="תקציר העמוד"
              >
                {subtitle}
              </p>
            )}
          </div>
        </header>

        {/* תוכן הדף */}
        <main className={styles.pageContent} id="main-content" role="main">
          {children}
        </main>
      </div>
    </>
  );
}