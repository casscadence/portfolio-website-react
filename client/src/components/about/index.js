import { useEffect, useRef, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import CV from '../../assets/images/resume/barteearielle_resume.pdf';
import VerticalCarousel from '../verticalcarousel';

const About = ({scrollPercent, setScrollPercent}) => {
  const [loaderName, setLoaderName] = useState('loader');
  const [isDisabled, setIsDisabled] = useState(false);
  const scrollWindow = useRef();
  const topRef = useRef();
  const footerRef = useRef();
  const { ref: inViewRef, inView } = useInView();
  const [direction, setDirection] = useState('middle');
  const [about, setAbout] = useState();
 
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
    fetch(CV).then(response => {
      response.blob().then(blob => {
          const fileURL = window.URL.createObjectURL(blob);
          let alink = document.createElement('a');
          alink.href = fileURL;
          alink.download = 'barteearielle_resume.pdf';
          alink.click();
      })
    })
  }

  useEffect(() => {
    document.title = 'Portfolio | Arielle Bartee';
  }, [])

  useEffect(() => {
    setDirection('about-switch')
    setTimeout(() => {
      setDirection('about')
    }, 800)
  }, [about])
  
  return (
    <>
      <div ref={scrollWindow} className='container about-page' onScroll={onScroll}>
        <div ref={topRef} className="text-zone">
          <div className="about-wrapper">
            <div className='about-text'>
              <ul>
                <li className={`about-list ${about === 'about' || about == null ? 'active' : ''}`} onClick={direction === 'about' ? (() => {setAbout('about')}) : () => {}}><h1 className='about-title'>About</h1></li>
                <li className={`about-list ${about === 'skills' ? 'active' : ''}`} onClick={direction === 'about' ? (() => {setAbout('skills')}) : () => {}} ><h1 className='about-title'>Skills</h1></li>
                <li className={`about-list ${about === 'tools' ? 'active' : ''}`} onClick={direction === 'about' ? (() => {setAbout('tools')}) : () => {}} ><h1 className='about-title'>Tools</h1></li>
              </ul>
              <div className='button-wrapper'>
              <div className='button-border' onClick={fetchResume}>
                <div className='button-fill'>
                  <p className='button-border-link' >Download CV</p>
                </div>
              </div>
            </div>
            </div>
            <VerticalCarousel about={about} direction={direction}></VerticalCarousel>
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