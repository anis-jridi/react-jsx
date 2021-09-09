import "./App.css";
import "./styles.css";
 import anis1 from "./images/anis1.jpg"

function App() {
  return (
    <div className="App">
      <h1 classNames="titleRed">JRIDI ANIS</h1>

      <img className="img1" src={anis1} alt="anis1" />



      <img className="img1" src="/anis2.jpg" alt="" />



      <iframe width="700" height="394" src="https://www.youtube.com/embed/SGMZhdNdxM4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

    </div>
  );
}

export default App;
