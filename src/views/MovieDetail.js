import { DivContainer } from "../styles/DivContainer";
import { useParams } from "react-router-dom"
import { MoviesService } from "../api/MoviesService";
import { useState, useEffect } from "react";

export const MovieDetail = () => {

    const {id} = useParams();

    const [movie, setMovie] = useState({});

    const fetchMovie = async () => {
      const {data} = await MoviesService.getMovieById(id);
      setMovie(data);
      console.log(data)
    }
  
    useEffect(() => {
        fetchMovie();
    }, []);

    return(
        <DivContainer>
        <h1>{movie.title}</h1>

        <article>{movie.overview}</article>
        </DivContainer>
    )

}

