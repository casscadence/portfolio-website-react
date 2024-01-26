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
          <div className='portfolio-wrapper'>
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
            <div class="wrap-container">
              <div class="gallery-wrap">
                <div class="item item-1"></div>
                <div class="item item-2"></div>
                <div class="item item-3"></div>
                <div class="item item-4"></div>
                <div class="item item-5"></div>
              </div>
            </div> 
            <div id="mz-gallery-container">

  <div id="mz-gallery">

    <figure>
      <img src="https://picsum.photos/id/818/700/700" alt="Statue of Liberty" width="700" height="700" />
      <figcaption>Statue of Liberty</figcaption>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </figure>

    <figure>
      <img src="https://picsum.photos/id/537/700/700" alt="Night Sky" width="700" height="700" />
      <figcaption>Night Sky</figcaption>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </figure>

    <figure>
      <img src="https://picsum.photos/id/136/700/700" alt="Ravine Between Rocks" width="700" height="700" />
      <figcaption>Ravine Between Rocks</figcaption>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </figure>

    <figure>
      <img src="https://picsum.photos/id/337/700/700" alt="Wheat Farm" width="700" height="700" />
      <figcaption>Wheat Farm</figcaption>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </figure>

    <figure>
      <img src="https://picsum.photos/id/737/700/700" alt="City Street" width="700" height="700" />
      <figcaption>City Street</figcaption>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </figure>

    <figure>
      <img src="https://picsum.photos/id/217/700/700" alt="Crumbling Pier" width="700" height="700" />
      <figcaption>Crumbling Pier</figcaption>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </figure>

    <figure>
      <img src="https://picsum.photos/id/416/700/700" alt="Foggy Mountains" width="700" height="700" />
      <figcaption>Foggy Mountains</figcaption>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </figure>

    <figure>
      <img src="https://picsum.photos/id/811/700/700" alt="Dense Forest" width="700" height="700" />
      <figcaption>Dense Forest</figcaption>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </figure>

    <figure>
      <img src="https://picsum.photos/id/902/700/700" alt="Sunset Over Mountains" width="700" height="700" />
      <figcaption>Sunset Over Mountains</figcaption>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </figure>

    <figure>
      <img src="https://picsum.photos/id/514/700/700" alt="SUV in Front of Building" width="700" height="700" />
      <figcaption>SUV in Front of Building</figcaption>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </figure>

    <figure>
      <img src="https://picsum.photos/id/111/700/700" alt="Classic Vehicle" width="700" height="700" />
      <figcaption>Classic Vehicle</figcaption>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </figure>

    <figure>
      <img src="https://picsum.photos/id/168/700/700" alt="Stacked Rocks" width="700" height="700" />
      <figcaption>Stacked Rocks</figcaption>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </figure>

    <figure>
      <img src="https://picsum.photos/id/210/700/700" alt="Brick Wall" width="700" height="700" />
      <figcaption>Brick Wall</figcaption>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </figure>

    <figure>
      <img src="https://picsum.photos/id/270/700/700" alt="Waterfront" width="700" height="700" />
      <figcaption>Waterfront</figcaption>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </figure>

    <figure>
      <img src="https://picsum.photos/id/315/700/700" alt="Overgrown Buildings" width="700" height="700" />
      <figcaption>Overgrown Buildings</figcaption>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </figure>

    <figure>
      <img src="https://picsum.photos/id/562/700/700" alt="Dying Trees" width="700" height="700" />
      <figcaption>Dying Trees</figcaption>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </figure>

    <figure>
      <img src="https://picsum.photos/id/385/700/700" alt="Ocean View" width="700" height="700" />
      <figcaption>Ocean View</figcaption>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </figure>

  </div>

</div>
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