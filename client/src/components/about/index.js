import { useEffect, useRef, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import AboutPhoto from '../../assets/images/about-photo.png'

const About = ({scrollPercent, setScrollPercent}) => {
  const [loaderName, setLoaderName] = useState('loader');
  const [isDisabled, setIsDisabled] = useState(false);
  const scrollWindow = useRef();
  const topRef = useRef();
  const footerRef = useRef();
  const { ref: inViewRef, inView } = useInView();
 
  useEffect(() => {
    setTimeout(() => {
      return setLoaderName('loader loader-end');
    }, 3000)
    document.title = 'About | Arielle Bartee';
    inViewRef(footerRef.current);
  }, [])

  useEffect(() => {
    topRef.current?.scrollIntoView({behavior: 'smooth'});
    setTimeout(() => {
      setIsDisabled(false);
    }, 1000)
  }, [isDisabled])

  useEffect(() => {
    window.addEventListener('resize', onScroll);
    return(() => {
        window.removeEventListener('resize', onScroll);
    })
  })

  const onScroll = () => {
    setScrollPercent((scrollWindow.current.scrollTop/(scrollWindow.current.scrollHeight - scrollWindow.current.clientHeight) * 100).toFixed());
  }

  const fetchResume = () => {
    fetch('../../assets/images/Resume/barteearielle_resume.pdf').then(response => {
      response.blob().then(blob => {
          const fileURL = window.URL.createObjectURL(blob);
          let alink = document.createElement('a');
          alink.href = fileURL;
          alink.download = 'barteearielle_resume.pdf';
          alink.click();
      })
  })
  }

  return (
    <>
      <div ref={scrollWindow} className='container about-page' onScroll={onScroll}>
        <div ref={topRef} className="text-zone">
          <div className='about-text'>
            <h2>
              About
            </h2>
            <h1 className='letter-anim'>
              Who I Am
            </h1>
            <p>
              My name is Arielle Bartee. I'm a developer and artist from FL.
            </p>
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
            <div className='button-border' onClick={fetchResume}>
              <div className='button-fill'>
                <p className='button-border-link' >Download CV</p>
              </div>
            </div>
          </div>
          <div className='about-photo'>
            <img src={AboutPhoto} alt=''/>
          </div>
        </div>
        <footer ref={footerRef} id='footer' className='footer'>
          AB Portfolio - 2023 © Arielle Bartee
        </footer>
      </div>
    </>
  )
}

export default About