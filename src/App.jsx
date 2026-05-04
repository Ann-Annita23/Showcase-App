import { useState } from 'react'
import Header from './components/Header';
import ProjectForm from './components/ProjectForm';
import ProjectList from './components/ProjectList';
import SearchBar from './components/SearchBar';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App(){
  // Memory for the list of projects
  const [projects, setProjects] = useState([]);
  // Memory for the search query
  const [searchQuery, setSearchQuery] = useState("");

  //Memory for the Form Inputs(Titles and Descriptions)
  const [formTitle, setFormTitle] = useState("");
  const [formDescription, setFormDescription] = useState("");

  //Function to handle the new project addition
  const addProject = (e) => {
    e.preventDefault();
    if(formTitle.trim()===""|| formDescription.trim()==="" ) return; // Prevent adding empty projects

    const newProject = {
      id: Date.now(), // Unique ID based on timestamp
      title: formTitle,
      description: formDescription
    };
    setProjects([...projects, newProject]);
    setFormTitle("");
    setFormDescription("");
  }

  return(
    <div className="bg-light min-vh-100">
      <header/>
      <div className="container py-5">
        <div className="row">
          <div className="col-lg-4mb-4">
            <div className="sticky-top" style={{top:'20px'}}>
                <ProjectForm
      newTitle={formTitle}
      newDescription={formDescription}
      onAddProject={addProject}
      setFormTitle ={setFormTitle}
      setFormDescription={setFormDescription}
      />

      <SearchBar
      searchItem={searchQuery}
      onSearchChange={setSearchQuery}
      />

      <ProjectList
      projects={projects}
      searchQuery={searchQuery}
      />
      </div>
      </div>
      </div>
      </div>
      </div>
  )
}
