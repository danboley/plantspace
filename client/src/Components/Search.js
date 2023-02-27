
function Search ({ setSearch }){
    return (
        <div className="searchbar">
            <label>Search:  </label>
            <input className="searchbartrue" type="search" placeholder="Search Plants..." onChange={(e) => setSearch(e.target.value)}
            />
        </div>
    )
}
export default Search;