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
                <p>
                    About
                </p>
                <p>
                    Projects
                </p>
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
