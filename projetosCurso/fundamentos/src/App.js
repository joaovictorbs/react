import React, { Component } from 'react'  //importa react e componente dentro dele

const title = <h2>Olá mundo!</h2> //tag nao e html simples e sim JSX

function formatName(name, lastname) {
  return name + lastname;
}

class Button extends Component {
  render() {
    return(
      <button>Enviar! {  2 + 2 }</button>  //JSX | nao e html puro
    )
  }
}

class App extends Component { //novo componente app que extende do Component
  render() {                  //metodo render dentro de Component que retorna conteudo html
    return(     
      <>     
        { title }                                
        <h1>Hello World! { formatName('Joao ', 'Barbosa') }</h1>
        <Button />
      </>
      //ou <React.Fragment> ao inves de <>
    )
  }
}

export default App //garante que arquivos fora dele tenham acesso ao componente