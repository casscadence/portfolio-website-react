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
                <span className="about-button">HTML</span>
                <span className="about-button">CSS</span>
                <span className="about-button">JavaScript</span>
                <span className="about-button">ReactJS</span>
                <span className="about-button">AngularJS</span>
                <span className="about-button">TypeScript</span>
                <span className="about-button">SQL</span>
                <span className="about-button">NodeJS</span>
                <span className="about-button">Express</span>
                <span className="about-button">C#</span>
                <span className="about-button">.NET</span>
                <span className="about-button">PHP</span>
                <span className="about-button">Java</span>
                <span className="about-button">Spring</span>
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