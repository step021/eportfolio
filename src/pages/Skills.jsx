import "../styles/Skills.css";
import Sklearn from "../media/scikitlearn-original.svg";
import Django from "../media/django-plain.svg";
import DjangoRest from "../media/djangorest-original.svg";
import SQL from "../media/sql.jpg";
import snowflake from "../media/snowflake.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function Skills() {
  return (
    <main className="SkillsContainer">
      <h1 className="SkillsTitle">Skills</h1>
      <span className="Mission"> Technical skills I have </span>
      <span className="Mission1"> DEVELOPED.</span>
      <div className="SkillsSection1">
        <div className="SkillGroup">
          <h2>Software Languages</h2>
          <div className="Icons">
            <div className="IconWrapper">
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg"
                alt="Java"
              />
              <p>Java</p>
            </div>
            <div className="IconWrapper">
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg"
                alt="Python"
              />
              <p>Python</p>
            </div>
            <div className="IconWrapper">
              <img
                src="https://img.icons8.com/color/48/sql.png"
                alt="SQL"
              />
              <p>SQL</p>
            </div>
          </div>
        </div>
        <div className="SkillGroup">
          <h2>Libraries</h2>
          <div className="Icons">
            <div className="IconWrapper">
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/pandas/pandas-original.svg"
                alt="Pandas"
              />
              <p>Pandas</p>
            </div>
            <div className="IconWrapper">
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/numpy/numpy-original.svg"
                alt="Numpy"
              />
              <p>Numpy</p>
            </div>
            <div className="IconWrapper">
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/matplotlib/matplotlib-original.svg"
                alt="Matplotlib"
              />
              <p>Matplotlib</p>
            </div>
            <div className="IconWrapper">
              <img src={Sklearn} alt="SciKitLearn" />
              <p>SciKitLearn</p>
            </div>
          </div>
        </div>
      </div>

      <div className="SkillsSection2">
        <div className="SkillGroup">
          <h2>Data Analysis</h2>
          <div className="Icons">
            <div className="IconWrapper">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-plain-wordmark.svg"
                alt="mySQL"
              />
              <p>mySQL</p>
            </div>
            <div className="IconWrapper">
              <img
                src={snowflake}
                alt="snowflake"
              />
              <p>Snowflake</p>
            </div>
            <div className="IconWrapper">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg"
                alt = "AWS"
              />
              <p>AWS Cloud Computing</p>
            </div>
            <div className="IconWrapper">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dynamodb/dynamodb-original.svg"
                alt = "Dynamo"
              />
              <p>AWS DynamoDB</p>
            </div>
            <div className="IconWrapper">
              <img
                src="https://img.icons8.com/color/48/power-bi.png"
                alt = "PowerBI"
              />
              <p>Power BI</p>
            </div>
            <div className="IconWrapper">
              <img
                src="https://img.icons8.com/color/48/microsoft-excel-2019--v1.png"
                alt = "Excel"
              />
              <p>Excel</p>
            </div>
          </div>
        </div>
        <div className="SkillGroup">
          <h2>Common Tools</h2>
          <div className="Icons">
            <div className="IconWrapper">
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg"
                alt="Git"
              />
              <p>Git</p>
            </div>
            <div className="IconWrapper">
              <FontAwesomeIcon icon={faGithub} className="social" /> Github
            </div>
            <div className="IconWrapper">
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/vscode/vscode-original.svg"
                alt="VSCode"
              />
              <p>VSCode</p>
            </div>
            <div className="IconWrapper">
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/jupyter/jupyter-original.svg"
                alt="Jupyter"
              />
              <p>Jupyter</p>
            </div>
            <div className="IconWrapper">
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg"
                alt="Docker"
              />
              <p>Docker</p>
            </div>
          </div>
        </div>
        <div className="SkillGroup">
          <h2>Communication</h2>
          <div className="Icons">
            <div className="IconWrapper">
            <img src="https://img.icons8.com/color/48/graph-report.png" alt="graph-report"/>
              <p>Technical Reporting</p>
            </div>
            <div className="IconWrapper">
            <img src="https://img.icons8.com/parakeet/48/bonds.png" alt="bonds"/>
              <p>Business Acumen</p>
            </div>
            <div className="IconWrapper">
            <img src="https://img.icons8.com/dusk/64/strategy-board.png" alt="strategy-board"/>
              <p>Strategic Thinking</p>
            </div>
            <div className="IconWrapper">
            <img src="https://img.icons8.com/color/48/statistics.png" alt="statistics"/>
              <p>Data Visualization</p>
            </div>
            <div className="IconWrapper">
            <img
                src="https://img.icons8.com/color/48/voice-recognition-scan.png"
                alt="speaking"
              />
              <p>Public Speaking</p>
            </div>
            <div className="IconWrapper">
            <img src="https://img.icons8.com/clouds/100/ms-powerpoint.png" alt="ms-powerpoint"/>
              <p>Technical Presentations</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Skills;
