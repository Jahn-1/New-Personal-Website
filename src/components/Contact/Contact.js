import React from 'react';
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import './Contact.css'
import gitHubLogo from './GitHub_Logo.png'
import { Alert, Button, Collapse } from '@mui/material';
import { FaLinkedin } from 'react-icons/fa';
export default function Contact() {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [message, setMessage] = useState();
    const [displaySuccess, setDisplaySuccess] = useState(false)
    const [disabled, setDisabled] = useState(false)
    const handleSubmit = (e) => {
        setDisabled(true)
        setDisplaySuccess(true)
        e.preventDefault();
    }

    return (
        <div id="contact-me-section">
            <div className="contact-me-title">
                <h3>
                    Contact me
                </h3>
            </div>
            <Collapse in={displaySuccess}>
                <Alert severity="success" id="alert">
                    Thanks for the message! I'll get back to you as soon as possible (if applicable). Have a nice day!
                </Alert>
            </Collapse>
            <form onSubmit={handleSubmit}>
                <input type="hidden" id="bot-protection" />
                <input type="hidden" name="contact" value="contact" />
                <TextField
                    id="name"
                    type="text"
                    name="name"
                    label="Name"
                    onChange={e => setName(e.target.value)}
                    value={name}
                    autocomplete="off"
                    required
                    disabled={disabled}
                />
                <TextField
                    id="email"
                    type="email"
                    name="email"
                    label="Email"
                    onChange={e => setEmail(e.target.value)}
                    value={email} 
                    required
                    disabled={disabled}
                />
                <TextField
                    id="message"
                    label="Message"
                    multiline
                    rows={4}
                    onChange={e => setMessage(e.target.value)}
                    value={message}
                    required
                    disabled={disabled}
                />
                <Button variant="contained" color="success" type="submit" disabled={disabled}> Send Message! </Button>
            </form>
            <h3 className="helper-text">
                You can also find me on Github and LinkedIn here:
            </h3>
            <div className="logos">
                <a href="https://github.com/jahn-1" target="_blank" rel="noreferrer">
                    <img src={gitHubLogo} className="github-logo" alt="github-logo"/>
                </a>
                <a href="https://www.linkedin.com/in/jahanzeb-hussain-427a9a202" target="_blank" rel="noreferrer">
                    <FaLinkedin className="linkedin-logo"/>
                </a>
            </div>
            <h1 className="final-text">
                🎉 Thanks for checking out my page! Have a nice day! 🎉
            </h1>

        </div>
    )
}