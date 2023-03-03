import { useState, useEffect } from "react";
import axios from "axios";

const API_KEY = process.env.REACT_API_KEY;

const Random = () => {
  const [gif, setGif] = useState();

  useEffect(() => {
    const fetchGif = async () => {
      const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
      const { data } = await axios.get(url);

      const imgSrc = data?.data?.images?.downsized_large?.url;

      setGif(imgSrc);
    };

    fetchGif();
  }, []);

  return (
    <div className="container">
      <h1> Random</h1>
      <img width="500" src={gif} alt="Random Gif" />
    </div>
  );
};

export default Random;
