import { useState, useRef, useEffect } from 'react'
import './index.scss'
import Logo from '../../assets/images/logo.png'
import LogoAB from '../../assets/images/logo-ab.svg'
import { Link, NavLink } from 'react-router-dom'

const Topbar = ({scrollPercent}) => {

  const [activeClass, setActiveClass] = useState('');
  const prevIMGurl = useRef('gallery/3d1.png');
  const [count, setCount] = useState(0);

  return (
    <div className={`nav-bar _${scrollPercent} ${activeClass === 'active' ? 'active-scroll-border' : (scrollPercent > 0 ? 'scroll-border' : '')}`}>
        <div className={`logo`} onClick={() => setCount(count+1)}>
          <img src={LogoAB} alt="Logo" />
        </div>

      <div className={activeClass === 'active' ? 'menu-cover active' : 'menu-cover'}></div>
      <nav className={`${activeClass === 'active' ? 'active-nav' : ''} ${count % 2 != 0 ? 'open-navigation' : ''}`}>
        <ul className='move-up-hidden'>
          <li>
            <div>
              <NavLink exact="true" activeclassname="active" className='home-link' to="/" onClick={() => setActiveClass('')}>
                Home
              </NavLink>
            </div>
          </li>
          <li>
            <div>
              <NavLink activeclassname="active" className='about-link' to="/about" onClick={() => setActiveClass('')}>
                About
              </NavLink>
            </div>
          </li>
          <li>
            <div>
              <NavLink activeclassname="active" className='portfolio-link' to="/portfolio" onClick={() => setActiveClass('')}>
                Portfolio
              </NavLink>
            </div>
          </li>
          <li>
            <div>
              <NavLink activeclassname="active" className='contact-link' to="/contact" onClick={() => setActiveClass('')}>
                  Contact
              </NavLink>
            </div>
          </li>
        </ul>
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