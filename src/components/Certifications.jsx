import { certifications } from '../data/certifications';
import useScrollAnimation from '../hooks/useScrollAnimation';
import './Certifications.css';

const Certifications = () => {
    const [sectionRef, isVisible] = useScrollAnimation();

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
                        <a
                            key={cert.id}
                            href={cert.file}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`cert-card animate-in ${isVisible ? 'animate-visible' : ''}`}
                            style={{ transitionDelay: `${index * 0.15}s` }}
                        >
                            <div className="cert-icon">{cert.icon}</div>
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
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certifications;
