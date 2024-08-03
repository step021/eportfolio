import '../styles/Education.css';
import Gatech from '../media/Gatech.png';
import Gulliver from '../media/GP.png';

function Education() {
    return (
      <main className="EducationContainer">
        <h1 className='EducationTitle'>Education</h1>
        <span className='Mission'> Institutions where I gained</span>
        <span className='Mission1'> KNOWLEDGE.</span>
        <div className='EducationSection'>
          <a href="https://www.gatech.edu/" className='EducationWrapper' target="_blank" rel="noopener noreferrer">
            <div className='Education'>
              <div className='EducationImage'>
                <img src={Gatech} alt="Georgia Tech" />
                <div className='EducationImageOverlay'>
                  <h2 >Georgia Institute of Technology</h2>
                  <h3>Bachelor of Science | Computer Science | Minor in Economics | Intelligence and Info/InterNetworks</h3>
                  <h3>August 2021 - Present, Atlanta, GA</h3>
                </div>
              </div>
              <p>GPA: 3.62/4</p>
              <p>Relevant Coursework: Data Structures & Algorithms, Object-Oriented Programming Java, Computer Organization, Linear Algebra, Machine Learning, Artificial Intelligence, Advanced Microeconomics, Automata and Complexity, Agile Methodologies</p>
              <p>Honors: Faculty Honors Spring 2023 + Spring 2024.</p>
            </div>
          </a>
          <a href="https://www.gulliverprep.org/" className='EducationWrapper' target="_blank" rel="noopener noreferrer">
            <div className='Education'>
              <div className='EducationImage'>
                <img src={Gulliver} alt="GP" />
                <div className='EducationImageOverlay'>
                  <h2 >Gulliver Preparatory School</h2>
                  <h3>HS Diploma </h3>
                  <h3>August 2017 - May 2021, Miami, FL</h3>
                </div>
              </div>
              <p>GPA: 5.82/6.33</p>
              <p>Relevant Coursework: AP Computer Science Principles, AP Calculus BC,  AP Microeconomics, AP Macroeconomics, AP Physics C, AP Chemistry, AP Psychology, AP French, AP English Language, AP English Literature, AP US History, AP Environmental Science, AP Government</p>
              <p>Honors: National AP Scholar, 1510 SAT</p>
            </div>
          </a>
        </div>
      </main>
    );
  }
  export default Education;