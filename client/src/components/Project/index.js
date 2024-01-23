import { useState, useEffect, useRef } from 'react'
import { useInView} from 'react-intersection-observer'
import { useParams, useNavigate } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons'
import ProjectLoad from '../ProjectLoad'
import './index.scss'

const useFetch = (url) => {
  const [data, setData] = useState(['']);

  useEffect(() => {
    fetch(url)
    .then(res => res.json())
    .then(json => {
      setData({ title: [json.title.includes('e2i') ? json.title.replace(/-/g, ' ').replace('e2i', 'e2i : ') : json.title.replace(/-/g, ' ') ], date: json.date, desc: json.desc, type: json.type, tools: json.tools, contribution: json.contribution, number: json.number, length: json.length})
    })
  },[url]);
  
  return data;
}; 

const Project = ({scrollPercent, setScrollPercent}) => {
  const { selectionId } = useParams();
  const { projectId } = useParams();
  const [loaderName, setLoaderName] = useState('loader');
  const [imgIdx, setImgIdx] = useState([0,1,2,3,4]);
  const [direction, setDirection] = useState('middle');
  const [textAnim, setTextAnim] = useState('');
  const { ref: descRef, inView: descVisible } = useInView();
  const { ref: detRef, inView: detVisible } = useInView();
  const navigate = useNavigate();
  const scrollWindow = useRef();

  const onScroll = () => {
    setScrollPercent((scrollWindow.current.scrollTop/(scrollWindow.current.scrollHeight - scrollWindow.current.clientHeight) * 100).toFixed());
  }

  useEffect(() => {
    window.addEventListener('resize', onScroll);
    return(() => {
        window.removeEventListener('resize', onScroll);
    })
  })

  const data = useFetch(`/portfolio/${selectionId}/${projectId}`);

  useEffect(() => {
    document.title = 'Portfolio | Arielle Bartee';
    setTextAnim('animate-text')
  }, [])

  const subIndex = () => {
    setDirection('right')
    setTimeout(() => {
        return setImgIdx(prevIdx => prevIdx.map(idx => idx>0 ? idx-1 : prevIdx.length-1))
    }, 1200)
    setTimeout(() => {
      return setDirection('middle')
    }, 1200)
  }

  const addIndex = () => {
    setDirection('left')
    setTimeout(() => {
      return setImgIdx(prevIdx => prevIdx.map(idx => idx<prevIdx.length-1 ? idx+1 : 0))
    }, 1200)
    setTimeout(() => {
      return setDirection('middle')
    }, 1200)
  }

  return (
    <>
      <div className='container project-page'>
        <div className='fa-back-arrow'><FontAwesomeIcon icon={faArrowLeftLong} onClick={()=>navigate(-1)} /></div>
        <p className='project-number'>0{data.number + 1}/0{data.length}</p>
        <div ref={scrollWindow} className='text-container' onScroll={onScroll}>
          <div className='text-zone'>
            <ProjectLoad descRef={descRef} detRef={detRef} descVisible={descVisible} detVisible={detVisible} projectData={data} projectId={projectId} imgIdx={imgIdx} subIndex={subIndex} addIndex={addIndex} direction={direction} />
          </div>
        </div>
      </div>
      <div className={scrollPercent == 100 ? 'arrow visible' : 'arrow invisible'}><img src={require(`../../assets/icons/downArrow.png`)} alt='' /></div>
    </>
  )
}

export default Project