import React from 'react';
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import './Contact.css'
import gitHubLogo from './GitHub_Logo.png'
import { Alert, Button, Collapse, IconButton } from '@mui/material';
import { FaLinkedin } from 'react-icons/fa';
export default function Contact() {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [message, setMessage] = useState();
    const [displaySuccess, setDisplaySuccess] = useState(false)
    const handleSubmit = (e) => {
        console.log(name);
        console.log(email);
        console.log(message);
        const nameField = document.getElementById('name');
        const emailField = document.getElementById('email');
        const messageField = document.getElementById('message');
        const inputs = [nameField, emailField, messageField];
        inputs.forEach(input => {
            input.disabled = true;
        })

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
                <Alert action={
                    <IconButton
                    aria-label="close"
                    color="inherit"
                    size="small"
                    onClick={() => {
                        setDisplaySuccess(false)
                    }}
                    >
                        &times;
                    </IconButton>}
                    severity="success" id="alert">
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
                />
                <TextField
                    id="email"
                    type="email"
                    name="email"
                    label="Email"
                    onChange={e => setEmail(e.target.value)}
                    value={email} 
                    required
                />
                <TextField
                    id="message"
                    label="Message"
                    multiline
                    rows={4}
                    onChange={e => setMessage(e.target.value)}
                    value={message}
                    required
                />
                <Button variant="contained" color="success" type="submit"> Send Message! </Button>
            </form>
            <h3 className="helper-text">
                You can also find my Github and LinkedIn here:
            </h3>
            <div id="logos">
                <FaLinkedin className="linkedin-logo"/>
                <img src={gitHubLogo} className="github-logo" alt="github-logo"/>
            </div>
            

        </div>
    )
}