import {useState} from 'react';
import imagens from './imagens.js';
import './styles.css';

function Midias(){

    const [currentIndex, setCurrentIndex] = useState(0);
    

    return (
    <div className='midias'>
    <h1>Mídias</h1>
    <div className='slider' style={styles.slider}>
    <img
        src={imagens[currentIndex]}
        alt={`Slide ${currentIndex}`}
        style={styles.image}
    />

    <div style={styles.controls}>
        <button
        onClick={() =>
            setCurrentIndex((prev) => (prev - 1 + imagens.length) % imagens.length)
        }
        >
        ◀
        </button>
        <button
        onClick={() =>
            setCurrentIndex((prev) => (prev + 1) % imagens.length)
        }
        >
        ▶
        </button>
    </div>
    </div>
    </div>
    )
}

const styles = {
    slider: {
    position: "relative",
    left: "70px",
    width: "90%",
    height: "500px",
    overflow: "hidden",
    borderRadius: "20px",
    },
    image: {
    borderRadius: "20px",
    width: "100%",
    height: "100%",
    objectFit: "cover",
    transition: "opacity 0.5s ease-in-out",
    },
    controls: {
    position: "absolute",
    bottom: "10px",
    padding: "0 0 0 70px",
    width: "90%",
    display: "flex",    
    justifyContent: "space-between",
    },
};

export default Midias;