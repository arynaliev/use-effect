import React from "react";

const DogCard = ({ onXClick, onLikeClick, imgSrc, likes, id }) => {
  return (
    <div className="dog-card">
      <button onClick={() => onXClick(id)}>x</button>
      <img src={imgSrc} alt="dog" width="200px" />
      <button onClick={() => onLikeClick(id)}>Like</button>
      <h1>{likes}</h1>
    </div>
  );
};

export default DogCard;
