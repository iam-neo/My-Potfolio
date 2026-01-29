import { useState } from 'react';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        // Clear error when user starts typing
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    const validateForm = () => {
        const newErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = 'Name is required';
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Please enter a valid email';
        }

        if (!formData.message.trim()) {
            newErrors.message = 'Message is required';
        }

        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = validateForm();

        if (Object.keys(newErrors).length === 0) {
            // Form is valid - in a real app, you'd send this to a backend
            alert(`Thank you ${formData.name}! Your message has been received. I'll get back to you soon!`);
            setFormData({ name: '', email: '', message: '' });
        } else {
            setErrors(newErrors);
        }
    };

    return (
        <section id="contact" className="contact">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Get In Touch</h2>
                    <div className="title-underline"></div>
                    <p className="section-subtitle">
                        Have a project in mind? Let's work together to bring your ideas to life
                    </p>
                </div>

                <div className="contact-content">
                    <div className="contact-info">
                        <div className="info-card">
                            <div className="info-icon">📧</div>
                            <h3>Email</h3>
                            <p>Drop me an email anytime</p>
                            <a href="mailto:hello@nirmalmagar.com" className="info-link">
                                hello@nirmalmagar.com
                            </a>
                        </div>

                        <div className="info-card">
                            <div className="info-icon">💼</div>
                            <h3>LinkedIn</h3>
                            <p>Let's connect professionally</p>
                            <a
                                href="https://www.linkedin.com/in/nirmal-mgr/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="info-link"
                            >
                                linkedin.com/in/nirmal-mgr
                            </a>
                        </div>

                        <div className="info-card">
                            <div className="info-icon">🐙</div>
                            <h3>GitHub</h3>
                            <p>Check out my code</p>
                            <a
                                href="https://github.com/iam-neo"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="info-link"
                            >
                                github.com/iam-neo
                            </a>
                        </div>

                        <div className="info-card">
                            <div className="info-icon">📸</div>
                            <h3>Instagram</h3>
                            <p>Follow my journey</p>
                            <a
                                href="https://www.instagram.com/ni.nirmal/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="info-link"
                            >
                                @ni.nirmal
                            </a>
                        </div>
                    </div>

                    <form className="contact-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Your Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className={errors.name ? 'error' : ''}
                                placeholder="John Doe"
                            />
                            {errors.name && <span className="error-message">{errors.name}</span>}
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Your Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className={errors.email ? 'error' : ''}
                                placeholder="john@example.com"
                            />
                            {errors.email && <span className="error-message">{errors.email}</span>}
                        </div>

                        <div className="form-group">
                            <label htmlFor="message">Your Message</label>
                            <textarea
                                id="message"
                                name="message"
                                rows="5"
                                value={formData.message}
                                onChange={handleChange}
                                className={errors.message ? 'error' : ''}
                                placeholder="Tell me about your project or just say hi!"
                            ></textarea>
                            {errors.message && <span className="error-message">{errors.message}</span>}
                        </div>

                        <button type="submit" className="btn btn-primary submit-btn">
                            Send Message
                        </button>
                    </form>
                </div>
            </div>

            <footer className="footer">
                <div className="footer-content">
                    <p>&copy; 2026 Nirmal Magar. Built with React & ❤️</p>
                    <div className="footer-links">
                        <a href="https://github.com/iam-neo" target="_blank" rel="noopener noreferrer">GitHub</a>
                        <a href="https://www.linkedin.com/in/nirmal-mgr/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                        <a href="https://www.instagram.com/ni.nirmal/" target="_blank" rel="noopener noreferrer">Instagram</a>
                    </div>
                </div>
            </footer>
        </section>
    );
};

export default Contact;
