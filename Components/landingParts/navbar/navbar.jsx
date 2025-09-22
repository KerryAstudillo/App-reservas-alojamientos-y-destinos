import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);

    const opciones = [
        {valor: 'opcion1', Texto: 'Centro de ayuda', url: '/'},
        {valor: 'opcion2', Texto: 'Iniciar Sesión', url: '/'}
    ]

    useEffect(() => {
        const handleKeyDown = (e) => {
            if(e.key === 'Escape' && isOpen){
            cerrarPopup();
            }
        };

        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [isOpen]);

    const abrirPopup = () => {
        setIsOpen(true);
    };

    const cerrarPopup = () => {
        setIsOpen(false);
    };

    const navegarA = (url) => {
        cerrarPopup();

        setTimeout(() => {
            window.location.href = url;
        }, 150)
    };

    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget) {
            cerrarPopup();
        }
    };
    
    return(
        <div className="container-navbar d-flex gap-4 space-between text-align">
            <div className="">
                Logo
            </div>
            <div className="d-flex gap-3">
                <button className="h2 btn btn-options-color" onClick={() => navigate('/destinos')}>
                    Destinos
                </button>
                <span className="divide">|</span>
                <button className="h2 btn btn-options-color" onClick={() => navigate('/alojamientos')}>
                    Alojamientos
                </button>
                <button className="btn-2 btn-options " onClick={abrirPopup}>
                    <div className="logo-options mb-1"/>
                    <div className="logo-options mb-1"/>
                    <div className="logo-options"/>
                </button>
            </div>
            
            {isOpen && (
                <div className="popup-overlay" onClick={handleOverlayClick}>
                    <div className="container-popup-options">
                        {opciones.map((opcion) => (
                            <button
                                key={opcion.valor}
                                onClick={() => navegarA(opcion.url)}
                                className="option"
                            >
                                <span>{opcion.Texto}</span>
                            </button>
                        ))}
                    </div>
                </div>
            )}
            
        </div>
    );
}

export default Navbar;