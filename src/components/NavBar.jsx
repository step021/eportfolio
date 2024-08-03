import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import {faLinkedin} from '@fortawesome/free-brands-svg-icons';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';
import {faBars} from '@fortawesome/free-solid-svg-icons';
import {faMoon} from '@fortawesome/free-solid-svg-icons';
import {faSun} from '@fortawesome/free-solid-svg-icons';
import '../styles/NavBar.css';
import '../styles/Main.css';

function NavBar() {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            setIsDarkMode(true);
            document.body.classList.add('dark-mode');
        }
        // Set menu state based on window width
        const handleResize = () => {
            if (window.innerWidth > 920) {
                setMenuOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };

    }, []);

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
        if (!isDarkMode) {
            document.body.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark');
        } else {
            document.body.classList.remove('dark-mode');
            localStorage.setItem('theme', 'light');
        }
    };
    

    

    return(
        <header className='NavBar'>
            <div className='Title'>
                <h1>Sebastian Stephens</h1>
            </div>
            <div className='Menu' onClick={() => setMenuOpen(!menuOpen)}>
                <FontAwesomeIcon icon={faBars} className="faBars"/>
            </div>
            <ul className='Sections'>
                <Link to='about'smooth={true} offset={-90} duration={500}>About</Link>
                <Link to='skills'smooth={true} offset={-90} duration={500}>Skills</Link>
                <Link to='projects'smooth={true} offset={-90} duration={500}>Projects</Link>
                <Link to='experience'smooth={true} offset={-90} duration={500}>Experience</Link>
                <Link to='education'smooth={true} offset={-90} duration={500}>Education</Link>
            </ul>
            <ul className={menuOpen ?'Dropdown' : 'none'}>
                <Link to='about'smooth={true} offset={-90} duration={500}>About</Link>
                <Link to='skills'smooth={true} offset={-90} duration={500}>Skills</Link>
                <Link to='projects'smooth={true} offset={-90} duration={500}>Projects</Link>
                <Link to='experience'smooth={true} offset={-90} duration={500}>Experience</Link>
                <Link to='education'smooth={true} offset={-90} duration={500}>Education</Link>
                <a href='http://www.github.com/step021' target='_blank' rel='noreferrer'>
                    <FontAwesomeIcon icon={faGithub} className='social-icon'/>  Github
                </a>
            </ul>
            <div className='External'>
                <button onClick={toggleTheme} className='Theme-Button'>
                    {isDarkMode ? <FontAwesomeIcon icon={faSun}/> : <FontAwesomeIcon icon={faMoon}/>}
                </button>
                <a href='http://www.linkedin.com/in/sebastianxstephens' target='_blank' rel='noreferrer'>
                    <FontAwesomeIcon icon={faLinkedin} className='social-icon'/>
                </a>
                <a href='http://www.github.com/step021' target='_blank' rel='noreferrer'>
                    <FontAwesomeIcon icon={faGithub} className='social-icon'/>
                </a>
                <a href='mailto:sebastianxavierstephens@gamil.com' target='_blank' rel='noreferrer'>
                    <FontAwesomeIcon icon={faEnvelope} className='social-icon'/>
                </a>
            </div>
            
        </header>

    );
}
export default NavBar;