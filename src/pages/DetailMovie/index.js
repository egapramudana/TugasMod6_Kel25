import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import "./index.css";

function MovieDetail() {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(
          `https://imdb8.p.rapidapi.com/title/get-details?tconst=${id}`, 
          {
            headers: {
              "x-rapidapi-host": "imdb8.p.rapidapi.com",
              "x-rapidapi-key": "a4de7655f5msh306801aaf42ea09p128c11jsn290caf08125c",
            },
          }
        );
        if (response.status === 200) {
          setData(response.data);
          setIsLoading(false);
        }
      } catch (err) {
        console.log(err);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [id]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (!data) {
    return <p>Data not found</p>;
  }

  return (
    <div className="MovieDetail">
      <h2>{data.title}</h2>
      <p>Tahun: {data.year}</p>
      <p>Jumlah Episode: {data.numberOfEpisodes}</p>
      <p>Running Time : {data.runningTimeInMinutes} minutes</p>
      <p>Deskripsi: {data.titleType}</p>
      <img src={data.image.url} alt={data.title} />
    </div>
  );
}

export default MovieDetail;