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
          I'm a Computer Science student minoring in Economics at Georgia Tech with a passion for data analytics and problem-solving. I have experience in Python object oriented programming, database management, and data visualization. My strong analytical mindset and technical expertise enable me to tackle complex challenges and create impactful solutions that drive business success. I'm currently seeking opportunities in data science, technical consulting, or software development, where I can apply my skills to uncover actionable insights and support organizational goals.
          </p>
        </div>
        <div className="Resume">
          <a href="https://www.linkedin.com/in/sebastianxstephens/" target="_blank" rel="noreferrer" className='ResumeButton'>
            Connect
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