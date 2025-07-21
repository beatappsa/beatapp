import React from 'react'

const ProjectCard = ({ project, rtl }) => {
  if (rtl) {
    return (
      <div className="project-card style-7 pricing-card">
        <div className="card h-100 border-0 shadow-sm">
          <div className="card-header bg-blue7 text-white text-center">
            <h4 className="mb-0">{project.title}</h4>
            <small>{project.description}</small>
          </div>
          <div className="card-body text-center">
            <div className="price mb-3">
              <h2 className="color-blue7 mb-1">{project.price}</h2>
              <p className="text-muted mb-0">{project.details}</p>
            </div>
            <ul className="list-unstyled text-start">
              {project.features.map((feature, index) => (
                <li key={index} className="mb-2">
                  <i className="fas fa-check-circle color-blue7 me-2"></i>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <div className="card-footer bg-transparent">
            <a href="https://beatapp.io/booking" className="btn btn-outline-primary w-100" target="_blank">
              <i className="fas fa-phone me-2"></i>
              احجز مكالمة مجانية
            </a>
          </div>
        </div>
      </div>
    )
  }

  return (
    <a href="#" className="project-card style-7">
      <div className="info">
        <h6>{ project.title }</h6>
        <h3>{ project.description }</h3>
      </div>
      <div className="img">
        <img src={project.image} alt="" />
      </div>
    </a>
  )
}

export default ProjectCard