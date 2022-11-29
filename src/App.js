import React, { useState } from "react";
import Header from "./components/Header";
import Todolist from "./components/todo-list";
import Banner from "./components/Banner";
import movies from "./components/moviesData";
import Secondbanner from "./components/secondbanner";

import "./App.css";



function App() {

  // const movies = []
 
    const[data,setData]=useState({
      fname:"",
      age:"",
    });
    function handleOnChange(e){
      const value=e.target.value;
      const name=e.target.name;
      
      console.log(   )
      setData({
        ...data,
        [name] : value
      })
      console.log(data)
    }

  return (
    <>

      <Header />
      <Todolist/>
     
      <label>Name<input type="text" name="fname" value={data.fname} onChange={handleOnChange} placeholder="fname"/></label>
      <label>Age<input type="text" name="age" value={data.age} onChange={handleOnChange} placeholder="age"/></label>
      <p>there are  movies found....{movies.length} </p>

      {movies.length >= 1 ?  <>
          <h1>Movies</h1>
         
          {movies.map((movie, index) => (
            <Banner
              key={index}
              name={movie.name}
              info={movie.info}
              image={movie.image}
              myurl={movie.myurl}
            />
          ))}
        </> :<>
              <h2> No movies</h2>
              <Secondbanner/>

              </>
        }
        
    </>
  );
}

export default App; 
{/* */}