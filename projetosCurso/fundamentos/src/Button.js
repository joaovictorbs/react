import React, { Component } from 'react'

class Button extends Component {
  constructor(props) {
      super();

      this.state = {
        name: ''      //estado string vazio
      }
  }


  render() {
    return(
      <main>
        <h1> Estado atual: { this.state.name } </h1>  {/*acessa estado name*/}

      <input 
        value={this.state.name}
        onChange={e => this.setState({ name: e.target.value })} /*dentro do value em target temos a innformacao do input | atualiza estado name*/
      />

      <button onClick={() => console.log('Estado atual: ', this.state.name)}>
        Mostrar Estado
      </button>
      
      </main>
    )
  }
}

export default Button //exporta componente Button 