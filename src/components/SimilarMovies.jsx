import axios from "axios"
import { useEffect, useState } from "react"


const SimilarMovies = () => {
    const [similarMovie, setSimilarMovies] = useState([])

    useEffect(() => {
        const fetchData = async () => {
          const response = await axios.get(
            `https://api.themoviedb.org/3/movie/{id}/recommendations?api_key=401dea9884f055ff9022d7695c0b7df1`
          );
          console.log(response)
        };
        fetchData();
      }, [id]);
  return (
    <>
      
    </>
  )
}

export default SimilarMovies
