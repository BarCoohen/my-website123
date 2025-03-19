import styles from '../styles/Navbar.module.css';
import MobileMenu from './client/MobileMenu.client';
import Link from 'next/link';

// הגדרת טיפוס לפריט תפריט
interface MenuItem {
  href: string;
  label: string;
  current?: boolean;
  children?: MenuItem[];
}

export default function Navbar() {
    const menuItems = [
        { href: "/", label: "ראשי", current: false },
        { href: "/web-development", label: "בניית אתרים", current: false },
        { 
            href: "/web-types", 
            label: "סוגי אתרים",
            isCategory: true, // הוספת מאפיין שמציין שזה רק קטגוריה
            children: [
                { href: "/web-types/landing-page", label: "דף נחיתה" },
                { href: "/web-types/business-site", label: "אתר תדמית" },
                { href: "/web-types/ecommerce", label: "חנות אינטרנטית" },
                { href: "/web-types/custom", label: "אתר מותאם אישית" }
            ]
        },  
        { href: "/seo", label: "קידום אורגני SEO", current: false },
        { href: "/design", label: "עיצוב גרפי", current: false },
        { href: "/about", label: "אודות", current: false }
    ];
    return (
      <>
        <a href="#main-content" className={styles.skipLink}>
        דלג לתוכן העמוד
        </a>

        <nav className={styles.navbar} role="navigation" aria-label="תפריט ראשי">
            {/* שימוש ב-address במקום div לשיפור סמנטיקה */}
            <address className={styles.emptySpace}>
                {/* לא משנים קישור טלפון כי זה לא ניווט פנימי */}
                <a 
                    href="tel:0585209911" 
                    className={styles.phoneLink}
                    aria-label="התקשר אלינו בטלפון 058-520-9911"
                    title="התקשר אלינו"
                >
                    <span className={styles.phoneNumber}>058-520-9911</span>
                </a>
            </address>
            <MobileMenu menuItems={menuItems} />
            <ul className={styles.navLinks} role="menubar" aria-label="תפריט ניווט ראשי">
                {menuItems.map((item) => (
                    <li key={item.href} role="none" className={item.isCategory ? styles.hasDropdown : ''}>
                        {item.isCategory ? (
                            <>
                                <input 
                                    type="checkbox" 
                                    id="web-dropdown-toggle"
                                    className={styles.dropdownCheckbox}
                                    aria-hidden="true" // הצ'קבוקס מוסתר ומשמש רק לפונקציונליות
                                />
                                <label
                                    htmlFor="web-dropdown-toggle"
                                    className={styles.dropdownTrigger}
                                    role="menuitem"
                                    aria-haspopup="true"
                                    aria-expanded="false" // מצב התחלתי סגור
                                    aria-controls="web-types-menu" // קושר לתפריט
                                    aria-label="תפריט סוגי אתרים"
                                    tabIndex={0} // מאפשר פוקוס מקלדת
                                >
                                    {item.label} <span className={styles.dropdownArrow} aria-hidden="true">▼</span>
                                </label>
                                <label htmlFor="web-dropdown-toggle" className={styles.dropdownBackdrop}></label>
                                <ul className={styles.dropdown} role="menu" id="web-types-menu" aria-label="תפריט סוגי אתרים">
                                    {item.children?.map((child) => (
                                        <li key={child.href} role="none">
                                            <Link href={child.href} passHref legacyBehavior>
                                                <a 
                                                    role="menuitem" 
                                                    aria-label={child.label}
                                                    title={`מעבר לדף ${child.label}`}
                                                >
                                                    {child.label}
                                                </a>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </>
                        ) : (
                            <Link href={item.href} passHref legacyBehavior>
                                <a 
                                    role="menuitem" 
                                    aria-current={item.current ? "page" : undefined}
                                    title={`מעבר לדף ${item.label}`}
                                >
                                    {item.label}
                                </a>
                            </Link>
                        )}
                    </li>
                ))}
            </ul>
                        
            <Link href="/" passHref legacyBehavior>
                <a 
                    className={styles.logoContainer} 
                    aria-label="לוגו האתר - מעבר לדף הבית"
                    title="מעבר לדף הבית"
                >
                    <span className={styles.logoP} aria-hidden="true">P</span>
                    <span className={styles.logoS} aria-hidden="true">S</span>
                </a>
            </Link>
        </nav>
      </>
    );
}