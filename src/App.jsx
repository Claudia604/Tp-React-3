import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Ejercicio from "./components/Ejercicio";

function App() {
  return (
    <main className="container">
      <h1 className="text-center my-5">EJERCICIO 3</h1>
      <Ejercicio valor="my friend!" />
    </main>
  );
}

export default App;
