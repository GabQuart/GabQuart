import logo from './logo.svg';
import './App.css';
import Teste from './components/teste'; 
import Pessoa from './components/pessoa1';
const nome = 'Lucas';

function App() {
  return (
    <div className="App">
        <h1>Olá Mundo!</h1>
        <p>{nome}</p>
        <img src={logo} className="App-logo" alt="logo" />
        <Teste/>
        <Pessoa 
        nome="Gabryel Cabral Pereira" 
        idade="20" 
        profissao="Progamador Front-End e Back-End" 
        foto="https://placehold.co/300x200"
        n
        />
    </div>
  );
}


export default App;
