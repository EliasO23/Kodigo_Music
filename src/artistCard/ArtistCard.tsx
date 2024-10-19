import { useState } from 'react';
import styles from './ArtistCard.module.css';
import { FaPlay } from 'react-icons/fa';

interface Artist {
    name: string;
    image: string;
  }

interface ArtistCardProps {
    artist: Artist;
  }

const ArtistCard: React.FC<ArtistCardProps> = ({ artist }) => {
    
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className={styles.artistCard}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className={styles.imageContainer}>
                <img src={artist.image} alt={artist.name} className={styles.artistImage} />
            </div>
            <div className={styles.infoArtist}>
                <h3 className={styles.artistName}>{artist.name}</h3>
                <p className={styles.artistLabel}>Artista</p>
            </div>
            {isHovered && (
                <button className={styles.playButton}>
                    <FaPlay />
                </button>
            )}
        </div>
    )
}

export default ArtistCard