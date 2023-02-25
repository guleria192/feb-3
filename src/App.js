import { useState } from 'react';
import axios from 'axios';
import './App.css';
import {Routes,Route, NavLink} from 'react-router-dom'
import ShowDetail from './ShowDetails/ShowDetail';


function App() {

  const [search , setSearch] = useState("")
  const [searchAns , setSearchAns] = useState([])

  const getPostData = ()=> {
    axios.get(`https://www.omdbapi.com/?apikey=cd358a83&s=${search}`)
    .then(resp => {
      console.log(resp);
      console.log(resp.data.Search);
      if(resp.data.Response === "True"){
      setSearchAns(resp.data.Search)
      }
    })
  }

 


  return (
<>

    <Routes>
      <Route path="/" />
      <Route path="/movies/:id" element={<ShowDetail/>}/>
    </Routes>




    <div className="App">
     <h3>Movies App</h3>
     <hr/>
     <h3>Search For Movies By Their Title</h3>
      

     
    

     <input type="text" placeholder='Search..' value={search} onChange={(e)=>{setSearch(e.target.value)}}/>
      <br/>

    <button onClick={getPostData}>Search Now!</button>

    <div className='box'> 


   {searchAns.map((value,key) => {


    return(

      
      
      
      <div className='box1' key={key}>
      
      <img src={value.Poster} alt="error" />
      <div>Title :{value.Title}</div>
      <div>Type :{value.Type}</div>
      <div>Year :{value.Year}</div>
      <NavLink to={`/movies/${value.imdbID}`}>
      <button>Know More</button>
      </NavLink>
      </div>
      
    )
   })
   }

   </div>
    

    </div>

    </>
  );
}

export default App;
