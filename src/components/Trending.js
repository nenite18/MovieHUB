import React,{useState,useEffect} from 'react'
import axios from "axios";
import Single from '../Single/Single';
import './Trending.css';
import Add from '../Add';
import CoustomPagination from '../Pages/CoustomPagination';
require('dotenv').config();


const Trending = () => {
   
   
    const [page, setPage] = useState(1);
    const [content, setContent] = useState([]);
    
    
    const fetchTrending = async () => {
        const { data } = await axios.get(
          `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`
        );
    
        setContent(data.results);
      };

      useEffect(() => {
    window.scroll(0, 0);
    fetchTrending();
    // eslint-disable-next-line
  }, [page]);

    return (
        <div>
             <span className ="pageTitle"> Trending </span>
             <div className ="trending">
                 {content && content.map((c) =>(
                     <Single key ={c.id} id = {c.id} poster ={c.poster_path} title ={c.title || c.name} date ={c.first_air_date || c.released_date} media_type ={c.media_type} vote_average ={c.vote_average} add = {Add}/>  
                     
                     )) 
                         
                        
                } 
                          
            </div>
             
           <CoustomPagination setPage = {setPage} />
          
        </div>
    )
}

export default Trending
