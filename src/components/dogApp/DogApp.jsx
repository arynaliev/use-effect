import React, { useState, useEffect } from "react";
import DogCard from "../dogCard/DogCard";
import { v4 as uuidv4 } from "uuid";
import "./dogApp.style.css";

const url = "https://dog.ceo/api/breeds/image/random";

const DogApp = () => {
  const [dogList, setDogList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getDog = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(url);
      const data = await response.json();
      setDogList([...dogList, { url: data.message, id: uuidv4(), likes: 0 }]);
      setIsLoading(false);
    } catch (err) {
      console.log("error:", err);
    }
  };

  useEffect(() => {
    //  fetch(url)
    //    .then((res) => res.json())
    //    .then((data) => setDogImg(data.message));
    getDog();
  }, []);

  const onXClick = (id) => {
    console.log(id);
    //  if(dogList)
    setDogList(dogList.filter((el) => el.id !== id));
  };

  const onLikeClick = (id) => {
    setDogList(
      dogList.map((el) => (el.id === id ? { ...el, likes: el.likes + 1 } : el))
    );
  };

  //  console.log();

  return (
    <div className="container">
      <button onClick={getDog}>{isLoading ? "Loading..." : "Get Dog"}</button>
      {dogList.map((el) => (
        <DogCard
          key={el.id}
          imgSrc={el.url}
          id={el.id}
          likes={el.likes}
          onXClick={onXClick}
          onLikeClick={onLikeClick}
        />
      ))}
    </div>
  );
};

export default DogApp;
