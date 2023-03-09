import React, { Component } from 'react'

class Button extends Component {
  constructor(props) {
      super();

      this.state = {
        signed: false
      }

      this.toggleState = this.toggleState.bind(this)  //this é quem chama | .bind força método a lembrar quem o chamou
  }

  toggleState() {   
    this.setState({ signed: !this.state.signed })   //se for verdadeiro retorna falso e vice-versa
  }

  render() {
    return(
      <>
        {     //RENDERIZACAO CONDICIONAL
          this.state.signed ? (  //se for verdadeiro retorna button e h1
            <>                        { /*colocamos o react fragments porque nao pode retornar dois elementos*/}
              <button onClick={ this.toggleState }>Sair</button>
              <h1>Logado</h1>
            </>
          ) : (
            <>
              <button onClick={ this.toggleState }>Entrar</button>
              <h1>Deslogado</h1>
            </>
          ) 
        }
      </>
    )
  }
}

export default Button //exporta componente Button 