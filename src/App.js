import "./styles.css";
import "./App.css";
import Random from "./component/Random_V2";
import Tag from "./component/Tag_V2";
export default function App() {
  return (
    <div className="App">
      <div className="main-container">
        <Random />
        <Tag />
      </div>
    </div>
  );
}
