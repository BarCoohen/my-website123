"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import styles from "../../styles/Stages.module.css";
import { useState } from "react";
import Script from 'next/script';

// ייבוא הסגנונות של swiper
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// הגדרת טיפוס לסליידים
interface SlideContent {
  number: number;
  title: string;
  content: React.ReactNode;
}

// הגדרת props לרכיב
interface StagesSliderProps {
  slides: SlideContent[];
  sectionTitle?: string;
}

export default function StagesSlider({ slides, sectionTitle = "שלבי התהליך" }: StagesSliderProps) {
  // מעקב אחר הסלייד האקטיבי עבור אפקט hover
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  
  // הגדרת JSON-LD לתהליך עם שלבים (HowTo Schema)
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": sectionTitle,
    "description": `תהליך ${sectionTitle} בצעדים פשוטים`,
    "step": slides.map(slide => ({
      "@type": "HowToStep",
      "position": slide.number,
      "name": slide.title,
      "itemListElement": {
        "@type": "HowToDirection",
        "text": typeof slide.content === 'string' ? slide.content : `שלב ${slide.number} בתהליך`
      }
    }))
  };

  return (
    <>
      {/* Schema.org מידע מובנה למנועי חיפוש ללא השפעה על העיצוב */}
      <Script id="stages-schema" type="application/ld+json">
        {JSON.stringify(schemaData)}
      </Script>
      
      {/* אותו מבנה בדיוק כמו המקורי, רק עם תכונות ARIA */}
      <div 
        className={`${styles.stagesContent} stage-slider-container`}
        role="region" 
        aria-label={sectionTitle}
      >
        <Swiper
          keyboard={{
            enabled: true,
            onlyInViewport: true
          }}
          modules={[Navigation, Pagination]}
          navigation={true}
          pagination={{ 
            clickable: true,
            // שיפור נגישות לכפתורי העימוד
            renderBullet: (index, className) => {
              return `<span class="${className}" 
                        role="button" 
                        tabindex="0" 
                        aria-label="עבור לשלב ${index + 1}">
                      </span>`;
            }
          }}
          spaceBetween={10}
          slidesPerView="auto"
          initialSlide={0}
          loop={false}
          grabCursor={true}
          slidesOffsetBefore={0}
          slidesOffsetAfter={0}
          watchSlidesProgress={true}
          onSlideChange={(swiper) => {
            setActiveIndex(swiper.activeIndex);
          }}
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 20 },
            640: { slidesPerView: 2, spaceBetween: 20 },
            850: { slidesPerView: 3, spaceBetween: 25 },
            1100: { slidesPerView: 4, spaceBetween: 25 },
            1370: { slidesPerView: 5, spaceBetween: 25 }
          }}
          className="stages-swiper"
          // תכונות ARIA לקרוסלה
          aria-roledescription="קרוסלת שלבים"
          a11y={{
            enabled: true,
            prevSlideMessage: 'שלב קודם',
            nextSlideMessage: 'שלב הבא',
            firstSlideMessage: 'זהו השלב הראשון',
            lastSlideMessage: 'זהו השלב האחרון',
            paginationBulletMessage: 'עבור לשלב {{index}}'
          }}
        >
          {slides.map((slide, index) => (
            <SwiperSlide 
              key={index}
              aria-roledescription="שקופית"
              aria-label={`שלב ${slide.number}: ${slide.title}`}
            >
              <article 
                className={styles.stages}
                style={{ margin: "15px" }}
                aria-labelledby={`stage-title-${index}`}
                tabIndex={activeIndex === index ? 0 : -1}
              >
                <div className={styles.stepNumber} aria-hidden="true">{slide.number}</div>
                <h3 id={`stage-title-${index}`}>{slide.title}</h3>
                <div className={styles.content}>{slide.content}</div>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
        <div 
          aria-live="polite" 
          className="visually-hidden" 
          aria-atomic="true"
        >
          {activeIndex !== null ? `הוצג שלב ${slides[activeIndex]?.number}: ${slides[activeIndex]?.title}` : ''}
        </div>
        <div className="visually-hidden">
          <p>תהליך {sectionTitle} כולל את השלבים הבאים:</p>
          <ol>
            {slides.map(slide => (
              <li key={slide.number}>
                <strong>{slide.title}</strong>: 
                {typeof slide.content === 'string' ? slide.content : `שלב ${slide.number} בתהליך`}
              </li>
            ))}
          </ol>
        </div>

        {/* אותו CSS בדיוק */}
        <style jsx global>{`
          .stages-swiper {
            padding: 20px 0;
            width: 100%;
          }
          
          .stages-swiper .swiper-slide {
            transition: all 0.3s ease;
          }
          
          .stages-swiper .swiper-slide:hover {
            z-index: 10;
            transform: translateY(-10px);
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
          } 
          
          @media (max-width: 640px) {
            .stages-swiper .swiper-wrapper {
              padding-right: calc(144px - (640px - 100vw) / 2); 
            }
          }
          
          @media (max-width: 395px) {
            .swiper-button-prev,
            .swiper-button-next {
              display: none;
            }
          }
          
          @media (max-width: 322px) {
            .stages-swiper .swiper-wrapper {
              padding-right: calc(144px - (640px - 100vw) / 3);
            }
          }

          /* מעלים הנחיות לקוראי מסך מבלי להסתיר מהעיצוב */
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
      </div>
    </>
  );
}

