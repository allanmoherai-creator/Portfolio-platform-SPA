import {useState} from 'react';

import Header from './components/Header';
import ProjectForm from './components/ProjectForm';
import SearchBar from './components/SearchBbar';
import ProjectList from './components/Projectlist';


function App() {
  const [projects, setProjects]= useState([
    {id: 1,
    title: 'Weather app',
    description: 'A weather app that shows the current weather and forecast for a given location.'
   },
   {
    id: 2,
    title: 'Blog app',
    description: 'A blog app that allows users to create, edit, and delete blog posts.'
   },
   {
    id: 3,
    title: 'E-commerce app',
    description: 'An e-commerce app that allows users to browse products, add them to a cart, and checkout.'
   }

  ]);
  const [search, setSearch]= useState("")

  function addProject(newProject) {
    setProjects([
      ...projects,
      {
        id: projects.length +1,
        ...newProject
      }
    ]);
  }
  const filterProjects= projects.filter((project)=>project.title.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="min-h-screen bg-[oklch(66.6%_0.179_58.318)]">
      <div className="max-w-3xl mx-auto p-6">
        <Header/>
        <ProjectForm addProject={addProject}/>
        <SearchBar search={search} setSearch={setSearch}/>
        <ProjectList projects={filterProjects}/>
      </div>
    </div>
    
  );
}

export default App
