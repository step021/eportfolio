import '../styles/Projects.css';
import AF from '../media/AF.png';
import Frogger from '../media/frogger.jpg';
import Stocks from '../media/stocks.webp';
import WeatherApp from '../media/WeatherApp.png';
import chess from '../media/chess.png';
import minimax from '../media/minmax.png';
import optitrack from '../media/optitrack.jpg';
import react from '../media/react.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { useState,useEffect } from 'react';

function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [expandedProject, setExpandedProject] = useState(null);
  const projects = [
    {
      title: 'Reserving Automation Web App',
      image: AF,
      skills: ['React.js', 'HTML', 'CSS', 'Python', 'Pandas', 'Numpy', 'Django', 'DjangoRest'],
      categories: ['Web Applications','Economics'],
      link: 'https://github.com/step021/AFReservingWebsite',
      description: 'This project is a web application that automates the reserving process for the company Actuarial Factor. The application uses a Django backend and a React frontend. The backend uses Django Rest Framework to communicate with the frontend. The frontend uses React to display the data and allow the user to interact with the data. The application uses Pandas and Numpy to manipulate the data and perform calculations. ',
    },
    {
      title: 'Personal Eportfolio',
      image: react,
      skills: ['React.js', 'HTML', 'CSS'],
      categories: ['Web Applications'],
      link: 'https://github.com/step021/Eportfolio-Sebastian-Stephens',
      description: 'This project is a personal eportfolio that showcases my projects, skills, and so much more. The eportfolio uses React to display the data and allow the user to interact with the data. The eportfolio uses HTML and CSS to style the data and make it visually appealing.',
    },
    {
      title: 'Financial Literacy/Analysis Web App',
      image: Stocks,
      skills: ['React.js', 'HTML', 'CSS', 'Python', 'Django', 'DjangoRest', 'Finance'],
      categories: ['Economics', 'Web Applications'],
      description: 'This project is a web application that teaches financial literacy and allows the user to analyze financial data and stocks. The application uses a Django backend and a React frontend. The backend uses Django Rest Framework to communicate with the frontend. The frontend uses React to display the data and allow the user to interact with the data. The application uses Pandas and Numpy to manipulate the data and perform calculations. The application uses finance concepts to teach the user about financial literacy.',
      link: 'https://github.com/step021/FinanceWebApp',
    },
    {
      title: 'Chess Game AI',
      image: chess,
      skills: ['Python', 'Chess', 'Minimax', 'Alpha-Beta', 'CNN', 'Deep Learning', 'AI'],
      categories: ['AI/ML', 'Web Applications'], 
      description: 'This project is a chess game AI that uses the minimax algorithm with alpha-beta pruning to determine the best move. The AI uses a convolutional neural network to evaluate the board and determine the best move. The AI uses deep learning to learn from the data and improve its performance. The AI uses the minimax algorithm with alpha-beta pruning to search the game tree and determine the best move.',
      link: 'https://github.com/step021/ChessApp',
    },
    {
      title: 'Data Structures/Algs Web App',
      image: minimax,
      skills: ['Python', 'Data Structures', 'Algorithms', 'React.js', 'HTML', 'CSS', 'ML/AI'],
      categories: ['AI/ML', 'Web Applications'],
      description: 'This project is a web application that teaches data structures and algorithms. The application uses a Django backend and a React frontend. The backend uses Django Rest Framework to communicate with the frontend. The frontend uses React to display the data and allow the user to interact with the data. The application uses Pandas and Numpy to manipulate the data and perform calculations. The application uses machine learning and artificial intelligence concepts to teach the user about data structures and algorithms.',
      link: 'https://github.com/step021/DSandAlgsApp',
    },
    {
      title: 'Frogger Game Android Application',
      image: Frogger,
      skills: ['Java', 'Android Studio', 'Agile'],
      categories: ['All'],
      description: 'This project is an Android application that is a clone of the classic game Frogger. This application was created in a team of 5 people using agile methodologies and a test-driven development approach. It is programmed in Java and uses Android Studio to create the application.',
      link: 'http://www.github.com/step021',
    },
    {
      title: 'Weather App',
      image: WeatherApp,
      skills: ['Django', 'HTML', 'CSS', 'Weather API'],
      categories: ['Web Applications', ],
      description:  'This project is a web application that displays the weather for a given location. The application uses a Django backend and HTML and CSS to display the data. The application uses a weather API to get the weather data for the location.',
      link: 'https://github.com/step021/WeatherApp',
    },
    {
      title: 'VIP OptiTrack Project',
      image: optitrack,
      skills: ['Docker', 'OptiTrack'],
      categories: ['All',],
      description: 'This project is a VIP GaTech Project that involved setting up an OptiTrack system in an arena modeled after the GaTech robotarium. This involved debugging docker containers containing the software and calibrating the OptiTrack system in Motive. It also required extensive documentation to be written on the setup of the system.',
      link: 'http://www.github.com/step021',
    },
  ];
  useEffect(() => {
    // Disable scrolling when a project is expanded
    if (expandedProject) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }

    // Clean up the effect when the component is unmounted
    return () => document.body.classList.remove('no-scroll');
  }, [expandedProject]);

  const getButtonStyle = (category) => ({
    color: selectedCategory === category ? 'white' : 'black',
  });

  const filteredProjects = projects.filter(project => 
    selectedCategory === 'All' || project.categories.includes(selectedCategory)
  );

  const handleExpandProject = (project) => {
    setExpandedProject(project);
  }

  const handleClose = () => {
    setExpandedProject(null);
  };


  return (
    <main className='ProjectsContainer'>
      <h1 className='ProjectsTitle'>Projects</h1>
      <span className='Mission'> I believe creating projects related to my passions is </span>
      <span className='Mission1'> IMPERATIVE.</span>

      <div className='MenuBar'>
        <button style={getButtonStyle('All')} onClick={() => setSelectedCategory('All')}>All</button>
        <button style={getButtonStyle('AI/ML')} onClick={() => setSelectedCategory('AI/ML')}>AI/ML</button>
        <button style={getButtonStyle('Web Applications')} onClick={() => setSelectedCategory('Web Applications')}>Web Applications</button>
        <button style={getButtonStyle('Economics')} onClick={() => setSelectedCategory('Economics')}>Economics</button>
      </div>

      <section className='ProjectsSection'>
        {filteredProjects.map((project, index) => (
          <div key={index} className='Project' onClick={() => handleExpandProject(project)}>
            <img src={project.image} alt={project.title}/>
            <div className='SkillsInvolved'>
              {project.skills.map((skill, idx) => (
                <h3 key={idx}>{skill}</h3>
              ))}
            </div>
            <h2>{project.title}</h2>
            <div className='desc'><p>{project.description}</p></div>
  
          </div>
        ))}
      </section>
      {expandedProject && (
        <div className='ExpandedProject'>
          <div className='ExpandedProjectContent'>
            <img src={expandedProject.image} alt={expandedProject.title} />
            <div className='SkillsInvolved'>
              {expandedProject.skills.map((skill, idx) => (
                <h3 key={idx}>{skill}</h3>
              ))}
            </div>
            <h2>{expandedProject.title}</h2>
            <p>{expandedProject.description}</p>
            <a href={expandedProject.link} target='_blank' rel='noreferrer'>
              <FontAwesomeIcon icon={faGithub} /> View Code
            </a>
            <button onClick={handleClose}>X</button>
          </div>
        </div>
      )}
    </main>
  );
}

export default Projects;