import { useRouter } from "next/router";
import "../../app/globals.css";
import Data from '../../app/components/data';
import styles from "../../app/page.module.css";

export default function Zodiac() {
    const router = useRouter();
    const slug = router.query.slug;

    const zodiacData = Data.find((val) => val.id === slug);

    if (!zodiacData) return null;

    return (
        <>
        <head>
        </head>
        
        <main>
            <div 
            className= {styles.zodiacHeader} 
            style= {{backgroundImage: `url('${zodiacData.image.url}')`}}>
                <div className = {styles.zodiacWrapper}>
                    
                    <h2>{zodiacData.title}</h2>
                    <p>{zodiacData.date}</p>
                </div>
            </div>
                <div className={styles.zodiacBody}>
                    <div className={styles.zodiacWrapper}>
                    <p className={styles.zodiacHeaderText}>{zodiacData.text}</p>
                </div>
            </div>
        </main>
        </>
    );
}