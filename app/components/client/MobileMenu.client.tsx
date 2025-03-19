'use client';

import React, { useState, useEffect, useRef } from 'react';
import styles from '../../styles/stylesinside/MobileMenu.module.css';
import Link from 'next/link';

interface MenuItem {
  href: string;
  label: string;
  current?: boolean;
  children?: MenuItem[];
}

interface MobileMenuProps {
  menuItems: MenuItem[];
}

export default function MobileMenu({ menuItems }: MobileMenuProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openSubMenus, setOpenSubMenus] = useState<string[]>([]);
  const menuRef = useRef<HTMLUListElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const firstItemRef = useRef<HTMLAnchorElement>(null);

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  const toggleSubMenu = (label: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setOpenSubMenus(prev => {
      if (prev.includes(label)) {
        return prev.filter(item => item !== label);
      } else {
        return [...prev, label];
      }
    });
  };

  // מעבר בתפריט באמצעות מקלדת
  const handleKeyDown = (e: React.KeyboardEvent, label?: string) => {
    if (e.key === 'Escape') {
      setIsMenuOpen(false);
      buttonRef.current?.focus();
    }
    if (label && (e.key === 'Enter' || e.key === ' ')) {
      e.preventDefault();
      toggleSubMenu(label, e as unknown as React.MouseEvent);
    }
  };

  // סגירת תפריט בלחיצה מחוץ לאזור התפריט
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        menuRef.current &&
        event.target instanceof Node &&
        !menuRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsMenuOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // מעבר פוקוס לפריט ראשון בתפריט כשהוא נפתח
  useEffect(() => {
    if (isMenuOpen && firstItemRef.current) {
      setTimeout(() => {
        firstItemRef.current?.focus();
      }, 100);
    }
  }, [isMenuOpen]);

  return (
    <div className={styles.mobileMenuContainer}>
      <button
        ref={buttonRef}
        className={styles.mobileMenuButton}
        aria-label={isMenuOpen ? "סגור תפריט ניווט" : "פתח תפריט ניווט"}
        aria-expanded={isMenuOpen}
        aria-controls="mobile-menu"
        onClick={toggleMenu}
        onKeyDown={(e) => handleKeyDown(e)}
        type="button"
      >
        <span
          aria-hidden="true"
          className={`${styles.hamburgerIcon} ${isMenuOpen ? styles.open : ''}`}
        >
          <span></span>
          <span></span>
          <span></span>
        </span>
      </button>

      {isMenuOpen && (
        <>
          <div 
            className={styles.menuBackdrop} 
            onClick={() => setIsMenuOpen(false)} 
            aria-hidden="true" 
          />

          <nav aria-label="תפריט ניווט בגרסת מובייל" role="navigation">
            <ul
              id="mobile-menu"
              className={styles.mobileNavLinks}
              role="menubar"
              aria-orientation="vertical"
              ref={menuRef}
            >
              {menuItems.map((item, index) => (
                <li key={index} role="none">
                  {item.children ? (
                    <>
                      <div
                        className={styles.submenuHeader}
                        onClick={(e) => toggleSubMenu(item.label, e)}
                        onKeyDown={(e) => handleKeyDown(e, item.label)}
                        tabIndex={0}
                        role="button"
                        aria-haspopup="true"
                        aria-expanded={openSubMenus.includes(item.label)}
                        aria-controls={`submenu-${index}`}
                      >
                        <span
                          className={styles.submenuLabel}
                          aria-current={item.current ? "page" : undefined}
                        >
                          {item.label}
                        </span>
                        <button
                          type="button"
                          aria-expanded={openSubMenus.includes(item.label)}
                          aria-label={`${openSubMenus.includes(item.label) ? "סגור" : "פתח"} תת-תפריט ${item.label}`}
                          className={styles.submenuToggle}
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleSubMenu(item.label, e);
                          }}
                        >
                          <span className={`${styles.arrow} ${openSubMenus.includes(item.label) ? styles.arrowUp : ''}`} aria-hidden="true">
                            ▼
                          </span>
                        </button>
                      </div>

                      <ul 
                        id={`submenu-${index}`}
                        className={`${styles.submenu} ${openSubMenus.includes(item.label) ? styles.submenuOpen : ''}`}
                        role="menu"
                        aria-label={`תת-תפריט ${item.label}`}
                        aria-hidden={!openSubMenus.includes(item.label)}
                      >
                        {item.children.map((subItem, subIndex) => (
                          <li key={subIndex} role="none">
                            <Link href={subItem.href} passHref legacyBehavior>
                              <a
                                role="menuitem"
                                title={`מידע על ${subItem.label} - סוגים של בניית אתרים`}
                                aria-current={subItem.current ? "page" : undefined}
                                ref={index === 0 && subIndex === 0 ? firstItemRef : null}
                              >
                                {subItem.label}
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
                        title={`מידע על ${item.label} - בניית אתרים מקצועיים`}
                        aria-current={item.current ? "page" : undefined}
                        ref={index === 0 ? firstItemRef : null}
                      >
                        {item.label}
                      </a>
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </>
      )}
    </div>
  );
}
