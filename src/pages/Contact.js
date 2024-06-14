import React, { useState } from 'react';
import './Contact.css';
import contactImage from '../assets/contact-me.jpg';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [flashMessage, setFlashMessage] = useState('');
    const [emailSent, setEmailSent] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Replace with actual API endpoint for sending emails
        const apiUrl = 'http://your-backend-api/send-email'; // Example API endpoint

        try {
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setFlashMessage('Message sent successfully!');
                setEmailSent(true);
                setFormData({
                    name: '',
                    email: '',
                    subject: '',
                    message: ''
                });
            } else {
                setFlashMessage('Failed to send message. Please try again later.');
            }
        } catch (error) {
            console.error('Error sending email:', error);
            setFlashMessage('Failed to send message. Please try again later.');
        }
    };

    return (
        <section id="contact" className="contact-section">
            <div className="contact-content">
                <img src={contactImage} alt="Contact" className="contact-image" />
                <form className="contact-form" onSubmit={handleSubmit}>
                    <h2>Contact Me</h2>
                    <div className="form-group">
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Name"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Email"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            id="subject"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            placeholder="Subject"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Message"
                            required
                        />
                    </div>
                    <button type="submit" className="submit-btn">
                        Send
                    </button>
                    {flashMessage && <div className="flash-message">{flashMessage}</div>}
                    {emailSent && (
                        <div className="email-sent-info">Check your email for the message details!</div>
                    )}
                </form>
            </div>
        </section>
    );
};

export default Contact;
