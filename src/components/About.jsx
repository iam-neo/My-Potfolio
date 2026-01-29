import './About.css';

const About = () => {
    return (
        <section id="about" className="about">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">About Me</h2>
                    <div className="title-underline"></div>
                </div>

                <div className="about-content">
                    <div className="about-text">
                        <p className="about-intro">
                            Hello! I'm <span className="highlight">Nirmal Magar</span>, a passionate full-stack developer
                            based in Nepal with a love for creating innovative web applications.
                        </p>
                        <p>
                            My journey in web development began during my college years, where I discovered
                            the power of turning ideas into reality through code. Since then, I've been
                            continuously learning and building projects that solve real-world problems.
                        </p>
                        <p>
                            I specialize in building responsive, user-friendly web applications using modern
                            technologies. From creating medical clinic websites to developing PC optimization
                            tools, I enjoy tackling diverse challenges and learning new technologies along the way.
                        </p>
                        <p>
                            When I'm not coding, you can find me exploring new web technologies, contributing
                            to open-source projects, or sharing knowledge with the developer community.
                        </p>

                        <div className="about-highlights">
                            <div className="highlight-item">
                                <div className="highlight-number">32+</div>
                                <div className="highlight-label">GitHub Repositories</div>
                            </div>
                            <div className="highlight-item">
                                <div className="highlight-number">10+</div>
                                <div className="highlight-label">Featured Projects</div>
                            </div>
                            <div className="highlight-item">
                                <div className="highlight-number">13</div>
                                <div className="highlight-label">GitHub Followers</div>
                            </div>
                        </div>

                        <div className="about-quote">
                            <p>"Messing around internet and web | Learner"</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
