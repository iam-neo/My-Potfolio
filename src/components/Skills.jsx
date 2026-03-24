import { useState, useEffect } from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';
import './Skills.css';

const radarSkills = [
    { name: 'React', level: 0.90, description: 'Component-based UI, Hooks, and complex state management' },
    { name: 'JavaScript', level: 0.95, description: 'ES6+, async programming, and advanced DOM manipulation' },
    { name: 'HTML/CSS', level: 0.90, description: 'Semantic markup, Flexbox, Grid, and modern animations' },
    { name: 'Node.js', level: 0.85, description: 'Server-side runtime, Express infrastructure, and APIs' },
    { name: 'Database', level: 0.80, description: 'MongoDB, MySQL schema design, and query optimization' },
    { name: 'Problem Solving', level: 0.88, description: 'Algorithmic thinking and efficient code architecture' },
];

const secondarySkills = [
    { name: 'Git & GitHub', level: 90, label: 'Expert' },
    { name: 'REST APIs', level: 85, label: 'Advanced' },
    { name: 'Responsive Design', level: 88, label: 'Advanced' },
    { name: 'Computer Vision', level: 65, label: 'Intermediate' }
];

const PolarToCartesian = (centerX, centerY, radius, angleInDegrees) => {
    const angleInRadians = (angleInDegrees - 90) * Math.PI / 180.0;
    return {
        x: centerX + (radius * Math.cos(angleInRadians)),
        y: centerY + (radius * Math.sin(angleInRadians))
    };
};

const RadarChart = ({ isVisible }) => {
    const size = 400;
    const center = size / 2;
    const maxRadius = 135;
    const gridLevels = 4;

    const [hoveredPoint, setHoveredPoint] = useState(null);
    const [animationProgress, setAnimationProgress] = useState(0);

    useEffect(() => {
        if (isVisible) {
            let start = null;
            const duration = 1500; // 1.5s animation

            const step = (timestamp) => {
                if (!start) start = timestamp;
                const progress = Math.min((timestamp - start) / duration, 1);
                // easeOutQuart
                const easeOut = 1 - Math.pow(1 - progress, 4);
                setAnimationProgress(easeOut);

                if (progress < 1) {
                    window.requestAnimationFrame(step);
                }
            };
            window.requestAnimationFrame(step);
        } else {
            setAnimationProgress(0);
        }
    }, [isVisible]);

    // Draw Grid (Concentric polygons)
    const renderGrid = () => {
        const grids = [];
        for (let j = 1; j <= gridLevels; j++) {
            const levelRadius = (maxRadius / gridLevels) * j;
            let points = "";
            for (let i = 0; i < radarSkills.length; i++) {
                const angle = (i * 360) / radarSkills.length;
                const coord = PolarToCartesian(center, center, levelRadius, angle);
                points += `${coord.x},${coord.y} `;
            }
            grids.push(
                <polygon
                    key={`grid-${j}`}
                    points={points}
                    className="radar-grid-polygon"
                />
            );
        }
        return grids;
    };

    // Draw Axes (Lines from center to outer edge)
    const renderAxes = () => {
        return radarSkills.map((_, i) => {
            const angle = (i * 360) / radarSkills.length;
            const outerCoord = PolarToCartesian(center, center, maxRadius, angle);
            return (
                <line
                    key={`axis-${i}`}
                    x1={center}
                    y1={center}
                    x2={outerCoord.x}
                    y2={outerCoord.y}
                    className="radar-axis"
                />
            );
        });
    };

    // Draw Data Polygon
    const renderDataPolygon = () => {
        let points = "";
        radarSkills.forEach((skill, i) => {
            const angle = (i * 360) / radarSkills.length;
            const currentLevel = skill.level * animationProgress;
            const coord = PolarToCartesian(center, center, maxRadius * currentLevel, angle);
            points += `${coord.x},${coord.y} `;
        });

        return (
            <polygon
                points={points}
                className="radar-data-polygon"
            />
        );
    };

    // Draw Data Points
    const renderDataPoints = () => {
        return radarSkills.map((skill, i) => {
            const angle = (i * 360) / radarSkills.length;
            const currentLevel = skill.level * animationProgress;
            const coord = PolarToCartesian(center, center, maxRadius * currentLevel, angle);
            const isHovered = hoveredPoint === i;

            return (
                <g key={`point-${i}`}
                    className="radar-data-point-group"
                    onMouseEnter={() => setHoveredPoint(i)}
                    onMouseLeave={() => setHoveredPoint(null)}
                >
                    <circle
                        cx={coord.x}
                        cy={coord.y}
                        r={isHovered ? 8 : 5}
                        className={`radar-data-point ${isHovered ? 'hovered' : ''}`}
                    />
                    <circle cx={coord.x} cy={coord.y} r={25} fill="transparent" />
                </g>
            );
        });
    };

    // Draw Labels (Skill names)
    const renderLabels = () => {
        return radarSkills.map((skill, i) => {
            const angle = (i * 360) / radarSkills.length;
            const coord = PolarToCartesian(center, center, maxRadius + 35, angle);

            let textAnchor = "middle";
            if (coord.x < center - 10) textAnchor = "end";
            if (coord.x > center + 10) textAnchor = "start";

            let dy = "0.3em";
            if (coord.y < center - 10) dy = "0em";
            if (coord.y > center + 10) dy = "0.8em";

            return (
                <text
                    key={`label-${i}`}
                    x={coord.x}
                    y={coord.y}
                    textAnchor={textAnchor}
                    dy={dy}
                    className={`radar-label ${hoveredPoint === i ? 'highlighted' : ''}`}
                >
                    {skill.name}
                </text>
            );
        });
    };

    return (
        <div className="radar-container">
            <svg viewBox={`0 0 ${size} ${size}`} className="radar-svg">
                <defs>
                    <linearGradient id="polygonGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="rgba(139, 92, 246, 0.7)" />
                        <stop offset="100%" stopColor="rgba(56, 189, 248, 0.7)" />
                    </linearGradient>
                </defs>
                <g className="radar-grid">{renderGrid()}</g>
                <g className="radar-axes">{renderAxes()}</g>
                <g className="radar-data">{renderDataPolygon()}</g>
                <g className="radar-labels">{renderLabels()}</g>
                <g className="radar-points">{renderDataPoints()}</g>
            </svg>

            {hoveredPoint !== null && (
                <div className="radar-tooltip">
                    <h4 className="tooltip-title">{radarSkills[hoveredPoint].name}</h4>
                    <p className="tooltip-desc">{radarSkills[hoveredPoint].description}</p>
                </div>
            )}
        </div>
    );
};

const Skills = () => {
    const [sectionRef, isVisible] = useScrollAnimation();

    return (
        <section id="skills" className="skills-section">
            <div className="container" ref={sectionRef}>
                <div className={`section-header animate-in ${isVisible ? 'animate-visible' : ''}`}>
                    <h2 className="section-title">Skills & Expertise</h2>
                    <div className="title-underline"></div>
                    <p className="section-subtitle">
                        Interactive overview of my technical capabilities
                    </p>
                </div>

                <div className="skills-content-wrapper">
                    <div className={`radar-chart-section animate-in ${isVisible ? 'animate-visible' : ''}`}>
                        <div className="chart-glass-card">
                            <h3 className="chart-title">Core Technologies</h3>
                            <RadarChart isVisible={isVisible} />
                        </div>
                    </div>

                    <div className="secondary-skills-section">
                        <h3 className={`secondary-title animate-in ${isVisible ? 'animate-visible' : ''}`}>
                            Additional Proficiencies
                        </h3>
                        <div className="circular-skills-grid">
                            {secondarySkills.map((skill, index) => {
                                const radius = 45;
                                const circumference = 2 * Math.PI * radius;
                                const strokeDashoffset = isVisible ? circumference - (skill.level / 100) * circumference : circumference;

                                return (
                                    <div
                                        key={index}
                                        className={`circular-skill-card animate-in ${isVisible ? 'animate-visible' : ''}`}
                                        style={{ transitionDelay: `${0.2 + (index * 0.15)}s` }}
                                    >
                                        <div className="circular-progress-container">
                                            <svg className="circular-progress-svg" viewBox="0 0 120 120">
                                                <defs>
                                                    <linearGradient id={`gradient-${index}`} x1="0%" y1="0%" x2="100%" y2="0%">
                                                        <stop offset="0%" stopColor="#8b5cf6" />
                                                        <stop offset="100%" stopColor="#38bdf8" />
                                                    </linearGradient>
                                                </defs>
                                                <circle
                                                    className="circle-bg"
                                                    cx="60" cy="60" r={radius}
                                                />
                                                <circle
                                                    className="circle-progress"
                                                    cx="60" cy="60" r={radius}
                                                    stroke={`url(#gradient-${index})`}
                                                    style={{
                                                        strokeDasharray: circumference,
                                                        strokeDashoffset: strokeDashoffset,
                                                    }}
                                                />
                                            </svg>
                                            <div className="circular-label-inner">
                                                <span className="proficiency-label">{skill.label}</span>
                                            </div>
                                        </div>
                                        <h4 className="circular-skill-name">{skill.name}</h4>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-glow blob-1"></div>
            <div className="bg-glow blob-2"></div>
        </section>
    );
};

export default Skills;
