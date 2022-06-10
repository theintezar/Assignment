import React from 'react'
import { useEffect, useState} from 'react'
import "./movie.css"
import { Link } from 'react-router-dom';

function Movie() {
    const [movie, setMovie] = useState([]);
    async function movieData(){
       let data = await fetch("https://amoviea1997.herokuapp.com/posts")
       let res = await data.json() 
       setMovie(res)
       
    }
    useEffect(() => {
        movieData()
   }, []);
    
   console.log(movie)
  return (
    <div className='main'>
    {movie.map((item)=>(
       <div className='main2'>
            <p>{item.name}</p>
            <p>{item.rating}</p>
            <p>{item.date}</p>
            <Link to = {`movie/${item.id}`}> <button>know more...</button> </Link>
        </div>
        
    ))}
    </div>
  )
}

export default Movie