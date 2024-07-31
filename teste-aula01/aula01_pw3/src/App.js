import logo from './logo.svg';
import './App.css';
import Teste from './components/teste'; 

const nome = 'Lucas';

function App() {
  return (
    <div className="App">
        <h1>Olá Mundo!</h1>
        <p>{nome}</p>
        <img src={logo} className="App-logo" alt="logo" />
        <Teste/>
    </div>
  );
}


export default App;
