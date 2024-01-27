import { useState, useRef, useEffect } from 'react'
import './index.scss'
import Logo from '../../assets/images/logo.png'
import LogoAB from '../../assets/images/logo-ab.svg'
import { Link, NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faContactBook, faHome, faPhotoFilm, faPlus, faUser } from '@fortawesome/free-solid-svg-icons'

const Topbar = ({scrollPercent}) => {

  //const [activeClass, setActiveClass] = useState(false);
  const prevIMGurl = useRef('gallery/3d1.png');
  const [navActive, setNavActive] = useState(false);

/*   const currentPage = (activePage) => {
    setActiveClass(!activeClass)
  } */

  return (
    <div className={`nav-bar _${scrollPercent} ${navActive != true ? 'active-scroll-border' : (scrollPercent > 0 ? 'scroll-border' : '')}`}>
{/*         <div className={`logo`} onClick={() => setCount(count+1)}>
          <img src={LogoAB} alt="Logo" />
        </div> */}

        <div id="circularMenu" className={`circular-menu circular-menu-left ${navActive ? 'active' : ''}`}>
          <a className="floating-btn" onClick={() => setNavActive(!navActive)}>
            {/* <FontAwesomeIcon icon={faPlus} /> */}
            <img src={LogoAB} alt="Logo" />
          </a>
          <menu className="items-wrapper">
            <NavLink exact="true" activeclassname="active" className='menu-item' to="/" onClick={() => setNavActive(!navActive)}>
              <FontAwesomeIcon icon={faHome} />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className='menu-item' to="/about" onClick={() => setNavActive(!navActive)}>
              <FontAwesomeIcon icon={faUser} />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className='menu-item' to="/portfolio" onClick={() => setNavActive(!navActive)}>
              <FontAwesomeIcon icon={faPhotoFilm} />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className='menu-item' to="/contact" onClick={() => setNavActive(!navActive)}>
              <FontAwesomeIcon icon={faContactBook} />
            </NavLink>
          </menu>
        </div>

{/*       <div className={activeClass === 'active' ? 'menu-cover active' : 'menu-cover'}></div>
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
      </div> */}
    </div>
  )
}

export default Topbar