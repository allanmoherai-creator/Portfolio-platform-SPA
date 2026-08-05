function ProjectCard({projects}) {
    return (
        <div>
            <h3>{projects.title}</h3>
            <p>{projects.description}</p>

        </div>
    );
}

export default ProjectCard;