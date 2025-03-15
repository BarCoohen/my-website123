"use client"; // חובה ב-Next.js 13+ כדי להבטיח שזה קובץ צד לקוח

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import styles from '../styles/Banner.module.css';
// ייבוא `Lottie` רק בצד הלקוח, כדי למנוע שגיאות
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
  // וכו' - הוסף שדות נוספים לפי הצורך
}

export default function Banner(){
    const [animationData, setAnimationData] = useState<AnimationData | null>(null);

    useEffect(() => {
        async function fetchAnimation() {
            try {
                const response = await fetch("https://lottie.host/fc6c6fb7-3dfd-4ced-ad3a-09228e788431/L3mcCI19ZO.json");
                const data = await response.json();
                setAnimationData(data);
            } catch (error) {
                console.error("Failed to fetch animation:", error);
            }
        }
        fetchAnimation();
    }, []);

    return (
        <section className={styles.banner}>
            <div className={styles.bannerContent}>
                <h1>בונים אתרים, מעצבים חוויות, ויוצרים תוצאות.</h1>
                <h2>פיתוח אתרים מקצועיים, עיצוב שמשאיר רושם וקידום שמביא לקוחות.</h2>
                <div className={styles.buttonContainer}>
                    <button className={styles.primaryButton}>058-5209911</button>
                    <button className={styles.secondaryButton}>צרו קשר</button>
                </div>
            </div>

            <div className={styles.animationContainer}>
            {animationData && <Lottie animationData={animationData} loop autoplay />}
            </div>        
        </section>
    );
}




