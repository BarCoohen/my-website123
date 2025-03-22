import Animation from "./client/Animation.client";
import styles from "../styles/Banner.module.css";
import SiteNameLogo from "./inside/SiteNameLogo";
import ContactButton from "./client/ContactButton.client";

export default function Banner() {
  return (
    <section 
      className={styles.banner}
      aria-labelledby="main-heading"
    >
      <div 
        className={styles.bannerContent}
      >
        <SiteNameLogo />
        <h1 
          id="main-heading"
        >
          בונים אתרים מעצבים חוויות ויוצרים תוצאות.
        </h1>
        <h2 
        >
          פיתוח אתרים מקצועיים, עיצוב שמשאיר רושם וקידום שמביא לקוחות.
        </h2>
        <div 
          className={styles.buttonContainer}
          role="group"
          aria-label="אפשרויות יצירת קשר"
        >
          <a 
            href="tel:0585209911" 
            className={styles.primaryButton}
            aria-label="התקשר אלינו עכשיו: 058-520-9911"
            title="לחץ להתקשרות מיידית"
          >
            <span>058-5209911</span>
          </a>
          <ContactButton>צרו קשר</ContactButton>
        </div>
      </div>

      <div 
        className={styles.animationContainer}
        role="presentation" 
        aria-hidden="false"
      >
        <div className="animation-wrapper" aria-label="אנימציית בניית אתרים">
          <Animation />
        </div>
      </div>
    </section>
  );
}




