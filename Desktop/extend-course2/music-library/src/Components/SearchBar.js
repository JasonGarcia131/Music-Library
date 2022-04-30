import { useState } from 'react'

function SearchBar(props){
    let [searchTerm, setSearchTerm] = useState('')

    return (
        // onSubmit={(e) => props.handleSearch(e, searchTerm)}
         <form> 
            <input type="text" placeholder="Enter a search term here"
            onChange={(e) => props.handleSearch(e, e.target.value)} />
        </form>
    )
}


export default SearchBar