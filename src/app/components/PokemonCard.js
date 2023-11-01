"use client"
import styles from "./PokemonCard.module.css"

const PokemonCard = ({
    pokeName, 
    pokeType, 
    pokeImage
}) => (
    
    <div className={styles.PokemonCardWrapper}>
        <h2>{pokeName}</h2>
        <div className={styles.PokemonCardImage}>
        </div>
        <p>Name: {pokeName}</p>
        <p>Type: {pokeType}</p>
        <img scr={pokeImage} alt={pokeName}></img>
    {/* .spirits.other.offical-artwork.front_default} */}
    </div>
)

export default PokemonCard; 