import PokemonCard from "@/app/components/PokemonCard";
import Data from "../app/components/data";
import ZodiacCard from "../app/components/ZodiacCard";
import styles from "../app/page.module.css";

export default function Home() {
  const projectName = "What Pokemon Are You Based on Your Zodiac Sign";

  return (
    <>
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