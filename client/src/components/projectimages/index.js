const ProjectImages = ({ imgFolder, imgArray, subIndex, addIndex, direction }) => {

  return (
    <>
        {imgArray.map((char, i) => (
            <div key={char} className={`rotating-image ${direction}`} onClick={direction === 'middle' ? (char+1===2 ? addIndex : char+1===4 ? subIndex : () => {}) : () => {}} data-arrival-index={char+1}>
              <img src={require(`../../assets/images/${imgFolder.toLowerCase()}/1-${i}.png`)} alt='' />  
            </div>
        ))}
    </>
  )
}

export default ProjectImages