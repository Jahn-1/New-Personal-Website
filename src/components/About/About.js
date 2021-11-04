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
                        My fascination for technology started at a young age starting with one of the earlier nintendo models.
                        This fascination grew and i enjoyed learning how computers work at a very basic level in high school Technology class
                        and now have happily chosen to pursue it.
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
                        <Card flavour="yellow" question="Languages I Can Speak" answer="English (mothertounge), Urdu"/>

                    </div>
                    <div className="cards">
                        <Card flavour="red" question="Favourite Sport" answer="Soccer "/>
                        <Card flavour="green" question="A Quote I Like" answer='"Just do it" - Nike'/>
                    </div>
                </div>
                <div className="about-image">
                    <img src={gif} alt="gif"/>
                </div>
            </div>
        </div>
    )
}
