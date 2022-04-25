import {useState} from 'react'

function SearchBar(props){
   let [searchTerm, setSearchTerm] = useState('')

    return(

        <div>
            <form onSubmit={(e)=>props.handleSearch(e, searchTerm)}>
                <input type="text" placeholder='search term for music' onChange={(e)=>setSearchTerm(e.target.value)}/>
                <input type="submit"/>
            </form>
        </div>
    )

}

export default SearchBar