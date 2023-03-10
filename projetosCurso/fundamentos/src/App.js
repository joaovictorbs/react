import React, { Component } from 'react'

const styles = {        //cria objeto com valores CSS
  container: {
    backgroundColor: '#333',
    padding: '20px'
  },
  title: {
    fontSize: '60px',
    fontFamily: 'sans-serif',
    color: '#fff'
  }
}

class App extends Component { 
  constructor(props) {
    super()
  }

  render() {                  
    return(     
      <div style={styles.container}>  {/*aplica na div os estilos do container*/}
        <h1>Olá Mundo!</h1>
        <h1 style={styles.title}>Olá Mundo!</h1>
        <h3 style={{ backgroundColor: '#f33', color: '#fff', fontSize: '40px' }}>Olá Mundo!</h3>    {/*aplicando css direto no elemento*/} {/*em css inline, precisa ser camelCase */}
  
      </div>
    )
  }
}

export default App