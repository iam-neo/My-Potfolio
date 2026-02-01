import { experiences } from '../data/experience';
import './Experience.css';

const Experience = () => {
    return (
        <section id="experience" className="experience">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Work Experience</h2>
                    <div className="title-underline"></div>
                    <p className="section-subtitle">
                        My professional journey and career highlights
                    </p>
                </div>

                <div className="experience-timeline">
                    {experiences.map((exp) => (
                        <div key={exp.id} className="experience-card">
                            <div className="company-header">
                                <div className="company-logo">
                                    <span className="logo-placeholder">
                                        {exp.company.charAt(0)}
                                    </span>
                                </div>
                                <div className="company-info">
                                    <h3 className="company-name">{exp.company}</h3>
                                    {exp.totalDuration && (
                                        <span className="total-duration">{exp.totalDuration}</span>
                                    )}
                                </div>
                            </div>

                            <div className="positions-list">
                                {exp.positions.map((position, index) => (
                                    <div key={index} className="position-item">
                                        <div className="position-header">
                                            <h4 className="position-title">{position.title}</h4>
                                            <span className="position-type">{position.type}</span>
                                        </div>
                                        <div className="position-meta">
                                            <span className="position-period">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                                                    <line x1="16" y1="2" x2="16" y2="6"></line>
                                                    <line x1="8" y1="2" x2="8" y2="6"></line>
                                                    <line x1="3" y1="10" x2="21" y2="10"></line>
                                                </svg>
                                                {position.period} · {position.duration}
                                            </span>
                                            <span className="position-location">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                                                    <circle cx="12" cy="10" r="3"></circle>
                                                </svg>
                                                {position.location}
                                            </span>
                                        </div>
                                        {position.description && (
                                            <p className="position-description">{position.description}</p>
                                        )}
                                        {position.skills && position.skills.length > 0 && (
                                            <div className="position-skills">
                                                {position.skills.slice(0, 5).map((skill, idx) => (
                                                    <span key={idx} className="skill-tag">{skill}</span>
                                                ))}
                                                {position.skills.length > 5 && (
                                                    <span className="skill-tag more-skills">+{position.skills.length - 5} more</span>
                                                )}
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
