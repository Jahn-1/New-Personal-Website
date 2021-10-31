import React from 'react';
import './Header.css';
import githubLogo from './GitHubLogo.png'
export default function Header() {

    return (
        <div className="navbar">
            <div className="navbar-title">
                Jahanzeb Hussain
            </div>
            <div className="navbar-links">
                <a href="#about-section" className="navbar-link">
                    About
                </a>
                <a href="#projects-section" className="navbar-link">
                    Projects
                </a> 
                <a href="#contact-me-section" className="navbar-link">
                    Contact Me
                </a>                
                <a href="https://github.com/jahn-1" target="_blank" rel="noreferrer">
                    <img src={githubLogo} alt="githubLogo" className="githubLogo"/>
                </a>
            </div>

        </div>
    )
}
