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
         spaceBetween={10}
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
            slidesPerView: 1,
            spaceBetween: 20
            

          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20
        
          },
          850: {
            slidesPerView: 3,
            spaceBetween: 25
          },
          1100: {
            slidesPerView: 4,
            spaceBetween: 25
          },
         
          1370: {
            slidesPerView: 5,
            spaceBetween: 25
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
            /* מרווחים בצדדים רספונסיביים */
            padding-right: calc(144px - (640px - 100vw) / 2); 
          }
        }
        @media (max-width: 395px) {
          .swiper-button-prev,
          .swiper-button-next {
            display: none;
          }
        }
        @media (max-width: 322px){
        padding-right: calc(144px - (640px - 100vw) / 3);
        }

      `}</style>
     </div>
   );
 }

