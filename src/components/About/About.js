import React from 'react'
import './About.css'
import gif from './About.gif'
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
                        My fascination for technology started at a young age starting with my parents buying an earlier Nintendo model. At the time,
                        my father told me that all these "computer things" work with 0's and 1's. So I was amazed that the Mario game I was playing on my
                        Nintendo was working with just 0's and 1's and had to find out more. 
                    </p>
                    <p>
                        During my early teens, I used to play a video game called Minecraft and ended up creating a server with a small mini-game that people would play.
                        People could buy extra special kits in this mini-game of mine with membership. I had ended up making a couple hundred dollars, which
                        was a lot to me at the time. 
                    </p>
                    <p>
                        Even though I had discontinued my server to continue my studies in school, I learnt a fair bit whilst
                        fiddling around with some code to get what I had wanted in the server (with a lot of instructions from the developers) or even uploading files to the server
                        with an FTP console. 
                    </p>
                    <p>
                        My fascination grew whilst learning at a very basic level how computers work during my high school technology class. We learnt that programmers are people
                        that manipulate the 0's and 1's (mentioned earlier) in such a way that makes, for example, Mario jump. 
                        Ever since then I have happily chosen to pursue becoming an avid programmer 
                        and problem solver.
                    </p>
                    <p>
                        I am now working on a two part project. The objective of the project 
                        is to create an E-commerce website. But before that, I'll have to make a system that allows
                        a client to create, edit and delete products, shipping prices and coupons.
                    </p>
                    <div className="cards">
                        <Card flavour="blue" question="Favourite Movie" answer="The Dark Knight"/>
                        <Card flavour="yellow" question="Languages I Can Speak" answer="English, Urdu"/>
                    </div>
                    <div className="cards">
                        <Card flavour="red" question="Favourite Sport" answer="Soccer"/>
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
