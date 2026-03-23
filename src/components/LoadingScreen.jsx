import { useState, useEffect } from 'react';
import './LoadingScreen.css';

const LoadingScreen = ({ onComplete }) => {
    const [fadeOut, setFadeOut] = useState(false);

    useEffect(() => {
        const fadeTimer = setTimeout(() => setFadeOut(true), 1800);
        const removeTimer = setTimeout(() => onComplete(), 2500);

        return () => {
            clearTimeout(fadeTimer);
            clearTimeout(removeTimer);
        };
    }, [onComplete]);

    return (
        <div className={`loading-screen ${fadeOut ? 'fade-out' : ''}`}>
            <div className="loading-content">
                <div className="loading-logo">
                    {/* <span className="loading-logo-text">NM</span> */}
                    <img src="/fav.png" alt="Logo" className="logo-image" />
                    <div className="loading-ring"></div>
                    <div className="loading-ring ring-2"></div>
                </div>
                <h2 className="loading-name">Nirmal Magar</h2>
                <p className="loading-tagline">Full Stack Developer</p>
                <div className="loading-bar">
                    <div className="loading-bar-fill"></div>
                </div>
            </div>
        </div>
    );
};

export default LoadingScreen;
