import { useRouter } from "next/router";
import "../../app/globals.css";
import Data from '../../app/components/data';
import styles from "../../app/page.module.css";
import PokemonCard from "src/app/components/PokemonCard";
import Pokedex from 'pokedex-promise-v2';

const pokemonCard = new Pokedex();

(async () => { 
  try {
      const golduckSpecies = await pokemonCard.getPokemonSpeciesByName("golduck")
      const frenchName = golduckSpecies.names.filter(pokeAPIName => pokeAPIName.language.name === 'fr')[0].name
      console.log(frenchName)
  } catch (error) {
      throw error
  }
})()

pokemonCard.getPokemonByName(
  ['charizard',
   'tauros',
   'ditto',
   'mew',
   'arcanine',
   'dragonair',
   'eevee',
   'mewtwo',
   'haunter',
   'scyther',
   'magnemite',
   'pikachu'])
.then((response) => {
  console.log(response);
})
.catch((error) => {
  console.log('There was an ERROR: ', error);
});

pokemonCard.getPokemonByName(34, (response, error) => { // with callback
  if(!error) {
    console.log(response);
  } else {
    console.log(error)
  }
});

export default function Zodiac(pokemonCard) {
    const router = useRouter();
    const slug = router.query.slug;

    const zodiacData = Data.find((val) => val.id === slug);

    if(!zodiacData) return null;
    if(!pokemonCard) return null;
    return (
        <>  
        <header>
            <div className={styles.zodiacHeader}>
                <h1>{zodiacData.title}</h1>
                <h2>{zodiacData.date}</h2>
                <PokemonCard 
                    pokeName = {pokemonCard.name}
                    pokeType = {pokemonCard.types}
                    // pokeImage = {pokemonCard.pokeImage.sprites.other.offical-artwork.front_default}
                />
            </div>
        </header>
        <main>
            <div className={styles.zodiacBody}>
                <div className={styles.zodiacWrapper}>
                    <p className={styles.zodiacText}>{zodiacData.text}</p>
                </div>
            </div>
        </main>
        </>
    );
}