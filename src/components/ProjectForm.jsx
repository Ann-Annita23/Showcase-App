import React from 'react'

const ProjectForm = ({newTitle, newDescription, onAddProject, setFormTitle, setFormDescription})=>{
   return(
    <section className="card shadow-sm mb-4">
      <div className="card-header bg-dark text-white">
         <h3 className="h5 mb-0">Add Project</h3>
         </div>
         <div className="card-body">
    <form onSubmit={onAddProject}>

      <div className="mb-3">
         <label className="form-label fw-bold">Title</label> <br/>
        <input type="text"
        value={newTitle}
        onChange={(e) => setFormTitle(e.target.value)}
         /><br/>
         </div>

         <div className="mb-3">
         <label className="form-label fw-bold">Description</label> <br/>
         <textarea 
         className="form-control"
         row="3"
         value={newDescription}
         onChange={(e)=> setFormDescription(e.target.value)}></textarea><br/>

      </div>
        
         <button type="submit" className="btn btn-success w-100 fw-bold">Add Project</button>
    </form>
      </div>
    </section>
   ); 
};

export default ProjectForm;