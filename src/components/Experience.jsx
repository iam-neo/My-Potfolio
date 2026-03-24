import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { experiences } from '../data/experience';
import useScrollAnimation from '../hooks/useScrollAnimation';
import './Experience.css';

const modalOverlayVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 0.25 } },
    exit: { opacity: 0, transition: { duration: 0.2 } }
};

const modalContentVariants = {
    hidden: { opacity: 0, scale: 0.92, y: 30 },
    show: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: { type: "spring", stiffness: 300, damping: 25 }
    },
    exit: { opacity: 0, scale: 0.95, y: 20, transition: { duration: 0.2 } }
};

/* ─── Typewriter Hook ─── */
const useTypewriter = (text, speed = 18, shouldStart = false) => {
    const [displayed, setDisplayed] = useState('');
    const [isDone, setIsDone] = useState(false);

    useEffect(() => {
        if (!shouldStart) {
            setDisplayed('');
            setIsDone(false);
            return;
        }
        setDisplayed('');
        setIsDone(false);
        let i = 0;
        const interval = setInterval(() => {
            i++;
            setDisplayed(text.slice(0, i));
            if (i >= text.length) {
                clearInterval(interval);
                setIsDone(true);
            }
        }, speed);
        return () => clearInterval(interval);
    }, [text, speed, shouldStart]);

    return [displayed, isDone];
};

/* ─── Single Terminal Block with Typewriter ─── */
const TerminalBlock = ({ prompt, command, output, tools, results, isRevealed, onDone }) => {
    const isToolsBlock = !!tools;
    const isResultsBlock = !!results;
    const outputText = output || '';
    const [typedOutput, outputDone] = useTypewriter(outputText, 12, isRevealed && !isToolsBlock && !isResultsBlock);
    const [visibleResults, setVisibleResults] = useState(0);
    const onDoneRef = useRef(onDone);
    onDoneRef.current = onDone;

    // Sequential reveal for results items
    useEffect(() => {
        if (!isRevealed || !isResultsBlock) return;
        setVisibleResults(0);
        let count = 0;
        const interval = setInterval(() => {
            count++;
            setVisibleResults(count);
            if (count >= results.length) {
                clearInterval(interval);
                onDoneRef.current?.();
            }
        }, 400);
        return () => clearInterval(interval);
    }, [isRevealed, isResultsBlock, results]);

    // Tools block — instant reveal, short delay before done
    useEffect(() => {
        if (isRevealed && isToolsBlock) {
            const timer = setTimeout(() => onDoneRef.current?.(), 300);
            return () => clearTimeout(timer);
        }
    }, [isRevealed, isToolsBlock]);

    // Text output — done when typewriter finishes
    useEffect(() => {
        if (outputDone) {
            onDoneRef.current?.();
        }
    }, [outputDone]);

    if (!isRevealed) return null;

    return (
        <div className="terminal-block">
            <div className="terminal-line">
                <span className="prompt">{prompt}</span>
                <span className="command"> {command}</span>
            </div>
            {isResultsBlock ? (
                <div className="terminal-output">
                    <ul className="terminal-results">
                        {results.map((res, i) => (
                            <li key={i} className={`result-item ${i < visibleResults ? 'visible' : ''}`}>
                                <span className="success-arrow">➜</span> {res}
                            </li>
                        ))}
                    </ul>
                </div>
            ) : isToolsBlock ? (
                <div className="terminal-output tools-list">
                    {tools.map((tool, i) => (
                        <span key={i} className="terminal-tool-tag">{tool}</span>
                    ))}
                </div>
            ) : (
                <div className="terminal-output">{typedOutput}<span className={`inline-cursor ${outputDone ? 'hidden' : ''}`}>▋</span></div>
            )}
        </div>
    );
};

/* ─── Terminal Modal Content ─── */
const TerminalContent = ({ exp, onClose }) => {
    const [step, setStep] = useState(0);
    const [blocksDone, setBlocksDone] = useState(new Set());
    const bodyRef = useRef(null);

    const commands = [
        { prompt: 'guest@portfolio:~$', command: 'echo $MISSION', output: exp.summary },
        { prompt: 'guest@portfolio:~$', command: 'cat context.txt', output: exp.caseStudy.problem },
        { prompt: 'guest@portfolio:~$', command: './execute_approach.sh', output: exp.caseStudy.approach },
        { prompt: 'guest@portfolio:~$', command: 'show_metrics --all', results: exp.caseStudy.results },
        { prompt: 'guest@portfolio:~$', command: 'ls tools/', tools: exp.caseStudy.tools },
    ];

    const totalCommands = commands.length;
    const allDone = step >= totalCommands && blocksDone.size >= totalCommands;

    const handleBlockDone = useCallback((index) => {
        setBlocksDone(prev => {
            const next = new Set(prev);
            next.add(index);
            return next;
        });
    }, []);

    const handleRunNext = useCallback(() => {
        if (step < totalCommands) {
            setStep(prev => prev + 1);
        }
    }, [step, totalCommands]);

    // Auto-scroll terminal body when new content appears
    useEffect(() => {
        if (bodyRef.current) {
            bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
        }
    }, [step, blocksDone]);

    // Handle keyboard Enter to run next command
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                handleRunNext();
            }
            if (e.key === 'Escape') {
                onClose();
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [handleRunNext, onClose]);

    const currentBlockDone = step > 0 && blocksDone.has(step - 1);
    const showRunButton = step < totalCommands && (step === 0 || currentBlockDone);

    return (
        <div className="terminal-window crt-effect">
            <div className="terminal-header">
                <div className="terminal-buttons">
                    <span className="terminal-btn close" onClick={onClose}></span>
                    <span className="terminal-btn minimize"></span>
                    <span className="terminal-btn maximize"></span>
                </div>
                <div className="terminal-title">bash — {exp.company.toLowerCase()}_impact</div>
            </div>
            <div className="terminal-body" ref={bodyRef}>
                <div className="scanlines"></div>

                {commands.map((cmd, index) => (
                    <TerminalBlock
                        key={index}
                        prompt={cmd.prompt}
                        command={cmd.command}
                        output={cmd.output}
                        tools={cmd.tools}
                        results={cmd.results}
                        isRevealed={index < step}
                        onDone={() => handleBlockDone(index)}
                    />
                ))}

                {/* Interactive prompt / Run button */}
                <div className="terminal-block">
                    <div className="terminal-line">
                        <span className="prompt">guest@portfolio:~$</span>
                        {allDone ? (
                            <span className="cursor-blink"> _</span>
                        ) : showRunButton ? (
                            <span className="run-command" onClick={handleRunNext}>
                                <span className="run-text"> run next</span>
                                <span className="run-hint">↵</span>
                            </span>
                        ) : (
                            <span className="typing-indicator"> <span className="dot-pulse"></span></span>
                        )}
                    </div>
                </div>
            </div>

            {/* Status Bar */}
            <div className="terminal-statusbar">
                <div className="status-left">
                    <span className="status-icon">📁</span>
                    <span>~/career/{exp.company.toLowerCase()}</span>
                </div>
                <div className="status-right">
                    <span className={`status-badge ${allDone ? 'done' : ''}`}>
                        {allDone ? '✅' : '⏳'} {Math.min(step, totalCommands)}/{totalCommands} executed
                    </span>
                </div>
            </div>
        </div>
    );
};

/* ─── Main Experience Component ─── */
const Experience = () => {
    const [sectionRef, isVisible] = useScrollAnimation();
    const [activeId, setActiveId] = useState(null);

    const activeExp = experiences.find(e => e.id === activeId);

    const handleClose = useCallback(() => setActiveId(null), []);

    // Lock body scroll when modal is open
    useEffect(() => {
        if (activeId) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => { document.body.style.overflow = ''; };
    }, [activeId]);

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
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* Terminal Popup Modal */}
            <AnimatePresence>
                {activeExp && (
                    <motion.div
                        className="terminal-overlay"
                        variants={modalOverlayVariants}
                        initial="hidden"
                        animate="show"
                        exit="exit"
                        onClick={handleClose}
                    >
                        <motion.div
                            className="terminal-modal"
                            variants={modalContentVariants}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <TerminalContent
                                key={activeExp.id}
                                exp={activeExp}
                                onClose={handleClose}
                            />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Experience;
