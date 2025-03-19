"use client";

import { useEffect, useState, useRef } from "react";
import dynamic from "next/dynamic";
import styles from '../../styles/Banner.module.css';

// טעינת Lottie רק בצד לקוח
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

interface AnimationData {
  v: string;
  fr: number;
  ip: number;
  op: number;
  w: number;
  h: number;
  nm: string;
  ddd: number;
  assets: any[];
  layers: any[];
  // ניתן להוסיף שדות נוספים במידת הצורך
}

export default function Animation() {
  const [animationData, setAnimationData] = useState<AnimationData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  
  // רפרנס לאלמנט האנימציה
  const animationRef = useRef(null);

  // בדיקה אם המשתמש מעדיף הפחתת תנועה
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
      setPrefersReducedMotion(mediaQuery.matches);
      
      // מאזין לשינויים בהעדפת הפחתת תנועה
      const handleChange = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
      mediaQuery.addEventListener('change', handleChange);
      return () => mediaQuery.removeEventListener('change', handleChange);
    }
  }, []);

  // טעינת נתוני האנימציה
  useEffect(() => {
    async function fetchAnimation() {
      setIsLoading(true);
      try {
        const response = await fetch("https://lottie.host/fc6c6fb7-3dfd-4ced-ad3a-09228e788431/L3mcCI19ZO.json");
        if (!response.ok) {
          throw new Error(`Failed to fetch: ${response.status}`);
        }
        const data = await response.json();
        setAnimationData(data);
      } catch (error) {
        console.error("Failed to fetch animation:", error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchAnimation();
  }, []);

  // מצב טעינה
  if (isLoading) {
    return (
      <div 
        className="animation-container"
        role="img" 
        aria-label="האנימציה בטעינה..."
      >
        <span className="visually-hidden">טוען אנימציה...</span>
      </div>
    );
  }

  // במקרה של שגיאה בטעינה
  if (!animationData) {
    return null;
  }

  return (
    <figure 
      className={styles.animationContainer}
      aria-labelledby="animation-title animation-desc"
    >
      <div 
        ref={animationRef}
        role="img" 
        aria-label="אנימציה של בניית אתרים"
      >
        <Lottie 
          animationData={animationData} 
          loop={!prefersReducedMotion} 
          autoplay={!prefersReducedMotion} 
          className="animation"
        />
      </div>
      <figcaption id="animation-title" className={styles.visuallyHidden}>
        אנימציה של בניית אתר
      </figcaption>
      <div id="animation-desc" className={styles.visuallyHidden}>
        אנימציה המדגימה את תהליך בניית אתר אינטרנט מקצועי
      </div>
      <meta itemProp="contentUrl" content="https://lottie.host/fc6c6fb7-3dfd-4ced-ad3a-09228e788431/L3mcCI19ZO.json" />
    </figure>
  );
}