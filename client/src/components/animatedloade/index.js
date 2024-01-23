import './index.scss'
import LogoAB from '../../assets/images/logo-ab.svg'

const AnimatedLoader = ({ loaderName }) => {
  return (
    <div className={`${loaderName}`}>
        <div className='loader-logo'>
          <img src={LogoAB} alt="Logo" />
          <span className='loader-anim'></span>
        </div>
    </div>
  )
}

export default AnimatedLoader