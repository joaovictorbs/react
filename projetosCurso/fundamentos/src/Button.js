import React, { Component } from 'react'
import Timer from './Timer'   //importa timer


class Button extends Component {
  constructor(props) {
      super();

      this.state = {
        showTimer: true   //se showTimer for verdadeira mostra timer do timer.js
      }
  }

  //inicialização
  //montagem
  //atualizações
  //desmontagem

  render() {
    return(
      <main>
        {
          this.state.showTimer && <Timer /> //se estado timer for true, entao apresente timer  | && informa que se for true aparece
        }
  
        <button onClick={() => this.setState( { showTimer: false})}>    {/*quando clica no botao, altera valor do estado*/}
          Remover Timer
        </button>

      </main>

    )
  }
}

export default Button //exporta componente Button 