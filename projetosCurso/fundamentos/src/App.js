import React, { Component } from 'react'
import Button from './Button' //importa arquivo Button

class App extends Component { 
  render() {                  
    return(     
      <>     
        <Button label="Entrar"/><br />
        <Button label="Sair" num={10}/><br />
        <Button label="Logar"/><br />

      </>
    )
  }
}

export default App