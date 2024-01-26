import ProjectImages from '../projectimages'

const ProjectLoad = ({ descRef, detRef, descVisible, detVisible, textAnim, projectData, projectId, imgIdx, subIndex, addIndex, direction }) => {

    return (
        <>
            <div className='project-container'>
                <h1 className='project-title'>
                    {projectData.title}
                </h1>
                <p className='project-sub-title'>
                    {projectData.date}
                </p>
            </div>
            <div className='rotating-gallery-container'>
                <div className='rotating-gallery'>
                    <div className='rotating-images'>
                        <ProjectImages imgFolder={projectId} imgArray={imgIdx} subIndex={subIndex} addIndex={addIndex} direction={direction} />
                    </div>
                </div>
            </div>
            <div className='project-text-container'>
                <div className='project-header'>
                </div>
                <div className='project-info-container'>
                    <div ref={descRef} className={`project-desc ${descVisible ? 'animate-desc' : ''}`}>
                        <h3 className='desc-title'>Description</h3>
                        <p className={`desc-text ${descVisible ? 'animate-text' : ''}`}>
                            {projectData.desc}
                        </p>
                    </div>
                    <div ref={detRef} className={`project-details ${detVisible ? 'animate-desc' : ''}`}>
                        <h3 className='details-title'>Details</h3>
                        <ul>
                            <li className={`${detVisible ? 'animate-text' : ''}`}><strong>Type </strong>
                                {projectData.type}
                            </li>
                            <li className={`${detVisible ? 'animate-text' : ''}`}><strong>Tools </strong>
                                {projectData.tools}
                            </li>
                            {projectData.contribution && 
                                <li className={`${detVisible ? 'animate-text' : ''}`}>
                                    <strong>Contributions </strong>
                                    {projectData.contribution}
                                </li>}
                        </ul>
                    </div>
                    <footer id='footer' className='footer'>
                        AB Portfolio - 2023 © Arielle Bartee
                    </footer>
                </div>
            </div>
        </>
    )
}

export default ProjectLoad