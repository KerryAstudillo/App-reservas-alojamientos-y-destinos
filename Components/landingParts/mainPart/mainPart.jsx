import { useState, useEffect } from "react";

const MainPart = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const words = ['Explorar','Descubre','Viaja sin límites'];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
        }, 3000);

        return () => clearInterval(interval);
    }, [words.length]);

    return(
        <div className="vertical-carrusel">
            {words.map((word, index) => (
                <div 
                    key={index}
                    className={`carrusel-word ${index === currentIndex ? 'active' : ''}`}
                    style={{
                        position: 'absolute',
                        transform: `translateY(${(index - currentIndex) * 60}px)`,
                        opacity: index === currentIndex ? 1 : 0,
                        transition: 'all 0.8s ease'
                    }}
                >
                    {word}
                </div>
            ))}
        </div>
    );
}

export default MainPart;