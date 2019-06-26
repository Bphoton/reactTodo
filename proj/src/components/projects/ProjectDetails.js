import React from 'react'

const ProjectDetails = (props) => {
  const id = props.match.params.id
  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Project Title - {id}</span>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, quaerat veniam natus tenetur nulla, iste laudantium in culpa asperiores, dolore officia! Iusto hic sunt illum sequi dicta modi quos quidem?</p>
        </div>
        <div className="card-action grey lighten-4 grey-text">
          <div>Posted By Brendan</div>
          <div>Todays Date Is:</div>
        </div>
      </div>
    </div>
  )
}

export default ProjectDetails
