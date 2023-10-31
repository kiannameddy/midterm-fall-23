import Data from "../app/components/data";
import ZodiacCard from "../app/components/ZodiacCard";
import styles from "../app/page.module.css";

export default function Home() {
  const projectName = "What Pokemon Are You Based on Your Zodiac Sign";

  return (
    <>
    <head>
      <link href="https://fonts.googleapis.com/css2?family=Anton&display=swap" rel="stylesheet" />
    </head>
    <main className={styles.page}>
        <h1 className={styles.projectName}>{projectName}</h1>
        {Data.map((zodiac) =>(
          <ZodiacCard
            key={zodiac.id}
            date={zodiac.date}
            description={zodiac.text}
            id={zodiac.id}
            title={zodiac.title}
            imageSrc={zodiac.image.url}
            imageAlt={zodiac.image.alt}
          />
        ))}
    </main>
    </>
  );
}