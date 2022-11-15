
function Search ({ setSearch }){
    return (
        <div className="searchbar">
            <label>Search</label>
            <input type="search" placeholder="Search Plants..." onChange={(e) => setSearch(e.target.value)}
            />
        </div>
    )
}
export default Search;