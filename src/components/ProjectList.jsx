import React from 'react';

const ProjectList =({projects, searchQuery}) => {
    const filteredProjects = projects.filter(p=>p.title.toLowerCase().includes(searchQuery.toLowerCase())
);

return(
    <section className= "row g-4">
        {filteredProjects.map(project=>(
            <div key={project.id} className="col-12 col-md-6">
                <div className="card h-100 shadow-sm border-0 border-start border-primary border-4">
                   <div className="card-body">
                    <h4 className="card-title text-primary">{project.title}</h4>
                    <p className="card-text text-muted">{project.description}</p>
                   </div>
                   <div className="card-footer bg-transparent border-0">
                    <span className="badge rounded-pill bg-light text-dark border"></span>
                   </div>
                </div>
            </div>
        ))}
    </section>
);
};

export default ProjectList;