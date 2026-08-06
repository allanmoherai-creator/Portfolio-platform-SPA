function ProjectCard({projects}) {
    return (
        <div className="bg-[oklch(90.1%_0.076_70.697)] rounded p-5 shadow-sm mb-2">
            <h3 className= "text-lg font-semibold">{projects.title}</h3>
            <p className= "mt-2 text-gray-600">{projects.description}</p>

        </div>
    );
}

export default ProjectCard;