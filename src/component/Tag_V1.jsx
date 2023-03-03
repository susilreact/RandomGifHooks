import { useState, useEffect } from "react";
import axios from "axios";

const API_KEY = process.env.REACT_API_KEY;

const Tag = () => {
  const [gif, setGif] = useState("");
  const [tag, setTag] = useState("dog");

  const fetchGif = async (tag) => {
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
    const { data } = await axios.get(url);

    const imgSrc = data?.data?.images?.downsized_large?.url;

    setGif(imgSrc);
  };

  useEffect(() => {
    fetchGif(tag);
  }, [tag]);

  const clickHandler = () => {
    fetchGif(tag);
  };

  return (
    <div className="container">
      <h1> Random {tag}</h1>
      <img width="500" src={gif} alt="Random Gif" />
      <button onClick={clickHandler}>ChangeGif</button>
      <input value={tag} onChange={(e) => setTag(e.target.value)} />
    </div>
  );
};

export default Tag;
