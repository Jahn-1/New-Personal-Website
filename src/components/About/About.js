import React from 'react'
import './About.css'
import "@lottiefiles/lottie-player";
import gif from './About.gif'
export default function About() {
    return (
        <div className="about-section">
            <div className="section-title" id="about-section">
                About
            </div>
            {/* <img src={gif} /> */}
            <div class="about-content">
                <div className="about-text">
                    <p>
                        Hey there! I'm a second year Computer Science student studying at the 
                        University Of New South Wales.
                    </p>
                </div>
                <div className="about-image">
                    <img src={gif} alt="gif"/>
                </div>
            </div>
        </div>
        
    )
}
