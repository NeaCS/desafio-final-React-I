import MiApi from "./components/MiApi";
import "bootstrap/dist/css/bootstrap.min.css";
import MySearchBar from "./components/MySearchBar";
import "./index";
import { useState } from "react";

function App() {
  const [personaje, setPersonaje] = useState("");
  const [personajes, setPersonajes] = useState([]);

  const handleBuscar = (terminoABuscar) => {
    setPersonaje(terminoABuscar)
  };

  return (
    <div className="App">
      <div style={{ marginTop: "8%" }}>
        <h1
          align={"center"}
          style={{
            color: "#F2D300",
            fontSize: "6.8rem",
            fontFamily: "Rock Salt, cursive",
            fontWeight: "bold",
            textShadow: "0.5rem 0.5rem black",
          }}
        >
          La Simpsonpedia
        </h1>
        <MySearchBar
          handleBuscar={handleBuscar}
          personaje={personaje}
          setPersonaje={setPersonaje}
          setPersonajes={setPersonajes}
        />
        <MiApi personaje={personaje} setPersonaje={setPersonaje} />
      </div>
    </div>
  );
}

export default App;
