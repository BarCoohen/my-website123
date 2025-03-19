"use client";
import { useEffect, useState, useRef } from 'react';
import styles from '../../styles/WebsiteTypes.module.css';

type SectionId = 'landing-page' | 'business-page' | 'ecommerce-page' | 'custom-page';

export default function InteractiveNav() {
  const [activeSection, setActiveSection] = useState<SectionId>('landing-page');

  const landingPageRef = useRef<HTMLElement | null>(null);
  const businessPageRef = useRef<HTMLElement | null>(null);
  const ecommercePageRef = useRef<HTMLElement | null>(null);
  const customPageRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id as SectionId);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, options);

    const landingElem = document.getElementById('landing-page');
    const businessElem = document.getElementById('business-page');
    const ecommerceElem = document.getElementById('ecommerce-page');
    const customElem = document.getElementById('custom-page');

    if (landingElem) observer.observe(landingElem);
    if (businessElem) observer.observe(businessElem);
    if (ecommerceElem) observer.observe(ecommerceElem);
    if (customElem) observer.observe(customElem);

    return () => {
      observer.disconnect();
    };
  }, []);

  const isActive = (sectionId: SectionId) => activeSection === sectionId;

  return (
    <nav className={styles.sideNavigation} aria-label="ניווט לעבור בין סוגי אתרים">
      <ul>
        <li>
          <a 
            href="#landing-page" 
            className={isActive('landing-page') ? styles.active : ''} 
            aria-current={isActive('landing-page') ? 'page' : undefined}
          >
            דף נחיתה
          </a>
        </li>
        <li>
          <a 
            href="#business-page" 
            className={isActive('business-page') ? styles.active : ''} 
            aria-current={isActive('business-page') ? 'page' : undefined}
          >
            אתר תדמית
          </a>
        </li>
        <li>
          <a 
            href="#ecommerce-page" 
            className={isActive('ecommerce-page') ? styles.active : ''} 
            aria-current={isActive('ecommerce-page') ? 'page' : undefined}
          >
            חנות מסחר מקוון
          </a>
        </li>
        <li>
          <a 
            href="#custom-page" 
            className={isActive('custom-page') ? styles.active : ''} 
            aria-current={isActive('custom-page') ? 'page' : undefined}
          >
            אתר מותאם אישית
          </a>
        </li>
      </ul>
    </nav>
  );
}
