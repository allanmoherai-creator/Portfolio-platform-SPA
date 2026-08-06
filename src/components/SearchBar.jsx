function SearchBar({search,setSearch}) {
    return (
        <div className="my-6 bg-[oklch(90.1%_0.076_70.697)] p-4 rounded">
        <input className="w-full p-3 boarder rounded"
        type="text"
        placeholder="Search projects..."
        value={search}
        onChange= {(evt)=>{setSearch(evt.target.value);}}
        />
        </div>
    );
}

export default SearchBar;