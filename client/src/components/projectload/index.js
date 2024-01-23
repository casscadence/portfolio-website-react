import React from 'react'
import ProjectImages from '../projectimages'

const ProjectLoad = ({ descRef, detRef, descVisible, detVisible, textAnim, projectId, imgIdx, subIndex, addIndex, direction }) => {

    const projectDataObjects = [{title: '3D Modeling', date: '2017-Present', desc: 'Miscellaneous 3D works and works in progress', type: '3D Modeling', tools: 'Maya, Blender, Substance Painter, Illustrator', contribution: ''},
    {title: 'Agent Silhouette', date: '2016', desc: 'Deep underground in a faraway jungle, hides an expansive complex dedicated to the heinous plans of an evil mad scientist. Your mission, should you choose to accept it, is to infiltrate the facility, using your graceful agility and expert stealth tactics to navigate the area and avoid its hostile inhabitants. Reach your objective without being seen, thwart the villain’s master plan, and save the world!', type: 'Single Player, third person, side-scrolling, stealth platformer', tools: 'Unity, Visual Studio, Photoshop, Illustrator', contribution: 'Created all environment art and props, created main menu & UI, created marketing materials (poster, logo, trailer), designed levels and asset placement, coded assets (menus, UI, interactables)'},
    {title: 'PTSD Project', date: '2018', desc: "Works from the PTSD Project: Harbor during the internship at E2i Creative. The project involved continuing from the previous team's progress on a VR experience which assists medical professionals in caring for PTSD patients with a soothing atmosphere and in assessing PTSD with objects that created interest. The images above showcase the changes made from the beginning of the project to our team's completion of the project.", type: 'Exploration', tools: 'Unity, Visual Studio, Maya, Substance Painter, Illustrator, Photoshop', contribution: "Team leader of 3 artists, designed asset placement in scene of all created models and FX, created models (lighthouse, telescope, whale, guard railing & ropes, gate, wooden barricade, bridge, ice trays, mangoes, grapes, oranges, fish, cucumbers, eggplants, radishes, conch shells, sand dollars, drinks), skybox of far away islands, textures (white sand, wooden planks, cobblestone, buildings, seagulls, crank, gear, lightbulb, fish, stand boxes, fisherman girl, water fountain, and aforementioned models), animations (fisherman girl, seaplane, whale, sailing ship, gate, lighthouse), FX (lights, water fountain, fish pickups, coin pickups, whale blowhole), coded assets (lighthouse assembly game, coin toss game, seaplane flight path, and all sounds, FX, & animations), and cleaned up all UV mapping of the previous team's models"},
    {title: 'Parkinsons Project', date: '2018', desc: "Works from the Cooking Project during the internship at E2i Creative. The project involved an app which used foods and cooking items as obstacles and power-ups in a temple run style game of the endless runner genre, in order to aid Parkinson's patients with diet and nutrition to ease symptoms and teach others about Parkinson's and caring for health.", type: 'Single Player, third person, endless runner', tools: 'Maya, Substance Painter, Illustrator, Photoshop', contribution: 'Created models and textures (frying pan, whole grains, plate, knife)'},
    {title: 'Toys N Tyrants', date: '2018', desc: 'In Toys N Tyrants, players adventure through a dungeon of toys-gone-bad to defeat the Mad King, ending his tyranny once and for all! However, perhaps the true journey was the friends you made along the way.', type: 'Single Player & Co-Op, third person, Hack-and-Slash', tools: 'Unity, Visual Studio, Maya, Substance Painter', contribution: 'Managed team of 5 artists as Art Director, created models (player characters, cowboy hat, squeaky hammer, candle, barricade, lincoln logs, spool & needle, nurse hat, pillow, pirate hat, race track, ship, spinning top, wizard hat), created textures (jack-in-the-box, toy chest, all aforementioned models), created UI, created player character animations, created marketing materials (poster & logo)'},
    {title: 'Boom Bots', date: '2017', desc: 'Boom Bots is a fast-paced arena shooter where the only type of weapon is a grenade customizable by the player. Choose how your grenades travel, how they detonate, and what type of explosion they cause with an added variety of movement styles at your disposal.', type: 'Single player, first person, 3D-shooter', tools: 'Unity, Visual Studio, Maya, Photoshop, Illustrator', contribution: 'Created all environment models, created props (catwalk, wires, pipes, metal beam lights, door sensors), created emission maps, created textures (all environment & props), upgraded texture quality for all game textures, created logo, created and designed itch.io page'},
    {title: 'Cornucoopia', date: '2015', desc: 'A quick, competitive rogue-like board game where hungry, (un)lucky foxes try to steal not-so-defenseless chickens.', type: 'Multiplayer, physical board game', tools: 'Photoshop, Illustrator, 3D Printer', contribution: "Created all cards & characters, and contributed to game's mechanics"}];

    const projectData = projectDataObjects.filter(project => {return project.title === projectId.replace(/-/g, ' ')});

    return (
        <>
            <h1 className='project-title'>
                {projectData.title}
            </h1>
            <p className='project-sub-title'>
                {projectData.date}
            </p>
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
                </div>
            </div>
            <footer id='footer' className='footer'>
                AB Portfolio - 2023 © Arielle Bartee
            </footer>
        </>
    )
}

export default ProjectLoad