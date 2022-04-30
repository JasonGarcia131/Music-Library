import { useContext, useState } from 'react'
import {SearchContext} from '../Context/SearchContext.js'

function SearchBar(){
    const {term, handleSearch} = useContext(SearchContext)

    return (
        // onSubmit={(e) => props.handleSearch(e, searchTerm)}
         <form> 
            <input ref={term} type="text" placeholder="Enter a search term here"/>
            <button onClick={(e) => handleSearch(e, term.current.value)}>Submit</button>
        </form>
    )
}


export default SearchBar