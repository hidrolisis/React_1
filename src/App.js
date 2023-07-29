import './App.css';
// import { Usuario } from './componets/Usuario/Usuario';
import logo from "./logo192.png";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemCount from './components/ItemCount/ItemCount';
// import { Typography } from "@mui/material";


function App() {
  return (
    <div className="App">
      {/* <Usuario /> */}
        <header className="App-header"><header />
          <img src={logo} className="App-logo" alt="logo" />
          <NavBar />
          <ItemListContainer greeting={'Bienvenidos'} />
          <ItemCount initial={1} stock={20} onAdd={(quantity) => console.log('Cantidad agregada', quantity)} />
        </header>
      </div>
  );
}

export default App;