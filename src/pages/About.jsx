import '../styles/About.css';
import Profile from '../media/Profile.jpg';

function About() {
  return (
    <main className="AboutContainer">
      <div className="About">
        <div className="AboutHeader">
          <span className="AboutIntro">I am </span>
          <span className="AboutName">Sebastian</span>
        </div>
        <div className="Description">
          <p>
          I am a student at the Georgia Institute of Technology pursuing a BS in Computer Science, specializing in Artificial Intelligence and Information/Internetworks. I have experience in full stack development in many languages such as Python, Java, and JavaScript.  I enjoy projects related to my passions in Machine Learning, data analysis, and economics. I am actively seeking full-time positions in software engineering and data analytics roles, where I can leverage my skills and interests in these areas.
          </p>
        </div>
        <div className="Resume">
          <a href="https://docs.google.com/document/d/17DMGZsJ1d3Rg2hfr-NKGJ813-9cHP1liVxNgK5L735A/edit?usp=sharing" target="_blank" rel="noreferrer" className='ResumeButton'>
            Resume
          </a>
        </div>
      </div>
      <div className="Profile">
        <img src={Profile} alt="Profile" />
      </div>
    </main>
  );
}
export default About;