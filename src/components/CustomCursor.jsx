import { useState, useEffect, useRef } from 'react';
import './CustomCursor.css';

const CustomCursor = () => {
    const dotRef = useRef(null);
    const ringRef = useRef(null);
    const [isHovering, setIsHovering] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const [isTouchDevice, setIsTouchDevice] = useState(false);

    useEffect(() => {
        // Detect touch device
        const checkTouch = () => {
            setIsTouchDevice(
                'ontouchstart' in window ||
                navigator.maxTouchPoints > 0 ||
                window.matchMedia('(pointer: coarse)').matches
            );
        };
        checkTouch();

        if (isTouchDevice) return;

        const mousePos = { x: 0, y: 0 };
        const ringPos = { x: 0, y: 0 };
        let animationFrameId;

        const handleMouseMove = (e) => {
            mousePos.x = e.clientX;
            mousePos.y = e.clientY;
            setIsVisible(true);

            if (dotRef.current) {
                dotRef.current.style.transform = `translate(${mousePos.x}px, ${mousePos.y}px)`;
            }
        };

        const animateRing = () => {
            ringPos.x += (mousePos.x - ringPos.x) * 0.15;
            ringPos.y += (mousePos.y - ringPos.y) * 0.15;

            if (ringRef.current) {
                ringRef.current.style.transform = `translate(${ringPos.x}px, ${ringPos.y}px)`;
            }

            animationFrameId = requestAnimationFrame(animateRing);
        };

        const handleMouseEnter = () => setIsVisible(true);
        const handleMouseLeave = () => setIsVisible(false);

        const handleInteractiveHover = (e) => {
            const target = e.target;
            const isInteractive = target.closest('a, button, input, textarea, select, [role="button"], .project-card, .social-card, .info-card, .cert-card');
            setIsHovering(!!isInteractive);
        };

        document.addEventListener('mousemove', handleMouseMove, { passive: true });
        document.addEventListener('mouseenter', handleMouseEnter);
        document.addEventListener('mouseleave', handleMouseLeave);
        document.addEventListener('mouseover', handleInteractiveHover, { passive: true });
        animationFrameId = requestAnimationFrame(animateRing);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseenter', handleMouseEnter);
            document.removeEventListener('mouseleave', handleMouseLeave);
            document.removeEventListener('mouseover', handleInteractiveHover);
            cancelAnimationFrame(animationFrameId);
        };
    }, [isTouchDevice]);

    if (isTouchDevice) return null;

    return (
        <>
            <div
                ref={dotRef}
                className={`cursor-dot ${isVisible ? 'visible' : ''} ${isHovering ? 'hovering' : ''}`}
            />
            <div
                ref={ringRef}
                className={`cursor-ring ${isVisible ? 'visible' : ''} ${isHovering ? 'hovering' : ''}`}
            />
        </>
    );
};

export default CustomCursor;
