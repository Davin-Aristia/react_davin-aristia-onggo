function Search({ searchTerm, setSearchTerm, handleSearch }) {
  return (
    <form className="d-flex" role="search" onSubmit={handleSearch}>
      <div className="input-group my-2">
        <input
          type="text"
          className="form-control"
          placeholder="Search"
          aria-label="Search"
          aria-describedby="button-addon2"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="btn btn-dark" type="submit" id="button-addon2">
          Search
        </button>
      </div>
    </form>
  );
}

export default Search;
