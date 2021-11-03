import React from 'react';
import './Header.css';
import githubLogo from './GitHubLogo.png'
import {useState} from 'react';
import {FaBars, FaTimes} from 'react-icons/fa';
import {Divider, SwipeableDrawer} from '@mui/material';
import {Box} from '@mui/system';

export default function Header() {
    const [state, setState] = React.useState({top: false});

    const toggleDrawer = (anchor, open) => (event) => {
        if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setState({
            ...state,
            [anchor]: open
        });
    };

    const list = (anchor) => (
        <Box sx={{
				width: 'auto',
				height: '100vh',
				margin: '44px 0 0 0',
				backgroundColor: '#0c3645',
				color: 'white',
				textAlign: 'center',
				textDecoration: 'none',
				display: 'flex',
				flexDirection: 'column'
            }}
            role="presentation"
            onClick={
                () => {
                    setDisplayBars(true)
                    setState({
                        'top': false
                    })
                }
            }
            onKeyDown={
                toggleDrawer(anchor, false)
		}>
			<a href="#about-section" className="mobile-navbar-links">
				About
			</a>
            <Divider/>

            <a href="#projects-section" className="mobile-navbar-links">
                Projects
            </a>
            <Divider/>

            <a href="#contact-me-section" className="mobile-navbar-links">
                Contact Me
            </a>
            <Divider/>

            <a href="https://github.com/jahn-1" target="_blank" rel="noreferrer">
                <img src={githubLogo}
                    alt="githubLogo"
                    className="githubLogo"/>
            </a>
            <Divider/>
        </Box>
    );
    const [displayBars, setDisplayBars] = useState(true);
    return (
        <>
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
                        <img src={githubLogo}
                            alt="githubLogo"
                            className="githubLogo"/>
                    </a>
                </div>
                {
					displayBars && <FaBars className="hamburger-menu"
						onClick={
							() => {
								setDisplayBars(!displayBars)
								setState({
									'top': true
								})
							}
						}

					/>
            	}
                {
					!displayBars && <FaTimes className="hamburger-menu"
						onClick={
							() => {
								setDisplayBars(!displayBars)
								setState({
									'top': false
								})
							}
						}	
					/>
            	}
                <SwipeableDrawer 
					anchor={'top'}
                    open={
                        state['top']
                    }
                    onClose={
                        toggleDrawer('top', false)
                    }
                    onOpen={
                        toggleDrawer('top', true)
                	}
				>
					{
						list('top')
					} 
				</SwipeableDrawer>
            </div>

        </>
    )
}
