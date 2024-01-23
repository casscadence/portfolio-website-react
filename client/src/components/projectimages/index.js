const ProjectImages = ({ imgFolder, imgArray, subIndex, addIndex, direction }) => {

  return (
    <>
        {imgArray.map((char, i) => (
            <div key={char} className={`rotating-image ${direction}`} onClick={char+1===2 ? addIndex : char+1===4 ? subIndex : ''} data-arrival-index={char+1}>
              <img src={require(`../../assets/images/${imgFolder}/1-${i.toLowerCase()}.png`)} alt='' />  
            </div>
        ))}
    </>
  )
}

export default ProjectImages