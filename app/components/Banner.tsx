import Animation from "./client/Animation.client";
import styles from "../styles/Banner.module.css";
import SiteNameLogo from "./inside/SiteNameLogo";
import ContactButton from "./client/ContactButton.client";

export default function Banner() {
  return (
    <section 
      className={styles.banner}
      aria-labelledby="main-heading"
      itemScope
      itemType="https://schema.org/WebPageElement"
    >
      <div 
        className={styles.bannerContent}
        itemScope
        itemType="https://schema.org/WebSite"
      >
        <SiteNameLogo />
        <h1 
          id="main-heading"
          itemProp="headline"
        >
          בונים אתרים מעצבים חוויות ויוצרים תוצאות.
        </h1>
        <h2 
          itemProp="description"
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
            itemProp="contactPoint" 
            itemScope 
            itemType="https://schema.org/ContactPoint"
          >
            <meta itemProp="contactType" content="customer service" />
            <meta itemProp="availableLanguage" content="Hebrew" />
            <span itemProp="telephone">058-5209911</span>
          </a>
          <ContactButton>צרו קשר</ContactButton>
        </div>
        <meta itemProp="url" content="https://www.sitepromotion.co.il" />
        <meta itemProp="areaServed" content="ישראל" />
        <div itemProp="offers" itemScope itemType="https://schema.org/Offer">
          <meta itemProp="name" content="בניית אתרים דף נחיתה מקצועי קידום אתרים אורגני" />
          <meta itemProp="priceCurrency" content="ILS" />
          <link itemProp="url" href="https://www.sitepromotion.co.il/" />
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




