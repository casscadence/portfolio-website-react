import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngular, faBootstrap, faCss3, faGithub, faHtml5, faJava, faJs, faNodeJs, faPhp, faReact, faSass, faUnity } from '@fortawesome/free-brands-svg-icons';
import { faCircle, faCode, faCodeCompare, faCopyright, faCube, faDatabase, faLeaf, faPaintBrush, faPenNib, faServer, faT } from '@fortawesome/free-solid-svg-icons';

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
                <span className={`about-button icons ${about}`}><FontAwesomeIcon icon={faHtml5} /></span>
                <span className={`about-button icons ${about}`}><FontAwesomeIcon icon={faCss3} /></span>
                <span className={`about-button icons ${about}`}><FontAwesomeIcon icon={faSass} /></span>
                <span className={`about-button icons ${about}`}><FontAwesomeIcon icon={faBootstrap} /></span>
                <span className={`about-button icons ${about}`}><FontAwesomeIcon icon={faT} /></span>
                <span className={`about-button icons ${about}`}><FontAwesomeIcon icon={faJs} /></span>
                <span className={`about-button icons ${about}`}><FontAwesomeIcon icon={faReact} /></span>
                <span className={`about-button icons ${about}`}><FontAwesomeIcon icon={faAngular} /></span>
                <span className={`about-button icons ${about}`}><FontAwesomeIcon icon={faNodeJs} /></span>
                <span className={`about-button icons ${about}`}><FontAwesomeIcon icon={faServer} /></span>
                <span className={`about-button icons ${about}`}><FontAwesomeIcon icon={faCopyright} /></span>
                <span className={`about-button icons ${about}`}><FontAwesomeIcon icon={faPhp} /></span>
                <span className={`about-button icons ${about}`}><FontAwesomeIcon icon={faJava} /></span>
                <span className={`about-button icons ${about}`}><FontAwesomeIcon icon={faLeaf} /></span>
                <span className={`about-button icons ${about}`}><FontAwesomeIcon icon={faDatabase} /></span>
            </p>
        </div>
        : about === 'tools' ?
        <div key={about} className={`about-desc ${about}`}>
            <h2>Tools</h2>
            <h1 className='letter-anim'>Development</h1>
            <p className="dev-desc">
                <span className={`about-button icons ${about}`}><FontAwesomeIcon icon={faCode} /></span>
                <span className={`about-button icons ${about}`}><FontAwesomeIcon icon={faCircle} /></span>
                <span className={`about-button icons ${about}`}><FontAwesomeIcon icon={faPaintBrush} /></span>
                <span className={`about-button icons ${about}`}><FontAwesomeIcon icon={faPenNib} /></span>
                <span className={`about-button icons ${about}`}><FontAwesomeIcon icon={faCube} /></span>
                <span className={`about-button icons ${about}`}><FontAwesomeIcon icon={faUnity} /></span>
                <span className={`about-button icons ${about}`}><FontAwesomeIcon icon={faGithub} /></span>
                <span className={`about-button icons ${about}`}><FontAwesomeIcon icon={faCodeCompare} /></span>
            </p>
        </div>
        : <></>
        }
    </>
  )
}

export default AboutSlides;