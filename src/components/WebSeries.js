import axios from 'axios';
import React,{useState,useEffect} from 'react'
import Single from '../Single/Single';
import CoustomPagination from '../Pages/CoustomPagination';
import Genres from '../config/Geners';
import useGenres from '../Hooks/useGenre';




const WebSeries = () => {

    const [page, setPage] = useState(1);
    const [content, setContent] = useState([]);
    const [numofPages, setNumofPages] = useState();
    const [selectedGenres, setSelectedGenres] = useState([]);
    const [genres, setGenres] = useState([]);
    const genreforURL = useGenres(selectedGenres)



    const fetchMovie = async () => {
        const {data} = await axios.get(
            `https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genreforURL} `
        );
    
        
        setContent(data.results);
        setNumofPages(data.total_pages);
        
      };

      useEffect(() => {
        window.scroll(0, 0);
        fetchMovie();
       
        // eslint-disable-next-line
      }, [page,genreforURL]);
    
   

      return (
        <div>
          <span className="pageTitle">WEB Series</span>
          <Genres
              type="tv"
              selectedGenres={selectedGenres}
              setSelectedGenres={setSelectedGenres}
              genres={genres}
              setGenres={setGenres}
              setPage={setPage}
           />
          
          <div className="trending">
            {content &&
              content.map((c) => (
                <Single
                  key={c.id}
                  id={c.id}
                  poster={c.poster_path}
                  title={c.title || c.name}
                  date={c.first_air_date || c.release_date}
                  media_type="movie"
                  vote_average={c.vote_average}
                />
              ))}
          </div>
          {numofPages > 1 && (
            <CoustomPagination  setPage={setPage} numOfPages={numofPages}/>
          )}
        </div>
      );
    };

export default WebSeries;