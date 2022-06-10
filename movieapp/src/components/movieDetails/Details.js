import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react'

const Details = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState([]);
  async function movieData() {
    let data = await fetch(`https://amoviea1997.herokuapp.com/posts/${id}`)
    let res = await data.json()
    setMovie(res)
    console.log(res)


  }
  useEffect(() => {
    movieData()
  }, []);
  return (
    <div style={{ "backgroundColor": "skyblue", "width": "100%", "height": "300px", marginTop: "50px", display:"grid", alignItems:"center", justifyContent:"center" }}>
      <p style={{fontSize:"30px"}}>{movie.name}</p>
      <p style={{fontSize:"20px"}}>{movie.Genres}</p>
      <p style={{fontSize:"15px"}}>{movie.rating}</p>
      <p style={{fontSize:"15px"}}>{movie.date}</p>

    </div>
  );
}

export default Details;
