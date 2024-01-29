import { useEffect, useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'
import LoadImages from './loadimages'
import './index.scss'

const Portfolio = ({scrollPercent, setScrollPercent}) => {

  const [loaderName, setLoaderName] = useState('loader')
  const scrollWindow = useRef();
  const topRef = useRef();
  const footerRef = useRef();
  const [windowWidth, setWindowWidth] = useState(window.outerWidth);

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
            <input id="rad1" name="rad" defaultChecked="true" type="radio" />
            <div className="rad1">
                <h3 className="project-number">01/07</h3>
                <h1 className="project-name">3D Modeling</h1>
                <div className="btn"></div>
            </div>
            <input id="rad2" name="rad" type="radio" />
              <div className="rad2">
                <h3 className="project-number">02/07</h3>
                <h1 className="project-name">Agent Silhouette</h1>
                <div className="btn"></div>
              </div>
              <input id="rad3" name="rad" type="radio" />
              <div className="rad3">
                <h3 className="project-number">03/07</h3>
                <h1 className="project-name">e2i: Harbor</h1>
                <div className="btn"></div>
              </div>
              <input id="rad4" name="rad" type="radio" />
              <div className="rad4">
                <h3 className="project-number">04/07</h3>
                <h1 className="project-name">e2i: Cooking</h1>
                <div className="btn"></div>
              </div>
              <input id="rad5" name="rad" type="radio" />
              <div className="rad5">
                <h3 className="project-number">05/07</h3>
                <h1 className="project-name">Toys N Tyrants</h1>
                <div className="btn"></div>
              </div>
              <input id="rad6" name="rad" type="radio" />
              <div className="rad6">
                <h3 className="project-number">06/07</h3>
                <h1 className="project-name">Boom Bots</h1>
                <div className="btn"></div>
              </div>
              <input id="rad7" name="rad" type="radio" />
              <div className="rad7">
                <h3 className="project-number">07/07</h3>
                <h1 className="project-name">Cornucoopia</h1>
                <div className="btn"></div>
              </div>
              <input type="checkbox" />
              <h2>Read More</h2>
              <p className='project-sum project-01'>3D Modeling</p>
              <p className='project-sum project-02'>Single Player, third person, side-scrolling, stealth platformer</p>
              <p className='project-sum project-03'>Exploration</p>
              <p className='project-sum project-04'>Single Player, third person, endless runner</p>
              <p className='project-sum project-05'>Single Player & Co-Op, third person, Hack-and-Slash</p>
              <p className='project-sum project-06'>Single player, first person, 3D-shooter</p>
              <p className='project-sum project-07'>Multiplayer, physical board game</p>
              <div className="shapes"></div>
              <div className="photo">
                <div></div>
                <div></div>
                <div></div>
              </div>
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

{/*           <section className="section">
            <div className="grid">
              <NavLink to={`3D/3D-Modeling`} className="item item--medium">
                <img src={require('../../assets/images/gallery/3d1.png')} />
              </NavLink>
              <NavLink to={`2D/Agent-Silhouette`} className="item item--medium">
                <img src={require('../../assets/images/gallery/2d2.png')} />
              </NavLink>
              <NavLink to={`3D/e2i-Harbor-Project`} className="item item--medium">
                <img src={require('../../assets/images/gallery/3d3.png')} />
              </NavLink>
              <NavLink to={`3D/e2i-Cooking-Project`} className="item item--medium">
                <img src={require('../../assets/images/gallery/3d4.png')} />
              </NavLink>
              <NavLink to={`3D/Boom-Bots`} className="item item--medium">
                <img src={require('../../assets/images/gallery/3d5.png')} />
              </NavLink>
              <NavLink to={`3D/Toys-N-Tyrants`} className="item item--medium">
                <img src={require('../../assets/images/gallery/3d6.png')} />
              </NavLink>
              <NavLink to={`3D/Cornucoopia`} className="item item--medium">
                <img src={require('../../assets/images/gallery/2d7.png')} />
              </NavLink>
            </div>
          </section> */}

          </div>   
        </div>
        <footer ref={footerRef} id='footer' className='footer'>
          AB Portfolio - 2023 © Arielle Bartee
        </footer>
      </div>
      <div className={scrollPercent == 0 && windowWidth < 1100 ? 'arrow arrow-height invisible' : 'arrow arrow-height in-visible'}><img src={require(`../../assets/icons/downarrow.png`)} alt='' /></div>
    </>
  )
}

export default Portfolio