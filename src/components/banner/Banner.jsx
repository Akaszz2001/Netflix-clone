import axios from '../../components/axios'
import React, {useEffect, useState} from 'react'
import { API_KEY ,imgUrl} from '../constants/constant'
import "./Banner.css"
function Banner() {
    const [Movie, setMovie] = useState()
      useEffect(() => {
        axios.get(`trending/all/day?api_key=${API_KEY}`).then((res)=>{
          console.log(res.data.results);
         let e= res.data.results[Math.floor(Math.random()*res.data.results.length)];
          setMovie(e)
          
    
        })
      }, [])
      
  return (
    <div style={{
      backgroundImage:`url(${Movie ? imgUrl+Movie.backdrop_path:""})`}} 
     className="banner">
        <div className="content">
            <h1 className="title">{Movie ? Movie.title :''}</h1>
            <div className="banner_button">
                <button className="button">Play</button>
                <button className="button">Mylist</button>

            </div>
            <p className="description">
              {Movie ? Movie.overview: ''}
            </p>
        </div>
        <div className="fade">
          
        </div>
    </div>
  )
}

export default Banner