import ProjectCard from './Projectcard';

function ProjectList({projects}) {
    return (
        <div className="mt-8">
            <h2 className= "text-2xl font-bold  mb-4">Projects</h2>

            {projects.map((project)=>(<ProjectCard key={project.id}projects={project}/>))} 
        </div>
    );
}

export default ProjectList;