import '../styles/Projects.css';
import AF from '../media/AF.png';
import WeatherApp from '../media/WeatherApp.png';
import optitrack from '../media/optitrack.jpg';
import react from '../media/react.jpg';
import assurant from '../media/assurant.jpg';
import nfl from '../media/nfl.webp';
import sql from '../media/sql.jpg';
import chat from '../media/chat.png';
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
      skills: ['Python', 'Pandas', 'Numpy', 'Excel'],
      categories: ['Web Applications','Data'],
      link: 'https://github.com/step021/AFReservingWebsite',
      description: 'At Actuarial Factor LLC, I spearheaded the automation of the loss reserving process, transforming a traditionally manual and time-intensive workflow into an efficient, streamlined system. By leveraging Python, I developed scripts to automate data cleaning, calculations, and report generation, significantly reducing the time required to complete these tasks. This automation ensured consistency and accuracy in financial projections while allowing the team to focus on higher-level analysis. The project highlighted my ability to identify bottlenecks, implement effective solutions, and enhance operational efficiency through innovative use of technology. ',
    },
    {
      title: 'Georgia Tech OptiTrack Research Project',
      image: optitrack,
      skills: ['Docker', 'OptiTrack'],
      categories: ['All',],
      description: 'This project is a VIP GaTech Project that involved setting up an OptiTrack system in an arena modeled after the GaTech robotarium. This involved debugging docker containers containing the software and calibrating the OptiTrack system in Motive. It also required extensive documentation to be written on the setup of the system.',
      link: 'http://www.github.com/step021',
    },
    {
      title: 'Machine Learning NFL Score Predictor',
      image: nfl,
      skills: ['Python', 'PyTorch', 'Machine Learning', 'Data Analytics'],
      categories: ['AI/ML', 'Data'],
      description: 'Leveraged Kaggle NFL datasets and machine learning techniques to build models predicting football scores with high interpretability. Implemented neural networks, gradient boosting, and random forest algorithms, achieving significant predictive accuracy. Prepared large-scale data for training through advanced techniques like normalization, cleaning, and dimensionality reduction. Managed collaboration via Git workflows, hosting project repositories on GitHub to streamline team contributions.',
      link: 'https://github.com/step021/FinanceWebApp',
    },
    {
      title: 'Assurant Power BI Dashboard Optimization',
      image: assurant,
      skills: ['Power BI', 'SQL', 'Data Analytics', 'Data Visualization'],
      categories: ['Data'],
      description: 'During my internship at Assurant, I developed a comprehensive Power BI dashboard for the Behavioral Data Analytics team, enabling stakeholders to gain actionable insights from complex datasets. The dashboard streamlined data visualization by consolidating key performance indicators, trend analyses, and behavioral patterns into an intuitive, interactive interface. By leveraging advanced Power BI features, including dynamic filtering and drill-down capabilities, I ensured the dashboard was both user-friendly and capable of supporting strategic decision-making. This project not only enhanced data transparency but also empowered the team to identify trends and optimize processes more efficiently, showcasing my ability to translate raw data into impactful visual solutions.',
      link: 'https://github.com/step021/FinanceWebApp',
    },
    {
      title: 'Personal Eportfolio',
      image: react,
      skills: ['React.js', 'HTML', 'CSS'],
      categories: ['Web Applications'],
      link: 'https://github.com/step021/eportfolio',
      description: 'This project is a personal eportfolio that showcases my projects, skills, and so much more. The eportfolio uses React to display the data and allow the user to interact with the data. The eportfolio uses HTML and CSS to style the data and make it visually appealing.',
    },
    {
      title: 'Real Time Chat Application',
      image: chat,
      skills: ['Python', 'TCP/IP Protocols', 'Networking', 'Multithreading'],
      categories: ['Web Applications'],
      description: 'I developed a chat application with a client-server architecture using Python’s socket library and TCP/IP protocols. The client-side script, `tchatcli.py`, enabled users to connect to the server and execute commands like sending messages, subscribing to hashtags, and exiting the chat. The server-side script, `tchatsrv.py`, managed client connections, parsed commands, and ensured smooth message delivery. I leveraged threading to handle multiple client messages concurrently and utilized `threading.Lock()` to maintain thread safety, ensuring race conditions were avoided when accessing shared resources like `connected_clients` and `subscriptions`. Although the project was functional, it lacked user authentication, had message size restrictions, and wasn’t designed for scalability. Through this process, I gained a deeper understanding of networking protocols, multi-threading, and the importance of clear communication protocols. This project highlighted the challenges of managing concurrent client connections and parsing complex commands, reinforcing my skills in debugging and implementing robust networking solutions.',
      link: 'https://github.com/step021/real-time-chat-app',
    },
    {
      title: 'Mock Truck Database Application',
      image: sql,
      skills: ['SQL', 'Database Management', 'Data Analytics', 'Flaksk', 'React.js', 'MySQL'],
      categories: ['Data', 'Web Applications'],
      description: 'Designed a relational schema and physical database structure to store and manage critical trucking operations, ensuring data integrity and scalability. Created and optimized SQL queries, views, and stored procedures to streamline data retrieval and automate operational processes, improving system responsiveness. Developed an interactive React.js user interface to enable real-time data input and retrieval, enhancing usability and operator efficiency. Integrated Flask backend with SQLConnector module to handle secure, seamless communication between the application and the MySQL database.',
      link: 'https://github.com/step021/',
    },
    {
      title: 'Weather App',
      image: WeatherApp,
      skills: ['Django', 'HTML', 'CSS', 'Weather API'],
      categories: ['Web Applications', ],
      description:  'This project is a web application that displays the weather for a given location. The application uses a Django backend and HTML and CSS to display the data. The application uses a weather API to get the weather data for the location.',
      link: 'https://github.com/step021/WeatherApp',
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
        <button style={getButtonStyle('Data')} onClick={() => setSelectedCategory('Data')}>Data Analytics</button>
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