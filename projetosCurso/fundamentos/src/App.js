import React, { Component } from 'react'  //importa react e componente dentro dele

class Button extends Component {
  render() {
    return(
      <button>Enviar!</button>
    )
  }
}

class App extends Component { //novo componente app que extende do Component
  render() {    //metodo render dentro de Component que retorna conteudo html
    return(     
      <>     
        <h1>Hello World!</h1>
        <Button />
      </>
      //ou <React.Fragment> ao inves de <>
    )
  }
}

export default App //garante que arquivos fora dele tenham acesso ao componente