import React from 'react'
import './Card.css'
export default function Card({ flavour, question, answer }) {
    let frontClass;
    let backClass;
    switch (flavour) {
        case "blue":
            frontClass = "flip-card-front-blue";
            backClass = "flip-card-front-blue";
            break;
        case "yellow":
            frontClass = "flip-card-front-yellow";
            backClass = "flip-card-front-yellow";
            break;
        case "green":
            frontClass = "flip-card-front-green";
            backClass = "flip-card-front-green";
            break;
        case "red":
            frontClass = "flip-card-front-red";
            backClass = "flip-card-front-red";
            break;
        default:
            frontClass = "flip-card-front-default";
            break;
    }
    return (
        <div className="flip-card">
            <div className="flip-card-inner">
                <div className={`${frontClass} flip-card-front`}>
                    <h3>
                        {question}
                    </h3>
                </div>
                <div className={`${backClass} flip-card-back`}>
                    <h3>
                        {answer}
                    </h3>
                </div>
            </div>
        </div>
    )
}
