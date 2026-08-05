import {useState} from 'react';

function ProjectForm({addProject}) {
    const [title, setTitle]=useState("")
    const [description,setDescription]= useState("")

    function handleSubmit(evt) {
        evt.preventDefault();

        addProject({
            title: title,
            description: description,
        });

        setTitle("");
        setDescription("");
    }
    return (
        <form onSubmit= {handleSubmit}>
            <input
            type= "text"
            placeholder="Project Title"
            value={title}
            onChange={(evt)=> setTitle(evt.target.value)}

            />
            <textarea
            type= "text"
            placeholder= "Project Description"
            value= {description}
            onChange={(evt)=> setDescription(evt.target.value)}
            />
            <button type="submit">
                Add Project
            </button>

        </form>
    );
}

export default ProjectForm;