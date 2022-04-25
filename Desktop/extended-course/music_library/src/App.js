import React, {useState, useEffect, Fragment} from 'react'
import Gallery from './components/gallery';
import SearchBar from './components/SearchBar';
import AlbumView from './components/AlbumView';
import ArtistView from './components/ArtistView';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
let [message, setMessage] = useState('search for music!')
let [search, setSearch] = useState('')
let [data, setData] = useState([])

const API_URL = 'https://itunes.apple.com/search?term='

useEffect(()=>{
    if(search){
      async function fetchData(){
        document.title = `${search} Music`
        const response = await fetch (API_URL + search)
        const responseData = await response.json()
        if(responseData.results.length > 0){
          return setData(responseData.results)
        }
        else{
          setMessage('Not Found')
        }
    }
    fetchData()
  }
},[search] )

function handleSearch(e, term){
  e.preventDefault()
  setSearch(term)
}

  return (
    <div>
      {message}
      <Router>
        <Routes>
          <Route path='/' element={
            <Fragment>
              <SearchBar handleSearch = {handleSearch}/>
              <Gallery data = {data}/>
            </Fragment>  
          } />
          <Route path='/album/:id' element={<AlbumView/>}/>
          <Route path='/artist/:id' element={<ArtistView/>}/>   
        </Routes>
      </Router>
    </div>
  );
}

export default App;
