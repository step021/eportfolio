import '../styles/Experience.css';
function Experience() {
  return (
    <main className='ExperienceContainer'>
      <h1 className='ExperienceTitle'>Experience</h1>
      <span className='Mission'> I value my personal growth and my </span>
      <span className='Mission1'> CAREER.</span>
      <div className='ExperienceSection'>
      <a href="https://www.actuarialfactor.com" className='ExperienceWrapper' target="_blank" rel="noopener noreferrer">
          <div className='Experience'>
            <h2>Software Engineer Intern</h2>
            <h3>June 2022 - August 2022; June 2024 - December 2024</h3>
            <h3>Company: Actuarial Factor</h3>
            <p>Engineered a Python-based automation tool leveraging the Chain Ladder method to streamline loss reserving processes, boosting accuracy and operational efficiency. Automated key actuarial reserving tasks, cutting manual effort by over 50% and enhancing productivity across actuarial teams. Integrated advanced statistical models to empower data-driven decision-making in collaboration with actuarial experts. </p>
            <div className='SkillsInvolvedWrapper'>
              <h3>Skills:</h3>
              <div className='SkillsInvolved1'>
                <h3>Python</h3>
                <h3>Data Analytics</h3>
                <h3>Software Development</h3>
                <h3>Agile</h3>
                <h3>Microsoft Excel</h3>
                <h3>Actuarial Science</h3>
              </div>
            </div>
          </div>
        </a>
        <a href="https://www.gatech.edu/" className='ExperienceWrapper' target="_blank" rel="noopener noreferrer">
          <div className='Experience'>
            <h2>Robotics Student Researcher</h2>
            <h3>August 2023 - December 2024</h3>
            <h3>Company: Georgia Institute of Technology</h3>
            <p>Directed a subteam of 5+ members to establish a cutting-edge Robotarium in Georgia Tech’s Research Building. Authored comprehensive user documentation for the OptiTrack motion capture system, expediting system adoption and deployment. Debugged Docker containers and calibrated OptiTrack in Motive, ensuring consistent performance for robot tracking in arena environments. Conducted Matlab-based backend tests, confirming precise robot location tracking and motion accuracy. </p>
            <div className='SkillsInvolvedWrapper'>
              <h3>Skills:</h3>
              <div className='SkillsInvolved1'>
                <h3>Leadership</h3>
                <h3>Robotics</h3>
                <h3>Research</h3>
                <h3>Technical Reporting</h3>
                <h3>OptiTrack</h3>
                <h3>Docker</h3>
              </div>
            </div>
          </div>
        </a>
        <a href="https://www.assurant.com" className='ExperienceWrapper' target="_blank" rel="noopener noreferrer">
          <div className='Experience'>
            <h2>Behavioral Data Analytics Intern</h2>
            <h3>June 2023 - August 2023</h3>
            <h3>Company: Assurant</h3>
            <p>Optimized data visualization load times by converting formula language in PowerBI to SQL, improving efficiency by 11% for the Data Analytics team. Played a pivotal role in enhancing the project data report, which is now a key resource used by scrum masters and employees. Collaborated with the Global Data Analytics scrum team, gaining expertise in agile methodologies and Microsoft data analytics tools. </p>
            <div className='SkillsInvolvedWrapper'>
              <h3>Skills:</h3>
              <div className='SkillsInvolved1'>
                <h3>SQL</h3>
                <h3>Power BI</h3>
                <h3>Data Visualization</h3>
                <h3>Data Analytics</h3>
                <h3>Agile Methodologies</h3>
                <h3>Microsoft Data Analytics Tools</h3>
              </div>
            </div>
          </div>
        </a>
        <a href="https://www.footlocker.com" className='ExperienceWrapper' target="_blank" rel="noopener noreferrer">
          <div className='Experience'>
            <h2>Sales Associate</h2>
            <h3>June 2022 - August 2022</h3>
            <h3>Company: Foot Locker</h3>
            <p>Sold shoes to customers and dealt with inventory organization.</p>
            <div className='SkillsInvolvedWrapper'>
              <h3>Skills:</h3>
              <div className='SkillsInvolved1'>
                <h3>Sales</h3>
                <h3>Customer Service</h3>
                <h3>Inventory Management</h3>
              </div>
            </div>
          </div>
        </a>
      </div>
    </main>
  );
}
export default Experience;