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
            <h2>Full Stack Development Intern</h2>
            <h3>June 2022 - August 2022; June 2024 - Present</h3>
            <h3>Company: Actuarial Factor</h3>
            <p>Spearheaded automation of the reserving process using Python, significantly reducing manual effort and increasing efficiency. Designed and implemented React-based frontend, enhancing usability and accessibility for actuaries. Developed a robust Django backend to securely manage and provide easy access to historical and current data tables, streamlining data retrieval and analysis. </p>
            <div className='SkillsInvolvedWrapper'>
              <h3>Skills:</h3>
              <div className='SkillsInvolved1'>
                <h3>Python</h3>
                <h3>React</h3>
                <h3>Django</h3>
                <h3>Chain Ladder</h3>
                <h3>Loss Reserving</h3>
                <h3>Actuarial Science</h3>
                <h3>Django Rest Framework</h3>
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
                <h3>PowerBI</h3>
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
            <p>Sold shoes to customers and dealt with inventory organization</p>
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