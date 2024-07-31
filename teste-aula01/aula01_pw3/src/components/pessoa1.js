function Pessoa(props){
    return ( 
      <div>
        <h1>Nome: {props.nome}</h1>
        <p>Idade: {props.idade}</p>
        <p>Profissão: {props.profissao}</p>
        <img src = {props.foto} alt={props.nome}/>
      </div>
    );
}

export default Pessoa;