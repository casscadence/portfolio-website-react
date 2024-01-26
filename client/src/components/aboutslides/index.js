import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngular, faCss3, faHtml5, faJava, faJs, faNodeJs, faPhp, faReact, faSass } from '@fortawesome/free-brands-svg-icons';
import { faCopyright, faDatabase, faLeaf, faServer, faT } from '@fortawesome/free-solid-svg-icons';

const AboutSlides = ({ about, subIndex, addIndex, direction }) => {
   return (
        <>
        {about === 'about' || about == null ? 
        <div key={about} className={`about-desc ${about}`}>
            <h2>About</h2>
            <h1 className='letter-anim'>Who I Am</h1>
            <p>My name is Arielle Bartee. I'm a developer and artist from FL.</p>
            <p>
                Websites are a canvas for expression, reflecting the heart of a business.
                Each design tells a visual story, and learning how to share the author's voice inspires me to grow as a developer.
            </p>
            <p>
                My interest in exploring the immersive storytelling of video games strengthens my experience in framing each design.
                Video games encourage the audience to step into the author's world, and game design shapes the path they take.
                Tracing those steps in web design to follow the user's journey through the pages outlines how to chart that path 
                to introduce and build healthier client relationships.
            </p>
            <p>
                Through both web design and game design, I aspire to create works that bring imaginative worlds to life and draw creative minds together.
            </p>
        </div>
        : about === 'skills' ?
        <div key={about} className={`about-desc ${about}`}>
            <h2>Skills</h2>
            <h1 className='letter-anim'>Languages</h1>
            <p className="dev-desc">
                <span className="about-button skills"><FontAwesomeIcon icon={faHtml5} /></span>
                <span className="about-button skills"><FontAwesomeIcon icon={faCss3} /></span>
                <span className="about-button skills"><FontAwesomeIcon icon={faSass} /></span>
                <span className="about-button skills"><FontAwesomeIcon icon={faT} /></span>
                <span className="about-button skills"><FontAwesomeIcon icon={faJs} /></span>
                <span className="about-button skills"><FontAwesomeIcon icon={faReact} /></span>
                <span className="about-button skills"><FontAwesomeIcon icon={faAngular} /></span>
                <span className="about-button skills"><FontAwesomeIcon icon={faNodeJs} /></span>
                <span className="about-button skills"><FontAwesomeIcon icon={faServer} /></span>
                <span className="about-button skills"><FontAwesomeIcon icon={faCopyright} /></span>
                <span className="about-button skills"><FontAwesomeIcon icon={faPhp} /></span>
                <span className="about-button skills"><FontAwesomeIcon icon={faJava} /></span>
                <span className="about-button skills"><FontAwesomeIcon icon={faLeaf} /></span>
                <span className="about-button skills"><FontAwesomeIcon icon={faDatabase} /></span>
            </p>
        </div>
        : about === 'tools' ?
        <div key={about} className={`about-desc ${about}`}>
            <h2>Tools</h2>
            <h1 className='letter-anim'>Development</h1>
            <p className="dev-desc">
                <span className="about-button">VisualStudio(VS)</span>
                <span className="about-button">Eclipse</span>
                <span className="about-button">IntelliJ</span>
                <span className="about-button">Bootstrap</span>
                <span className="about-button">TailwindCSS</span>
                <span className="about-button">Photoshop</span>
                <span className="about-button">Illustrator</span>
                <span className="about-button">Maya</span>
                <span className="about-button">Blender</span>
                <span className="about-button">Unity</span>
                <span className="about-button">Git</span>
                <span className="about-button">SVN</span>
            </p>
        </div>
        : <></>
        }
    </>
  )
}

export default AboutSlides;