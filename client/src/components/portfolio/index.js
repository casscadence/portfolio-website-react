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
  const imgArray = [
    { img: '3D1', name: '3D-Modeling' },
    { img: '2D2', name: 'Agent-Silhouette' },
    { img: '3D3', name: 'e2i-Harbor-Project' },
    { img: '3D4', name: 'e2i-Cooking-Project' },
    { img: '3D5', name: 'Boom-Bots' },
    { img: '3D6', name: 'Toys-N-Tyrants' },
    { img: '2D7', name: 'Cornucoopia' }
  ];

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
          <section className="section">
            {/* <h1>Nom Nom Gallery</h1> */}
            <div className="grid">
              <NavLink to={`3D/3D-Modeling`} className="item item--large">
                <img src={require('../../assets/images/gallery/3d1.png')} />
                  <div className="item__details">
                    3D-Modeling
                </div>
              </NavLink>
              <NavLink to={`2D/Agent-Silhouette`} className="item item--large">
                <img src={require('../../assets/images/gallery/2d2.png')} />
                <div className="item__details">
                  Agent Silhouette
                </div>
              </NavLink>
              <NavLink to={`3D/e2i-Harbor-Project`} className="item item--large">
                <img src={require('../../assets/images/gallery/3d3.png')} />
                <div className="item__details">
                  e2i: Harbor Project
                </div>
              </NavLink>
              <NavLink to={`3D/e2i-Cooking-Project`} className="item item--large">
                <img src={require('../../assets/images/gallery/3d4.png')} />
                <div className="item__details">
                  d2i: Cooking Project
                </div>
              </NavLink>
              <NavLink to={`3D/Boom-Bots`} className="item item--large">
                <img src={require('../../assets/images/gallery/3d5.png')} />
                <div className="item__details">
                  Boom Bots
                </div>
              </NavLink>
              <NavLink to={`3D/Toys-N-Tyrants`} className="item item--large">
                <img src={require('../../assets/images/gallery/3d6.png')} />
                <div className="item__details">
                  Toys N Tyrants
                </div>
              </NavLink>
              <NavLink to={`3D/Cornucoopia`} className="item item--large">
                <img src={require('../../assets/images/gallery/2d7.png')} />
                <div className="item__details">
                  Cornucoopia
                </div>
              </NavLink>
            </div>
          </section>

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