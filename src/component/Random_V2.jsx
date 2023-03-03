import useGif from "../useGif";

const Random = () => {
  const { gif, fetchGif } = useGif();

  return (
    <div className="container">
      <h1> Random</h1>
      <img width="500" src={gif} alt="Random Gif" />
      <button onClick={() => fetchGif()}>ChangeGif</button>
    </div>
  );
};

export default Random;
