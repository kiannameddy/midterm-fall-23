"use client";
import Link from "next/link";
import styles from "./zodiacCard.module.css"; 


const ZodiacCard = ({ date, text, title, imageSrc, imageAlt, id }) => {

    return (
        <div className={styles.zodiacCard}>
            <div className={styles.zodiacCardImage}>
                <img src={imageSrc} alt={imageAlt}/>
            </div>
            <div className={styles.zodiacCardContent}>
                <h2>{title}</h2>
                <p>{date}</p>
                <p>
                    <Link className={styles.zodiacCardLink}href={`zodiac/${id}`}>Who's Your Pokemon!</Link>
                </p>
            </div>
        </div>

    ); 
};

export default ZodiacCard;