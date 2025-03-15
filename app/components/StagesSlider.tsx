"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import styles from "../styles/Stages.module.css";
import { useState } from "react"; // הוסף את זה

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
}

export default function StagesSlider({ slides }: StagesSliderProps) {
  // מעקב אחר הסלייד האקטיבי עבור אפקט hover
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div className={`${styles.stagesContent} stage-slider-container`}>
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        spaceBetween={20}
        slidesPerView="auto"
        initialSlide={0}
        loop={false} // לא חוזר ללופ אחרי הסוף
        grabCursor={true} // מראה מצביע "יד" בעת מעבר מעל הסליידר

        // הוספת פדינג כדי לאפשר אפקט hover ללא חיתוך
       
        slidesOffsetBefore={0}
        slidesOffsetAfter={0}
        // תמיד תשאיר מרווח לאפקטים
        watchSlidesProgress={true}
        // טריגר אירועים כשסליידים משתנים
        onSlideChange={(swiper) => {
          // עדכון האינדקס האקטיבי (אופציונלי)
          setActiveIndex(swiper.activeIndex);
        }}
        breakpoints={{
            320: {
              slidesPerView: 1.05, // מספר עשרוני מונע הידבקות
              spaceBetween: 15
            },
            640: {
              slidesPerView: 2.05, // מספר עשרוני מונע הידבקות
              spaceBetween: 15
            },
            768: {
              slidesPerView: 3.05, // מספר עשרוני מונע הידבקות
              spaceBetween: 20
            },
            1024: {
              slidesPerView: 4.05, // מספר עשרוני מונע הידבקות
              spaceBetween: 20
            },
            1280: {
              slidesPerView: 5.05, // מספר עשרוני מונע הידבקות
              spaceBetween: 20
            }
          }}
  
        className="stages-swiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <article 
              className={styles.stages}
              // הוסף מרווח נוסף במקום transform:scale כדי למנוע חיתוך
              style={{ margin: "15px" }} 
            >
              <div className={styles.stepNumber}>{slide.number}</div>
              <h3>{slide.title}</h3>
              <p>{slide.content}</p>
            </article>
          </SwiperSlide>
        ))}
      </Swiper>

    </div>
  );
}