import React from 'react';
import './Header.css';
import githubLogo from './GitHubLogo.png'
export default function Header() {

    let anchor = document.getElementById('about-section');

    

    return (
        <div className="navbar">
            <div className="navbar-title">
                Jahanzeb Hussain
            </div>
            <div className="navbar-links">
                <a href="#about-section">
                    About
                </a>
                <a href="#projects-section">
                    Projects
                </a>
                <p>
                    Contact Me
                </p>
                <a href="https://github.com/jahn-1" target="_blank" rel="noreferrer">
                    <img src={githubLogo} alt="githubLogo" className="githubLogo"/>
                </a>

                
            </div>

        </div>
    )
}
