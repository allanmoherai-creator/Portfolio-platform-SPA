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

  function addProject(newProject) {
    setProjects([
      ...projects,
      {
        id: projects.length +1,
        ...newProject
      }
    ]);
  }

  return (
    <>
    <Header/>
    <ProjectForm addProject={addProject}/>
    <SearchBar/>
    <ProjectList projects={projects}/>
    </>
    
  );
}

export default App
