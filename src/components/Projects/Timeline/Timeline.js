import React from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css'; 
import { FaDatabase, FaBitbucket, FaBriefcase, FaReact, FaUniversity, FaShoppingCart } from 'react-icons/fa';

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
                Personal website with an brief introduction to who i am, current career progress
                and github account. 
            </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
            date="2021"
            iconStyle={{ background: 'rgb(255, 217, 0)', color: '#fff' }}
            icon={<FaDatabase />}
            
        >
            <h3 className="vertical-timeline-element-title">Create database interface</h3>
            <h4 className="vertical-timeline-element-subtitle">For an E-commerce Client</h4>
            <p>
                This webapp will be a user friendly method for a E-commerce client to create, edit and delete items/coupons.
            </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2022"
            iconStyle={{ background: 'rgb(255,0,0)', color: '#fff' }}
            icon={<FaShoppingCart />}
        >
            <h3 className="vertical-timeline-element-title">Create An E-commerce Website</h3>
            <h4 className="vertical-timeline-element-subtitle">Client Website</h4>
            <p>
                Create an E-commerce website for client whilst integrating changes they made
                on the previously made database interface.
            </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2021"
            iconStyle={{ background: 'rgb(255,0,0)', color: '#fff' }}
            icon={<FaBitbucket />}
        >
            <h3 className="vertical-timeline-element-title">Bitbucket</h3>
            <h4 className="vertical-timeline-element-subtitle">Bitbucket.org</h4>
            <p>
            To create a useful extension for bitbucket users.
            </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2022"
            iconStyle={{ background: 'rgb(255,0,0)', color: '#fff' }}
            icon={<FaBriefcase />}
        >
            <h3 className="vertical-timeline-element-title">Internship</h3>
            <h4 className="vertical-timeline-element-subtitle">Australia, NSW</h4>
            <p>
            Get an Internship in an Australian bussiness on software engineering (backend).
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
