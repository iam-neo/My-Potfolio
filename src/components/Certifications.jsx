import { useState } from 'react';
import { certifications } from '../data/certifications';
import useScrollAnimation from '../hooks/useScrollAnimation';
import './Certifications.css';

const Certifications = () => {
    const [sectionRef, isVisible] = useScrollAnimation();
    const [selectedCert, setSelectedCert] = useState(null);

    const openModal = (cert, e) => {
        e.preventDefault();
        setSelectedCert(cert);
    };

    const closeModal = () => {
        setSelectedCert(null);
    };

    return (
        <section id="certifications" className="certifications">
            <div className="container" ref={sectionRef}>
                <div className={`section-header animate-in ${isVisible ? 'animate-visible' : ''}`}>
                    <h2 className="section-title">Certifications</h2>
                    <div className="title-underline"></div>
                    <p className="section-subtitle">
                        Professional certifications and credentials I've earned
                    </p>
                </div>

                <div className="cert-grid">
                    {certifications.map((cert, index) => (
                        <div
                            key={cert.id}
                            className={`cert-card animate-in ${isVisible ? 'animate-visible' : ''}`}
                            style={{ transitionDelay: `${index * 0.15}s`, cursor: 'pointer' }}
                            onClick={(e) => openModal(cert, e)}
                        >
                            <div className="cert-image-container">
                                <img src={cert.file} alt={cert.title} className="cert-image" />
                            </div>
                            <div className="cert-info">
                                <h3 className="cert-title">{cert.title}</h3>
                                <p className="cert-issuer">{cert.issuer}</p>
                                <span className="cert-date">{cert.date}</span>
                            </div>
                            <div className="cert-view">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                                    <polyline points="15 3 21 3 21 9" />
                                    <line x1="10" y1="14" x2="21" y2="3" />
                                </svg>
                                <span>View Certificate</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {selectedCert && (
                <div className="cert-modal" onClick={closeModal}>
                    <div className="cert-modal-content" onClick={e => e.stopPropagation()}>
                        <button className="cert-modal-close" onClick={closeModal}>&times;</button>
                        <img src={selectedCert.file} alt={selectedCert.title} className="cert-modal-image" />
                        <h3 className="cert-modal-title">{selectedCert.title}</h3>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Certifications;
