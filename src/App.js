import React, { useState } from "react";
import "./App.css";
import Add from "./AddModal";
import { v4 as uuid4} from "uuid";
import ListMovies from "./MovieList";
import img from "./resident evil.jpg";
import img2 from "./the lion king.jpg";
import img3 from "./tomb raider.jpg";
import Filter from "./Filter";
import { Switch,BrowserRouter,Route } from "react-router-dom";
import MovieDec from './MovieDec'





const App = () => {
  const [filter, setFilter] = useState("")
  const [rating, setRate] = useState(1)

  const [movies, setMovies] = useState([
    {
      id: uuid4(),
      name: "resident evil ",
      Image: img,
      rating: 4,
      Description: "Resident Evil, also known as Biohazard, is a Japanese horror video game series and media franchise created by Capcom. The franchise follows stories about biological weapons and viral incidents.",
      mylink : "https://www.youtube.com/watch?v=kEutwdia8n0"
    },
    {
      id: uuid4(),
      name: "the lion king ",
      Image: img2,
      rating: 3,
      Description: "After the murder of his father, a young lion prince flees his kingdom only to learn the true meaning of responsibility and bravery in this 2019 live action update of the classic animated film. Rated PG, approx. 118 minutes. Snacks are welcome!"
      ,
      mylink : "https://www.youtube.com/watch?v=GibiNy4d4gc"   
    },
    {
      id: uuid4(),
      name: "tomb raider ",
      Image: img3,
      rating: 5,
      Description: "Lara Croft (Alicia Vikander), the fiercely independent daughter of a missing adventurer, must push herself beyond her limits when she discovers the island where her father, Lord Richard Croft (Dominic West) disappeared."

    ,
      mylink : "https://www.youtube.com/watch?v=8ndhidEmUbI"    
    }

  ])
  const handleAdd = (newMovie) => {
    setMovies([...movies, newMovie]);
  };

  const handleFilter = (value) => {
    setFilter(value)
  }
  const handleRate = (val) => {
    setRate(val)
  }
  return (
    <div className="App">
      <header className="App-header" >
           <BrowserRouter>
             <Switch>
       <route exact path='/'>
       <Filter handleFilter={handleFilter} handleRate={handleRate} />
        <h1> movies </h1>
        <ListMovies movies={movies.filter(el => el.name.trim().toUpperCase().includes(filter.toUpperCase().trim()) && el.rating >= rating)} />
        <Add handleAdd={handleAdd} />
        

       </route>
       <Route path='/description/:id'>
            <MovieDec movies={movies}/>
          </Route>
        </Switch>
        </BrowserRouter>
      </header>
     

    </div>
  );


}


export default App