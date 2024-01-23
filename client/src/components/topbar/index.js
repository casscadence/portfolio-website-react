import { useState, useRef, useEffect } from 'react'
import './index.scss'
import Logo from '../../assets/images/logo.png'
import LogoAB from '../../assets/images/logo-ab.svg'
import { Link, NavLink } from 'react-router-dom'

const Topbar = ({scrollPercent}) => {

  const [activeClass, setActiveClass] = useState('');
  const [IMGurl, setIMGUrl] = useState('gallery/3d1.png');
  const [IMGanim, setIMGAnim] = useState('');
  const prevIMGurl = useRef('gallery/3d1.png');
  const [logo, setLogo] = useState(Logo);

  useEffect(() => {
    setIMGAnim('next-img')
    setTimeout (() => {
      prevIMGurl.current = IMGurl;
      setIMGAnim('')
    }, 500)
    console.log(prevIMGurl.current)
  }, [IMGurl])  

  useEffect(() => {
    window.addEventListener('resize', logoSwitch)
    return(() => {
        window.removeEventListener('resize', logoSwitch)
    })
  })

  useEffect(() => {
    logoSwitch()
  }, [])

  const logoSwitch = () => {
    if (window.innerWidth <= 1000) {
      setLogo(Logo)
      console.log(window.innerWidth)
    } else {
      setLogo(LogoAB)
      console.log(window.innerWidth)
    }
  }

  return (
    <div className={`nav-bar _${scrollPercent} ${activeClass === 'active' ? 'active-scroll-border' : (scrollPercent > 0 ? 'scroll-border' : '')}`}>
      <Link to="/">
        <div className='logo'>
          <img src={logo} alt="Logo" />
        </div>
      </Link>

      <div className={activeClass === 'active' ? 'menu-cover active' : 'menu-cover'}></div>
      <nav className={activeClass === 'active' ? 'active-nav' : ''}>
        <ul className='move-up-hidden'>
          <li>
            <div>
              <NavLink exact="true" activeclassname="active" to="/" onMouseOver={() => {setIMGUrl('about-photo.png')}} onClick={() => setActiveClass('')}>
                Home
              </NavLink>
            </div>
          </li>
          <li>
            <div>
              <NavLink activeclassname="active" className="about-link" to="/about" onMouseOver={() => setIMGUrl('about-photo.png')} onClick={() => setActiveClass('')}>
                About
              </NavLink>
            </div>
          </li>
          <li>
            <div>
              <NavLink activeclassname="active" className="portfolio-link" to="/portfolio" onMouseOver={() => setIMGUrl('gallery/3D1.png')} onClick={() => setActiveClass('')}>
                Portfolio
              </NavLink>
            </div>
          </li>
          <li>
            <div>
              <NavLink
                activeclassname="active"
                className="contact-link"
                to="/contact"
                onMouseOver={() => setIMGUrl('gallery/3D1.png')}
                onClick={() => setActiveClass('')}>
                  Contact
              </NavLink>
            </div>
          </li>
        </ul>
        <div className='nav-image'>
          <div className={`img-cover ${IMGanim}`}></div>
          <img className='prev-img' src={require(`../../assets/images/${prevIMGurl.current}`)} alt='' />
        </div>
      </nav>

      <div className={`nav-ham ${activeClass}`} onClick={() => setActiveClass(activeClass === '' ? 'active' : '')}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="cross">
          <span className="cross-bar"></span>
          <span className="cross-bar"></span>
        </span>
      </div>
    </div>
  )
}

export default Topbar