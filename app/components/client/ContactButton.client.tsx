'use client';

import { ReactNode } from 'react';
import styles from "../../styles/Banner.module.css";

interface ContactButtonProps {
  children: ReactNode;
  className?: string; // אפשרות להוסיף קלאס נוסף
}

export default function ContactButton({ children, className }: ContactButtonProps) {
  const scrollToContactForm = (e: React.MouseEvent) => {
    e.preventDefault();
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
      contactForm.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start' // מוודא גלילה לתחילת הטופס
      });
      
      // התמקדות בטופס לאחר הגלילה (לנגישות)
      setTimeout(() => {
        const firstInput = contactForm.querySelector('input, textarea, button');
        if (firstInput && firstInput instanceof HTMLElement) {
          firstInput.focus();
        }
      }, 800); // זמן קצר לאחר סיום הגלילה
    }
  };

  // תמיכה במקלדת
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      scrollToContactForm(e as unknown as React.MouseEvent);
    }
  };

  return (
    <a 
      href="#contact-form" 
      className={`${styles.secondaryButton} ${className || ''}`}
      onClick={scrollToContactForm}
      onKeyDown={handleKeyDown}
      aria-label="מעבר לטופס יצירת קשר"
      title="צור קשר - מלא את הטופס ונחזור אליך בהקדם"
      rel="nofollow"
    >
      {children}
    </a>
  );
}