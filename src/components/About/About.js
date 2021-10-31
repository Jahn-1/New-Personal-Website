import React from 'react'
import './About.css'
import "@lottiefiles/lottie-player";
import gif from './About2.gif'
import Card from './Cards/Card';
export default function About() {

    return (
        <div className="about-section">
            <div className="section-title" id="about-section">
                <h3>
                    About
                </h3>
            </div>
            <div className="section-subtitle">
                <p>
                    A little bit about myself
                </p> 
            </div>
            
            <div className="about-content">
                <div className="about-text">
                    <p>
                        Hey there! I'm a second year Computer Science student studying at the 
                        University Of New South Wales.
                    </p>
                    <p>
                        I have a passion for learning new things and solving hard problems.
                    </p>
                    <p>
                        I am currently working on a two part project. The objective of the project 
                        is to create Ecommerce websites. But before that, I'll have to make a system that allows
                        a client to create, edit and delete items/coupons. 
                    </p>
                    <div className="cards">
                        <Card flavour="blue" question="Favourite Movie" answer="The Dark Knight"/>
                        <Card flavour="red" question="Favourite Sport" answer="Soccer "/>
                    </div>
                    <div className="cards">
                        <Card flavour="yellow" question="Favourite Movie" answer="The Dark Knight"/>
                        <Card flavour="green" question="Favourite Quote" answer="The Dark Knight"/>
                    </div>
                    <div className="cards-mobile">
                        <Card flavour="blue" question="Favourite Movie" answer="The Dark Knight"/>
                        <Card flavour="red" question="Favourite Sport" answer="Soccer "/>
                    </div>
                    <div className="cards-mobile">
                        <Card flavour="yellow" question="Favourite Movie" answer="The Dark Knight"/>
                        <Card flavour="green" question="Favourite Quote" answer="The Dark Knight"/>
                    </div>
                </div>
                <div className="about-image">
                    <img src={gif} alt="gif"/>
                </div>
            </div>
        </div>
    )
}
