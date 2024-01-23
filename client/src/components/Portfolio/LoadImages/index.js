import { NavLink } from 'react-router-dom'

const LoadImages = ({ imgArray }) => {

  return (
    <>
          {imgArray.map((obj, i) => 
            <NavLink className='project-link' key={obj.img} to={`${obj.img.slice(0, -1)}/${obj.name}`}>
              <div className={`gallery-photo _${i}`}>
                <div className='project-overlay'></div>
                <img className='project' src={require(`../../../assets/images/gallery/${obj.img}.png`)} alt={obj.img} />
                <p>{obj.img.includes('3D') ? "Modeling" : "Graphic"}</p>
                <h4>{obj.name.includes('Project') ? 'E2i: ' + (obj.name).slice(3).replace(/-/g, ' ') : (obj.name).replace(/-/g, ' ')}</h4>
              </div>
            </NavLink>
          )}
    </>
  )
}

export default LoadImages