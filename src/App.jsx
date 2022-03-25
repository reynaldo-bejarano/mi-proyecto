import Contador from "./components/Contador";
import Frutas from "./components/Frutas";



const Click = () => {
  return console.log("Me diste click");
};

const App = () => {
  const saludo = "Saludos a todos";
  const frutas = ["🍈", "🍓", "🍌"];

  return (
    <div className="container ">
      <p className="text-primary">{saludo}</p>


      <Frutas frutasApp={frutas} />
      <button
        className="btn btn-primary"
        onClick={() => {
          console.log(Click);
        }}
      >
        Dame click
      </button>
      <Contador/>

     
    </div>
  );
};

export default App;
