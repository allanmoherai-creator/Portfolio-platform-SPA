function SearchBar({search,setSearch}) {
    return (
        <input
        type="text"
        placeholder="Serch projects..."
        value={search}
        onChange= {(evt)=>{setSearch(evt.target.value);
        }}
        />
    );
}

export default SearchBar;