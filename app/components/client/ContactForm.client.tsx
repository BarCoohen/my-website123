
"use client";

import React, { useState, useRef, ChangeEvent } from "react";
import styles from "../../styles/ContactForm.module.css";
import Script from "next/script";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const statusMessageRef = useRef<HTMLDivElement>(null);

  // Schema.org לטופס יצירת קשר
  const contactFormSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPoint",
    "contactType": "customer service",
    "availableLanguage": ["Hebrew", "English"]
  };

  // טיפול בקלט מספר טלפון והוספת מקף אוטומטי
  const handlePhoneInput = (e: ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, ''); // מסיר כל תו שאינו מספר

    if (value.startsWith('05')) {
      if (value.length > 3) {
        value = value.slice(0, 3) + '-' + value.slice(3);
      }
      value = value.slice(0, 11); // מגביל את האורך ל-11 תווים (כולל '-')
    } else {
      if (value.length > 2) {
        value = value.slice(0, 2) + '-' + value.slice(2);
      }
      value = value.slice(0, 11); // מגביל את האורך ל-11 תווים (כולל '-')
    }

    e.target.value = value;
  };

  const validateForm = (formData: FormData): boolean => {
    const errors: Record<string, string> = {};
    const name = formData.get("name") as string;
    const phone = formData.get("number") as string;
    
    if (!name || name.trim().length < 2) {
      errors.name = "נא להזין שם מלא";
    }
    else if (!/^[\u0590-\u05FF\sa-zA-Z\-\']+$/.test(name)) {
      errors.name = "השם יכול להכיל רק אותיות";
    }
    
    // בדיקת תקינות מספר טלפון (שתי תבניות אפשריות)
    const phonePattern1 = /^05\d{1}-\d{7}$/; // מתחיל ב-05
    const phonePattern2 = /^0\d{1}-\d{7,9}$/; // תבנית כללית
    
    if (!phone || (!phonePattern1.test(phone) && !phonePattern2.test(phone))) {
      errors.phone = "נא להזין מספר טלפון תקין";
    }
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    
    if (validateForm(formData)) {
      // כאן תוסיף את הלוגיקה לשליחת הטופס לשרת
      setSubmitted(true);
      // מיקוד על הודעת התודה עבור קוראי מסך
      setTimeout(() => {
        statusMessageRef.current?.focus();
      }, 100);
    }
  };
  // הוסף את הפונקציה הזו יחד עם שאר הפונקציות בקומפוננטה
  const handleNameInput = (e: ChangeEvent<HTMLInputElement>) => {
    // מסיר תווים שאינם אותיות עברית/אנגלית, רווחים, מקפים או גרשיים
    const filteredValue = e.target.value.replace(/[^\u0590-\u05FF\sa-zA-Z\-\']/g, '');
    e.target.value = filteredValue;
  };
  const handleBackToForm = () => {
    setSubmitted(false);
  };

  return (
    <section 
      id="contact-form" 
      className={styles["form-container"]} 
      aria-labelledby="contact-form-heading"
    >
      <Script id="contact-schema" type="application/ld+json">
        {JSON.stringify(contactFormSchema)}
      </Script>

      {!submitted ? (
        <div className={styles["form-container-div"]} id="contactFormContainer">
          <h2 id="contact-form-heading" className={styles.formTitle}>
            רוצים לשמוע עוד? השאירו פרטים ונחזור אליכם עם כל המידע!
          </h2>
          
          {/* הודעות שגיאה לקוראי מסך */}
          {Object.keys(formErrors).length > 0 && (
            <div 
              className="visually-hidden" 
              role="alert" 
              aria-live="assertive"
            >
              יש לתקן את השגיאות הבאות:
              <ul>
                {Object.entries(formErrors).map(([field, message]) => (
                  <li key={field}>{message}</li>
                ))}
              </ul>
            </div>
          )}
          
          <form
            id="contactForm"
            className={styles.contactForm}
            method="POST"
            onSubmit={handleSubmit}
            aria-describedby="form-description"
            noValidate
          >
            <div id="form-description" className="visually-hidden">
              טופס יצירת קשר לקבלת מידע נוסף. כל השדות המסומנים בכוכבית הם חובה.
            </div>
            
            <div className={styles["form-group-row"]}>
              <div className={styles.inputWrapper}>
                <label htmlFor="name" className="visually-hidden">שם מלא</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="שם:" 
                  autoComplete="name"
                  required
                  aria-required="true"
                  onInput={handleNameInput}
                  aria-invalid={!!formErrors.name}
                  aria-describedby={formErrors.name ? "name-error" : undefined}
                />
                {formErrors.name && (
                  <div id="name-error" className={styles.errorMessage}>
                    {formErrors.name}
                  </div>
                )}
              </div>
              
              <div className={styles.inputWrapper}>
                <label htmlFor="number" className="visually-hidden">מספר טלפון</label>
                <input
                  type="tel"
                  id="number"
                  name="number"
                  placeholder="פלאפון:"
                  autoComplete="tel"
                  required
                  aria-required="true"
                  dir="rtl"
                  onInput={handlePhoneInput}
                  aria-invalid={!!formErrors.phone}
                  aria-describedby={formErrors.phone ? "phone-error" : undefined}
                />
                {formErrors.phone && (
                  <div id="phone-error" className={styles.errorMessage}>
                    {formErrors.phone}
                  </div>
                )}
              </div>
              
              <div className={styles.inputWrapper}>
                <label htmlFor="email" className="visually-hidden">כתובת אימייל</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  autoComplete="email"
                  placeholder='דוא״ל: (לא חובה)'
                  aria-required="false"
                />
              </div>
            </div>
            
            <div className={styles["form-group"]}>
              <button 
                type="submit"
                aria-label="שלח טופס יצירת קשר"
              >
                שלח פרטים
              </button>
            </div>
          </form>
        </div>
      ) : (
        <div 
          className={styles.thankYouMessage}
          id="thankYouMessage"
          ref={statusMessageRef}
          tabIndex={-1}
          role="status"
          aria-live="polite"
        >
          <h2>
            תודה שפנית אלינו!
          </h2>
          <p>ההודעה שלך התקבלה בהצלחה. נחזור אליך בהקדם האפשרי.</p>
          <button 
            className={styles.backToFormButton} 
            id="backToFormButton"
            onClick={handleBackToForm}
            aria-label="חזרה לטופס יצירת קשר"
          >
            חזרה לטופס
          </button>
        </div>
      )}
      
      <style jsx>{`
        .visually-hidden {
          position: absolute;
          width: 1px;
          height: 1px;
          padding: 0;
          margin: -1px;
          overflow: hidden;
          clip: rect(0, 0, 0, 0);
          white-space: nowrap;
          border: 0;
        }
        
      `}</style>
    </section>
  );
}