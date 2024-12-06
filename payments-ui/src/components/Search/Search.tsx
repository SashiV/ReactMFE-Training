import './Search.css';

const Search = () : JSX.Element => {

    return (
        <div className="searchBox">
            <form onSubmit={doSearch}>
            <label htmlFor="orderId">Order Id:</label>
            <input id="orderId" type="text" value={searchTerm} 
                onChange={handleChange} className={touched && !valid ? 'searchBoxError'}/>
            <button type="submit" disabled={!valid}>Search</button>
            </form>
        </div>
    );
}

export default Search
