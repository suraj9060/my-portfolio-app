import React from 'react'
import "./ProjectCart.css"

const ProjectCart = ({project}) => {
    return (
        <div className='project-cart'>
            <div className='project-info'>
                <label htmlFor="" className='project-title'>{project.title}</label>
                <div className='project-links'>
                    {project.demo && (<a className='project-link' href={project.demo}>
                        <div className='link-button'>
                            <i class="fi fi-rr-globe"></i>Demo
                         </div>
                    </a>
                    )}
                    {project.github && (<a className='project-link' href={project.github}>
                        <div className='link-button'>
                            <i class="devicon-github-original colored"></i> Git Hub
                         </div>
                    </a>)}
                </div>
                <p>{project.about}</p>
                <div className='project-tags'>
                    {project.tags.map((tag) => {
                        return <label htmlFor="" className='tag'>{ tag}</label>
                    })}
                </div>
            </div>
            <div className='project-cart-image'>
              <img src={project.image} className='project-photo' alt="" />
            </div>
        </div>
    )
}

export default ProjectCart