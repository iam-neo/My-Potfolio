import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { experiences } from '../data/experience';
import useScrollAnimation from '../hooks/useScrollAnimation';
import './Experience.css';

const storyContainerVariants = {
    hidden: { opacity: 0, height: 0 },
    show: {
        opacity: 1,
        height: 'auto',
        transition: {
            height: { type: "spring", stiffness: 200, damping: 20 },
            staggerChildren: 0.1,
            delayChildren: 0.1
        }
    },
    exit: {
        opacity: 0,
        height: 0,
        transition: {
            height: { type: "spring", stiffness: 200, damping: 20, delay: 0.1 },
            staggerChildren: 0.05,
            staggerDirection: -1
        }
    }
};

const storyItemVariants = {
    hidden: { opacity: 0, y: 10, filter: 'blur(4px)' },
    show: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { type: "spring", stiffness: 250, damping: 20 } },
    exit: { opacity: 0, y: 10, filter: 'blur(4px)' }
};

const Experience = () => {
    const [sectionRef, isVisible] = useScrollAnimation();
    const [activeId, setActiveId] = useState(experiences[0].id);

    return (
        <section id="experience" className="vertical-journey-section">
            <div className="container" ref={sectionRef}>
                <div className={`section-header animate-in ${isVisible ? 'animate-visible' : ''}`}>
                    <h2 className="section-title">Career Journey</h2>
                    <div className="title-underline"></div>
                    <p className="section-subtitle">
                        An interactive timeline of my professional growth.
                    </p>
                </div>

                <div className={`vt-timeline-container animate-in ${isVisible ? 'animate-visible' : ''}`}>
                    <div className="vt-line">
                        <motion.div
                            className="vt-line-progress"
                            initial={{ scaleY: 0 }}
                            whileInView={{ scaleY: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.5, ease: "circOut" }}
                            style={{ originY: 0 }}
                        />
                    </div>

                    <div className="vt-nodes">
                        {experiences.map((exp, index) => {
                            const isActive = activeId === exp.id;
                            const isLeft = index % 2 === 0;

                            return (
                                <div
                                    key={exp.id}
                                    className={`vt-node ${isActive ? 'active' : ''} ${isLeft ? 'node-left' : 'node-right'}`}
                                >
                                    <div className="vt-duration-opposite">
                                        <span className="duration-text">{exp.duration}</span>
                                    </div>

                                    <div
                                        className="vt-dot"
                                        onClick={() => setActiveId(isActive ? null : exp.id)}
                                    >
                                        {isActive && (
                                            <motion.div
                                                layoutId="vt-active-glow"
                                                className="vt-dot-glow"
                                            />
                                        )}
                                    </div>

                                    <div className="vt-content">
                                        <div
                                            className="vt-header"
                                            onClick={() => setActiveId(isActive ? null : exp.id)}
                                        >
                                            <h4 className="vt-role">
                                                <span className="vt-company">@{exp.company}</span>
                                                {exp.role}
                                            </h4>
                                            <span className="vt-duration-mobile">{exp.duration}</span>
                                        </div>

                                        <AnimatePresence>
                                            {isActive && (
                                                <motion.div
                                                    variants={storyContainerVariants}
                                                    initial="hidden"
                                                    animate="show"
                                                    exit="exit"
                                                    className="vt-story-wrapper"
                                                >
                                                    <div className="vt-story-board">
                                                        <motion.div variants={storyItemVariants} className="story-context-header">
                                                            <p className="story-summary">{exp.summary}</p>
                                                        </motion.div>

                                                        <div className="story-grid">
                                                            <motion.div variants={storyItemVariants} className="story-section">
                                                                <h4><span className="story-icon">🎯</span> Context / Problem</h4>
                                                                <p>{exp.caseStudy.problem}</p>
                                                            </motion.div>
                                                            <motion.div variants={storyItemVariants} className="story-section">
                                                                <h4><span className="story-icon">⚡</span> Approach & Role</h4>
                                                                <p>{exp.caseStudy.approach}</p>
                                                            </motion.div>
                                                            <motion.div variants={storyItemVariants} className="story-section story-full">
                                                                <h4><span className="story-icon">📈</span> Measurable Results</h4>
                                                                <ul>
                                                                    {exp.caseStudy.results.map((res, i) => (
                                                                        <li key={i}>{res}</li>
                                                                    ))}
                                                                </ul>
                                                            </motion.div>
                                                            <motion.div variants={storyItemVariants} className="story-section story-full">
                                                                <h4><span className="story-icon">🛠️</span> Tools & Technologies</h4>
                                                                <div className="story-tools">
                                                                    {exp.caseStudy.tools.map((tool, i) => (
                                                                        <span key={i} className="story-tool-tag">{tool}</span>
                                                                    ))}
                                                                </div>
                                                            </motion.div>
                                                        </div>
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
