import { skills } from '../data/skills';
import './Skills.css';

const Skills = () => {
    return (
        <section id="skills" className="skills">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Skills & Expertise</h2>
                    <div className="title-underline"></div>
                    <p className="section-subtitle">
                        Technologies and tools I work with to bring ideas to life
                    </p>
                </div>

                <div className="skills-grid">
                    {Object.entries(skills).map(([category, skillList]) => (
                        <div key={category} className="skill-category">
                            <h3 className="category-title">
                                {category.charAt(0).toUpperCase() + category.slice(1)}
                            </h3>
                            <div className="skill-list">
                                {skillList.map((skill, index) => (
                                    <div key={index} className="skill-item">
                                        <div className="skill-header">
                                            <span className="skill-name">{skill.name}</span>
                                            <span className="skill-level">{skill.level}%</span>
                                        </div>
                                        <div className="skill-bar">
                                            <div
                                                className="skill-progress"
                                                style={{ width: `${skill.level}%` }}
                                            ></div>
                                        </div>
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

export default Skills;
