import React, { useEffect, useState } from 'react'
const baseLink = import.meta.env.VITE_BASELINK;
// const apiKey = import.meta.env.VITE_TMDB_API_KEY;

import { useAPIKey } from '../Context/ApiKeyProvider';

export const useAllMoviesData = () => {
  const apiKey = useAPIKey();  // Access the API key from context

  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!apiKey) return;

    const fetchAllMoviesData = async () => {
      try {
        let allMovies = [];
        let page = 1;
        let totalPages = 1;

        while (page <= totalPages && page <= 500) {
            
          const apiLink = `${baseLink}/trending/movie/day?api_key=${apiKey}&page=${page}`;
          const res = await fetch(apiLink);
          if (!res.ok) throw new Error("Error fetching data");

          const data = await res.json();

          allMovies = [...allMovies, ...data.results];
          totalPages = data.total_pages;
          page++;
        }

        setMovies(allMovies);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchAllMoviesData();
  }, []);

  return { movies, loading, error };
};


export const usePersonDetails = ({type, personId}) => {
    const apiKey = useAPIKey();  // Access the API key from context

    const [person, setPerson] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const apiLink = `${baseLink}/${type}/${personId}?api_key=` + apiKey;
    useEffect(() => {
        if (!apiKey) return;

        const fetchPersonDetails = async () => {
            try{
                const response = await fetch(apiLink);
                if(!response.ok){
                    console.log("Error in Fetching Data");
                }
                const data = await response.json();
                if(type==='person'){
                    setPerson([data]);
                }
                else{
                    setPerson(data);
                }
                
            }
            catch(err){
                setError(err);
            }
            finally{
                setLoading(false);
            }
        }
        fetchPersonDetails();
    }, [apiLink]);
    return { person, loading, error };
}

export const useMovieDetails = ({type, movieId, credits, page=1}) => {
    const apiKey = useAPIKey();  // Access the API key from context

    const [movie, setMovie] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    const apiLink = `${baseLink}/${type}/${movieId}${credits}?api_key=`+apiKey;

    useEffect(() => {
        if (!apiKey) return;
        const fetchCompleteData = async () => {
            try {
                const response = await fetch(apiLink);
                if (!response.ok) {
                    throw new Error("Error in fetching data...");
                }
                const data = await response.json();
                if(credits==="/credits"){
                    setMovie(data.cast);
                }
                else{
                    setMovie([data]);
                }
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchCompleteData();
    }, [apiLink]);

    return { movie, loading, error };
};



export const useTopRatedMovies = ({type, category, page=1}) => {
    const apiKey = useAPIKey();  // Access the API key from context

    const [topRated, setTopRated] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    const apiLink = `${baseLink}/${type}/${category}?api_key=`+apiKey + `&page=${page}`;
    useEffect(() => {
        if (!apiKey) return;
        const fetchCompleteData = async () => {
            try{
                const response = await fetch(apiLink);
                if(!response.ok){
                    throw new Error("Error in Fetching Data...");
                }
                const data = await response.json();
                setTopRated(data.results);
            }
            catch(err){
                setError(err);
            }
            finally{
                setLoading(false);
            }
        }
        fetchCompleteData();
    }, [apiLink]);

    return {topRated, loading, error};
}

export const usePopularMovies = ({page=1}) => {
    const apiKey = useAPIKey();  // Access the API key from context

    const [popular, setPopular] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    const apiLink = `${baseLink}/movie/popular?api_key=${apiKey}&page=${page}`;
    useEffect(() => {
        if (!apiKey) return;
        const fetchPopularMovies = async () => {
            try{
                const response = await fetch(apiLink);
                if(!response.ok){
                    throw new Error("Error in Data Loading");
                }
                const data = await response.json();
                setPopular(data.results);
            }
            catch(err){
                setError("Error in Fetching Data...."+err);
            }
            finally{
                setLoading(false);
            }
        }
        fetchPopularMovies();
    }, [apiLink]);

    return { popular, error, loading };
}


export const useTrendingMovies = ({time, type, page}) => {
    const apiKey = useAPIKey();  // Access the API key from context

    const [trending, setTrending] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const apiLink = `${baseLink}/trending/${type}/${time}?api_key=${apiKey}&page=${page}`;

    useEffect(() => {
        if (!apiKey) return;
        const fetchTrendingMovies = async () => {
            try{
                const response = await fetch(apiLink);
                if(!response.ok){
                    return console.log("Error in Fetching data...");
                }
                const data = await response.json();
                setTrending(data.results);
            }
            catch(err){
                setError(err);
            }
            finally{
                setLoading(false);
            }
        }
        fetchTrendingMovies();
    }, [apiLink])
  return { trending, loading, error };
}


const Tmdb = () => {
    const {popular, loading, error } = usePopularMovies();

    
  return (
    <div>Tmdb</div>
  )
}


export default Tmdb
