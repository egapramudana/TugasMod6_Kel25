import React from "react";
import "./index.css";

export default function index({ data, onClick }) {
  return (
    <div className="card" onClick={onClick}>
      {data && data.i && data.i.imageUrl ? (
        <>
          <figure>
            <img src={data.i.imageUrl} alt={data.l} />
          </figure>
          <div className="card-info">
            <h3>{data.l}</h3>
            <p>{data.q}</p>
          </div>
          <div onClick={onClick}>
            {/* Display card information */}
            <p>{data.title}</p>
        </div>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}