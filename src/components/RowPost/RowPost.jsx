import React,{useEffect,useState} from "react";
import './RowPost.css'
import YouTube from 'react-youtube'
import {API_KEY,imgUrl } from "../constants/constant";
import axios from '../axios'
function RowPost(props) {
  const [latest, setLatest] = useState([])
  const [Id,setId]=useState('')
  useEffect(() => {
    axios.get(props.url).then((res)=>{
      setLatest(res.data.results)
      console.log(res.data.results);
      
     
    })
  }, []);  
    const opts = {
    height: '390',
    width: '100%',
   playerVars:{
    autoplay: 1,
   },
     
    };
    console.log("video id",Id)


  const movieHandle=(id)=>{
     
      
      axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((res)=>{
        console.log(res.data.results);
        if(res.data.results.length!==0){
          setId(res.data.results[29])
          console.log(res.data.results[29]);
        }else{
          alert("Video is not available")
        }

      })
  }
  return (
    <div className="row">
      <h2>{props.title}</h2>
      <div className="posters">
        {
          latest.map((obj)=>{
           
              return(
                <img onClick={()=>movieHandle(obj.id)} className={props.isSmall ? 'smallPoster':'poster'}
                src={imgUrl+obj.poster_path}
                alt="poster"
                srcset=""
              />
              )
          })
        }
       
      </div>
    {
    

    
    Id &&   <YouTube opts={opts} videoId={Id.key}/>
    }

    </div>
  );
}

export default RowPost;
