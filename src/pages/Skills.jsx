import '../styles/Skills.css';
import Sklearn from '../media/scikitlearn-original.svg';
import Django from '../media/django-plain.svg';
import DjangoRest from '../media/djangorest-original.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';


function Skills() {
  return (
    <main className="SkillsContainer">
      <h1 className='SkillsTitle'>Skills</h1>
      <span className='Mission'> Technical skills I have </span>
      <span className='Mission1'> DEVELOPED.</span>
      <div className="SkillsSection1">
        <div className="SkillGroup">
          <h2>Software Languages</h2>
          <div className="Icons">
            <div className="IconWrapper">
              <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg" alt="Java"/>
              <p>Java</p>
            </div>
            <div className="IconWrapper">
              <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" alt="Python"/>
              <p>Python</p>
            </div>
            <div className="IconWrapper">
              <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="JavaScript"/>
              <p>JavaScript</p>
            </div>
            <div className="IconWrapper">
              <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" alt="HTML"/>
              <p>HTML</p>
            </div>
            <div className="IconWrapper">
              <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" alt="CSS"/>
              <p>CSS</p>
            </div>
          </div>
        </div>
        <div className="SkillGroup">
          <h2>Libraries</h2>
          <div className="Icons">
            <div className="IconWrapper">
              <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/pandas/pandas-original.svg" alt="Pandas"/>
              <p>Pandas</p>
            </div>
            <div className="IconWrapper">
              <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/numpy/numpy-original.svg" alt="Numpy"/>
              <p>Numpy</p>
            </div>
            <div className="IconWrapper">
              <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/matplotlib/matplotlib-original.svg" alt="Matplotlib"/>
              <p>Matplotlib</p>
            </div>
            <div className="IconWrapper">
              <img src={Sklearn} alt="SciKitLearn"/>
              <p>SciKitLearn</p>
            </div>
          </div>
        </div>
      </div>

      <div className="SkillsSection2">
        <div className="SkillGroup">
          <h2>Frameworks</h2>
          <div className="Icons">
            <div className="IconWrapper">
              <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" alt="React"/>
              <p>React</p>
            </div>
            <div className="IconWrapper">
              <img src={Django} alt="Django"/>
              <p>Django</p>
            </div>
            <div className="IconWrapper">
              <img src={DjangoRest} alt="Django Rest Framework"/>
              <p>Django Rest Framework</p>
            </div>
          </div>
        </div>
        <div className="SkillGroup">
          <h2>Tools</h2>
          <div className="Icons">
            <div className="IconWrapper">
              <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg" alt="Git"/>
              <p>Git</p>
            </div>
            <div className="IconWrapper">
                <FontAwesomeIcon icon={faGithub} className='social'/>  Github
            </div>
            <div className="IconWrapper">
              <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/vscode/vscode-original.svg" alt="VSCode"/>
              <p>VSCode</p>
            </div>
            <div className="IconWrapper">
              <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/jupyter/jupyter-original.svg" alt="Jupyter"/>
              <p>Jupyter</p>
            </div>
            <div className="IconWrapper">
              <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg" alt="Docker"/>
              <p>Docker</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Skills;