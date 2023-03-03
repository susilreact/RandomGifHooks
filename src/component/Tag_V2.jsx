import { useState } from "react";
import useGif from "../useGif";

const Tag = () => {
  const [tag, setTag] = useState("dog");
  const { gif, fetchGif } = useGif();

  return (
    <div className="container">
      <h1> Random {tag}</h1>
      <img width="500" src={gif} alt="Random Gif" />
      <button onClick={() => fetchGif(tag)}>ChangeGif</button>
      <input value={tag} onChange={(e) => setTag(e.target.value)} />
    </div>
  );
};

export default Tag;
