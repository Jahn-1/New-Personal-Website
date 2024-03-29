import React from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css'; 
import { FaDatabase, FaBriefcase, FaReact, FaUniversity, FaShoppingCart } from 'react-icons/fa';

function TimeLine() {
    return (<>    
    <VerticalTimeline>
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2021"
            iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
            icon={<FaReact />}
            
        >
            <h3 className="vertical-timeline-element-title">Personal website</h3>
            <h4 className="vertical-timeline-element-subtitle">Jahanzeb.info</h4>
            <p>
                Personal website with a brief introduction to who i am, current career progress
                and github account. 
            </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2021"
            iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
            icon={<FaDatabase />}
            
        >
            <h3 className="vertical-timeline-element-title">Create database user interface</h3>
            <h4 className="vertical-timeline-element-subtitle">For an E-commerce Client</h4>
            <p>
                This webapp will be a user-friendly system for an E-commerce client to create, edit and delete products, shipping prices and coupons.
            </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2022-2023"
            iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
            icon={<FaBriefcase />}
        >
            <h3 className="vertical-timeline-element-title">Internship</h3>
            <h4 className="vertical-timeline-element-subtitle">Australia, NSW</h4>
            <p>
                Complete a software engineering Internship in Australia.
            </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2023"
            contentArrowStyle={{ borderLeft: '7px solid  rgb(33, 150, 243)' }}
            iconStyle={{ background: 'rgb(255, 217, 0)', color: '#fff' }}
            icon={<FaShoppingCart />}
        >
            <h3 className="vertical-timeline-element-title">Create An E-commerce Website</h3>
            <h4 className="vertical-timeline-element-subtitle">Client Website</h4>
            <p>
                Create an E-commerce website for the client whilst integrating changes they make on the interface.
            </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2023"
            iconStyle={{ background: 'rgb(255,0,0)', color: '#fff' }}
            icon={<FaUniversity />}
        >
            <h3 className="vertical-timeline-element-title">Bachelor Of Computer Science</h3>
            <h4 className="vertical-timeline-element-subtitle">UNSW</h4>
            <p>
            Complete Computer Science Degree at University Of New South Wales.
            </p>
        </VerticalTimelineElement>
    </VerticalTimeline>
        
    </>)
}

export default TimeLine;
