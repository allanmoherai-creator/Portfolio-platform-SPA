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
        <form className="mt-6 bg-[oklch(98%_0.016_73.684)] p-6 flex flex-col rounded shadow"
         onSubmit= {handleSubmit}>
            <input className="w-full border rounded p-3 mb-4"
            type= "text"
            placeholder="Project Title"
            value={title}
            onChange={(evt)=> setTitle(evt.target.value)}

            />
            <textarea className="w-full border rounded p-3 mb-4"
            rows= "3"
            type= "text"
            placeholder= "Project Description"
            value= {description}
            onChange={(evt)=> setDescription(evt.target.value)}
            />
            <button className="bg-[oklch(37.9%_0.146_265.522)] text-white px-4 py-2 rounded w-fit"
            type="submit">
                Add Project
            </button>

        </form>
    );
}

export default ProjectForm;