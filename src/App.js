import logo from "./logo192.png";
import './App.css';
import { Typography } from "@mui/material";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <div className="App">
      <header className="App-header"><header/>
        <img src={logo} className="App-logo" alt="logo" />
        <NavBar/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;