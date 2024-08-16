import { useState } from "react";
import "./App.css";
import Card from "./Components/Card";

function App() {
  const [form, setForm] = useState({
    name: "",
    game: ""
  })

  const [show, setShow] = useState(false);
  const [error, setError] = useState(false);

  const handleChangeName = (e) => setForm({...form, name:e.target.value});
  const handleChangeGame = (e) => setForm({...form, game:e.target.value});

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const {name,game} = form;

    if(name.trim().length>3 && !(name.trimEnd().includes(" ")) && game.trim().length>=6){
      setShow(true);
      setError(false);
    }else{
      setError(true);
      setShow(false)
    }
  }


  return (
    <>
      <h1>Carga de estudiantes</h1>
      <form onSubmit={handleSubmit}>
        <label>Nombre</label>
        <input type="text" onChange={handleChangeName} value={form.name} />
        <label>Videojuego favorito</label>
        <input type="text" onChange={handleChangeGame} value={form.game} />
        <button>Enviar</button>
      </form>
      {show && (<Card name={form.name} game={form.game} />)}
      {error && (<h4 style={{color:"red"}}>Por favor chequea que la información sea correcta</h4>)}
      
    </>
  );
}

export default App;
