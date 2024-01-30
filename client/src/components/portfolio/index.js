import { useEffect, useRef, useState } from 'react'
import { useInView} from 'react-intersection-observer'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import LoadImages from './loadimages'
import './index.scss'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const Portfolio = ({scrollPercent, setScrollPercent}) => {

  const [loaderName, setLoaderName] = useState('loader')
  const scrollWindow = useRef();
  const topRef = useRef();
  const footerRef = useRef();
  const [windowWidth, setWindowWidth] = useState(window.outerWidth);
  const [checked, setChecked] = useState('rad1');
  const [check, setCheck] = useState(false);
  const { ref: rad1Ref, inView: rad1Visible } = useInView();
  const { ref: rad2Ref, inView: rad2Visible } = useInView();
  const { ref: rad3Ref, inView: rad3Visible } = useInView();
  const { ref: rad4Ref, inView: rad4Visible } = useInView();
  const { ref: rad5Ref, inView: rad5Visible } = useInView();
  const { ref: rad6Ref, inView: rad6Visible } = useInView();
  const { ref: rad7Ref, inView: rad7Visible } = useInView();
  const { ref: rad8Ref, inView: rad8Visible } = useInView();
  const { ref: rad9Ref, inView: rad9Visible } = useInView();
  const { ref: rad10Ref, inView: rad10Visible } = useInView();
  const { ref: rad11Ref, inView: rad11Visible } = useInView();
  const { ref: rad12Ref, inView: rad12Visible } = useInView();
  const { ref: rad13Ref, inView: rad13Visible } = useInView();
  const { ref: rad14Ref, inView: rad14Visible } = useInView();
  const { ref: check1Ref, inView: check1Visible } = useInView();

  useEffect(() => {
    setTimeout(() => {
      return setLoaderName('loader loader-end')
    }, 3000)
    document.title = 'Portfolio | Arielle Bartee'
  }, [])

  useEffect(() => {
    window.addEventListener('resize', onScroll);
    return(() => {
        window.removeEventListener('resize', onScroll);
    })
  })

  useEffect(() => {
    const handleWindowWidth = () => {
      setWindowWidth([window.innerWidth]);
    };
    window.addEventListener('resize', handleWindowWidth);

    return () => {
      window.removeEventListener('resize', handleWindowWidth);
    };
  }, [])

  const onScroll = () => {
    setScrollPercent((scrollWindow.current.scrollTop/(scrollWindow.current.scrollHeight - scrollWindow.current.clientHeight) * 100).toFixed());
  }

  return (
    <>
      <div ref={scrollWindow} className='container portfolio-page' onScroll={onScroll}>
        <div ref={topRef} className='text-zone'>
          <div className='portfolio-wrapper'>

          <div className="card">
              <input ref={rad1Ref} id="rad1" name="rad" type="radio" checked={rad1Visible ? true : false} onClick={() => setChecked('rad1')} onChange={()=>{}} />
              <div className="rad1">
                  <h3 className={`project-number ${rad8Visible ? '' :'white'}`}>01/07</h3>
                  <h1 className={`project-name ${rad8Visible ? '' :'white'}`}>Agent Silhouette</h1>
                  <p className={`project-link ${rad8Visible ? '' :'white'}`}>View Project <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon></p>
              </div>
              <input ref={rad2Ref} id="rad2" name="rad" type="radio" checked={rad2Visible ? true : false} onClick={() => setChecked('rad2')} onChange={()=>{}} />
                <div className="rad2">
                  <h3 className={`project-number ${rad9Visible ? '' :'white'}`}>02/07</h3>
                  <h1 className={`project-name ${rad9Visible ? '' :'white'}`}>e2i: Harbor</h1>
                  <p className={`project-link ${rad9Visible ? '' :'white'}`}>View Project <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon></p>
                </div>
              <input ref={rad3Ref} id="rad3" name="rad" type="radio" checked={rad3Visible ? true : false} onClick={() => setChecked('rad3')} onChange={()=>{}} />
              <div className="rad3">
                <h3 className={`project-number ${rad10Visible ? '' :'white'}`}>03/07</h3>
                <h1 className={`project-name ${rad10Visible ? '' :'white'}`}>e2i: Cooking</h1>
                <p className={`project-link ${rad10Visible ? '' :'white'}`}>View Project <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon></p>
              </div>
              <input ref={rad4Ref} id="rad4" name="rad" type="radio" checked={rad4Visible ? true : false} onClick={() => setChecked('rad4')} onChange={()=>{}} />
              <div className="rad4">
                <h3 className={`project-number ${rad11Visible ? '' :'white'}`}>04/07</h3>
                <h1 className={`project-name ${rad11Visible ? '' :'white'}`}>Boom Bots</h1>
                <p className={`project-link ${rad11Visible ? '' :'white'}`}>View Project <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon></p>
              </div>
              <input ref={rad5Ref} id="rad5" name="rad" type="radio" checked={rad5Visible ? true : false} onClick={() => setChecked('rad5')} onChange={()=>{}} />
              <div className="rad5">
                <h3 className={`project-number ${rad12Visible ? '' :'white'}`}>05/07</h3>
                <h1 className={`project-name ${rad12Visible ? '' :'white'}`}>Toys N Tyrants</h1>
                <p className={`project-link ${rad12Visible ? '' :'white'}`}>View Project <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon></p>
              </div>
              <input ref={rad6Ref} id="rad6" name="rad" type="radio" checked={rad6Visible ? true : false} onClick={() => setChecked('rad6')} onChange={()=>{}} />
              <div className="rad6">
                <h3 className={`project-number ${rad13Visible ? '' :'white'}`}>06/07</h3>
                <h1 className={`project-name ${rad13Visible ? '' :'white'}`}>Cornucoopia</h1>
                <p className={`project-link ${rad13Visible ? '' :'white'}`}>View Project <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon></p>
              </div>
              <input ref={rad7Ref} id="rad7" name="rad" type="radio" checked={rad7Visible ? true : false} onClick={() => setChecked('rad7')} onChange={()=>{}} />
              <div className="rad7">
                <h3 className={`project-number ${rad14Visible ? '' :'white'}`}>07/07</h3>
                <h1 className={`project-name ${rad14Visible ? '' :'white'}`}>3D Modeling</h1>
                <p className={`project-link ${rad14Visible ? '' :'white'}`}>View Project <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon></p>
              </div>
              <form>
              <input ref={rad8Ref} id="rad8" name="rad" type="radio" onChange={() => {}} />
              <input ref={rad9Ref} id="rad9" name="rad" type="radio" onChange={() => {}} />
              <input ref={rad10Ref} id="rad10" name="rad" type="radio" onChange={() => {}} />
              <input ref={rad11Ref} id="rad11" name="rad" type="radio" onChange={() => {}} />
              <input ref={rad12Ref} id="rad12" name="rad" type="radio" onChange={() => {}} />
              <input ref={rad13Ref} id="rad13" name="rad" type="radio" onChange={() => {}} />
              <input ref={rad14Ref} id="rad14" name="rad" type="radio" onChange={() => {}} />
              </form>
            <input className='rad1' type="checkbox" checked={
              rad1Visible && rad8Visible ? false :
              rad2Visible && rad9Visible ? false :
              rad3Visible && rad10Visible ? false :
              rad4Visible && rad11Visible ? false :
              rad5Visible && rad12Visible ? false :
              rad6Visible && rad13Visible ? false :
              rad7Visible && rad14Visible ? false :
              true
            }  onChange={() => {}} />
            <p className='project-sum project-01'>'Deep underground in a faraway jungle, hides an expansive complex dedicated to the heinous plans of an evil mad scientist. Your mission, should you choose to accept it, is to infiltrate the facility, thwart the villain’s master plan, and save the world!'</p>
            <p className='project-sum project-02'>'Works from the Harbor Project during the internship at E2i Creative. The project involved continuing from the previous team's progress on a VR experience which assists medical professionals in caring for PTSD patients with a soothing atmosphere and in assessing PTSD with objects that created interest.'</p>
            <p className='project-sum project-03'>'Works from the Cooking Project during the internship at E2i Creative. The project involved an app which used foods and cooking items as obstacles and power-ups in a temple run style game of the endless runner genre, in order to aid Parkinson's patients with diet and nutrition to ease symptoms and teach others about Parkinson's and caring for health.'</p>
            <p className='project-sum project-04'>'In Toys N Tyrants, players adventure through a dungeon of toys-gone-bad to defeat the Mad King, ending his tyranny once and for all! However, perhaps the true journey was the friends you made along the way.'</p>
            <p className='project-sum project-05'>'Boom Bots is a fast-paced arena shooter where the only type of weapon is a grenade customizable by the player. Choose how your grenades travel, how they detonate, and what type of explosion they cause with an added variety of movement styles at your disposal.'</p>
            <p className='project-sum project-06'>'A quick, competitive rogue-like board game where hungry, (un)lucky foxes try to steal not-so-defenseless chickens.</p>
            <p className='project-sum project-07'>'Miscellaneous 3D works and works in progress'</p>
            <div className="shapes"></div>
            <div className="photo">
              <div></div>
              <div></div>
              <div></div>
            </div>
            
            <img className={`clipped-shape ${rad1Visible && rad8Visible ? 'shape-01' :''}`} src={require('../../assets/images/gallery/2d2.png')} alt="" />
            <img className={`clipped-shape ${rad2Visible && rad9Visible ? 'shape-02' :''}`} src={require('../../assets/images/gallery/3d3.png')} alt="" />
            <img className={`clipped-shape ${rad3Visible && rad10Visible ? 'shape-03' :''}`} src={require('../../assets/images/gallery/3d4.png')} alt="" />
            <img className={`clipped-shape ${rad4Visible && rad11Visible ? 'shape-04' :''}`} src={require('../../assets/images/gallery/3d5.png')} alt="" />
            <img className={`clipped-shape ${rad5Visible && rad12Visible ? 'shape-05' :''}`} src={require('../../assets/images/gallery/3d6.png')} alt="" />
            <img className={`clipped-shape ${rad6Visible && rad13Visible ? 'shape-06' :''}`} src={require('../../assets/images/gallery/2d7.png')} alt="" />
            <img className={`clipped-shape ${rad7Visible && rad14Visible ? 'shape-07' :''}`} src={require('../../assets/images/gallery/3d1.png')} alt="" />
            <svg width="0" height="0">
              <defs>
                <clipPath id="clip-01">
                  <ellipse cx="455" cy="530" rx="190" ry="200"/>     
                  <ellipse cx="275" cy="420" rx="250" ry="200"/>        
                  <ellipse cx="452" cy="285" rx="283" ry="250"/>      
                </clipPath>
                <clipPath id="clip-02">
                  <ellipse cx="405" cy="535" rx="238" ry="210"/>     
                  <ellipse cx="263" cy="665" rx="235" ry="200"/>        
                  <ellipse cx="405" cy="285" rx="330" ry="252"/>      
                </clipPath>
                <clipPath id="clip-03">
                  <ellipse cx="370" cy="583" rx="238" ry="197"/>     
                  <ellipse cx="605" cy="584" rx="190" ry="196"/>        
                  <ellipse cx="605" cy="267" rx="331" ry="182"/>  
                  <ellipse cx="540" cy="400" rx="212" ry="182"/>       
                </clipPath>
                <clipPath id="clip-04">
                  <ellipse cx="320" cy="497" rx="238" ry="197"/>     
                  <ellipse cx="554" cy="499" rx="190" ry="196"/>        
                  <ellipse cx="555" cy="182" rx="331" ry="180"/>  
                  <ellipse cx="488" cy="330" rx="210" ry="182"/>       
                </clipPath>
              </defs>
            </svg>
            {/* <img className="clipped-shape shape-02" src={require('../../assets/images/gallery/2d2.png')} alt="" />
            <img className="clipped-shape shape-03" src={require('../../assets/images/gallery/2d2.png')} alt="" />
            <img className="clipped-shape shape-04" src={require('../../assets/images/gallery/2d2.png')} alt="" />
            <img className="clipped-shape shape-05" src={require('../../assets/images/gallery/2d2.png')} alt="" />
            <img className="clipped-shape shape-06" src={require('../../assets/images/gallery/2d2.png')} alt="" />
            <img className="clipped-shape shape-07" src={require('../../assets/images/gallery/2d2.png')} alt="" /> */}
            <div className="blob">
              <div className="glob">
              </div>
            </div>
          </div>

          <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
          <defs>
          <filter id="goo">
          <feGaussianBlur in="SourceGraphic" stdDeviation="12" result="blur" />
          <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="goo" />
          <feComposite in="SourceGraphic" in2="goo" operator="atop"/>
          </filter>
          </defs>
          </svg>
          <svg className="svg" viewBox="0 0 400 400">
          <defs>
          <filter id="duotone-filter-post-one">
          <feColorMatrix type="matrix" values="0.14453125 0 0 0 0.33203125 0.71875 0 0 0 0.27734375 -0.34765625 0 0 0 0.73046875 0 0 0 1 0"></feColorMatrix>
          </filter>
          </defs>
          </svg>

{/*             <div className="project-1-wrap">
              <img className="abstract-shape" src={require('../../assets/images/gallery/2d2.png')} alt="" />
              <div className="image">
                <svg  xmlns="http://www.w3.org/2000/svg">
                  <clipPath id="mask">
                      <path d="M0,370.6c-0.5,35,29.5,68,60,82.8c40.8,19.7,82.2,6.8,99.3,1.4c76-23.8,83.3-81.4,130.3-79.9c43.9,1.4,53.2,52.1,102.2,52.5
                      c38.6,0.3,67.2-30.9,79.9-44.6c44.4-48.3,49.5-116.9,33.1-165.5c-6-17.7-11.5-34.1-27.4-45.3c-30.9-22-62.5,2.7-96.2-16.2
                      c-27.9-15.7-17.7-39-44.8-68c-44.9-47.9-125.5-40.2-155.5-37.3C145.6,53.7,101.3,58,66.5,92c-43.9,42.9-46.3,107.1-46.8,120.2
                      c-1.7,45.2,14.1,62.2,1.4,103.6C12.1,345.6,0.3,348.8,0,370.6z"/>
                    </clipPath>
                </svg>
              </div>
            </div> */}

             {/*      <path d="M373.8,89.9c2.7-4.9,14.3-24.5,37.4-30.2c5.6-1.4,18.5-4.6,30.9,2.2c18.8,10.2,20,33.9,20.2,38.1c0.1,3.2,0.6,21.6-8.6,25.9
                      c-6.9,3.3-13-4.5-24.5-1.4c-7.4,1.9-7.1,5.7-13.7,7.9c-12.5,4.2-32-3.2-39.6-18.7C371.2,103.7,372.8,94,373.8,89.9z"/>
                      <path d="M432.1,133.8c-4.2,1.6-9.3,6-8.6,10.8c0.7,5.5,8.7,9.2,15.1,7.9c6.7-1.4,12.4-8.5,10.8-13.7
                      C447.7,133.4,438.5,131.3,432.1,133.8z"/> */}

          </div>   
        </div>
        <footer ref={footerRef} id='footer' className='footer'>
          AB Portfolio - 2023 © Arielle Bartee
        </footer>
      </div>
    </>
  )
}

export default Portfolio