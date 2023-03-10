import React, { Component } from 'react'
import './styles.css'

class App extends Component { 
  constructor(props) {
    super()
  }

  render() {                  
    return(     
      <div className='container'>  {/*usamos className ao inves de class pois class ja e uma palavra reservada do JS */}
        <h1>Olá Mundo!</h1>
      </div>
    )
  }
}

export default App