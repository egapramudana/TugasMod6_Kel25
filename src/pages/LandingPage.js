import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Card from "../components/card";
import Modal from "../components/modal";

export default function LandingPage() {
  const [data, setData] = useState(null);
  const [isLoaded, setisLoaded] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery] = useState("Naruto");

  const [modalShow, setModalShow] = useState(false);
  // const [modalItem, setModalItem] = useState(null); // Dihapus karena tidak digunakan

  useEffect(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/service-worker.js')
        .then((registration) => {
          console.log('Service Worker terdaftar:', registration);
        })
        .catch((error) => {
          console.log('Gagal mendaftarkan Service Worker:', error);
        });
    }

    const fetchData = async (query) => {
      setIsLoading(true);
      try {
        const response = await axios.get(
          "https://imdb8.p.rapidapi.com/auto-complete", {
            params: { q: query },
            headers: {
              "x-rapidapi-host": "imdb8.p.rapidapi.com",
              "x-rapidapi-key": "a4de7655f5msh306801aaf42ea09p128c11jsn290caf08125c",
            },
          }
        );
        if (response.status === 200) {
          setData(response.data);
          setisLoaded(true);
          setIsLoading(false);
        }
      } catch (err) {
        console.log(err);
        setIsLoading(false);
      }
    };

    if (!isLoaded) {
      fetchData(query);
    }
  }, [isLoaded, query]);

  const onSearch = (e) => {
    if (e.key === "Enter") {
      setisLoaded(false);
      setQuery(e.target.value);
    }
  };

  return (
    <main>
      <input
        type="text"
        placeholder="Search film by name"
        onKeyDown={(e) => onSearch(e)}
      />
      <h3 className="title">Search : {query}</h3>
      {!data || isLoading ? (
        <p>Loading...</p>
      ) : (
        <div className="card-container">
          {data.d.map((item, index) => (
            <Link to={`/movie-detail/${item.id}`} key={index}>
              <Card data={{ ...item, title: item.l }} onClick={() => setModalShow(true)} />
            </Link>
          ))}
        </div>
      )}
      <Modal data={null} isShow={modalShow} onCancel={() => setModalShow(false)} />
    </main>
  );
}
