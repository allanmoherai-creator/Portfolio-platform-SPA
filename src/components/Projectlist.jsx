import ProjectCard from './Projectcard';

function ProjectList({projects}) {
    return (
        <div>
            <h2>Projects</h2>

            {projects.map((project)=>(<ProjectCard key={project.id}projects={project}/>))} 
        </div>
    );
}

export default ProjectList;