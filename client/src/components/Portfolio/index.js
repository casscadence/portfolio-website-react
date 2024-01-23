import { useEffect, useRef, useState } from 'react'
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
          <LoadImages
              imgArray={[
                { img: '3D1', name: '3D-Modeling' },
                { img: '2D2', name: 'Agent-Silhouette' },
                { img: '3D3', name: 'e2i-Harbor-Project' },
                { img: '3D4', name: 'e2i-Cooking-Project' },
                { img: '3D5', name: 'Boom-Bots' },
                { img: '3D6', name: 'Toys-N-Tyrants' },
                { img: '2D7', name: 'Cornucoopia' }
              ]}
          />          
        </div>
        <footer ref={footerRef} id='footer' className='footer'>
          Website © Arielle Bartee - All Rights Reserved
        </footer>
      </div>
      <div className={scrollPercent == 0 && windowWidth < 1100 ? 'arrow arrow-height invisible' : 'arrow arrow-height in-visible'}><img src={require(`../../assets/icons/downArrow.png`)} alt='' /></div>
    </>
  )
}

export default Portfolio