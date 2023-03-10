import React, { Component } from 'react'

const names = ['Luis', 'Natalia', 'João', 'Maria', 'Camila', 'Felipe']  //lista

/*
const names = [   //array de objetos
  {
    name: 'Luis',
    age: 19,
  },
  {
    name: 'Natalia',
    age: 27,
  },
  {
    name: 'Lucas',
    age: 22,
  }  
] */ //lista

class App extends Component { 
  constructor(props) {
    super()
  }

  render() {                  
    return(     
      <ul>                         {/*lista html*/}
      {
        names.map((name, index) => (  //para cada indice retorna elemento
          <li key={index}>{ name }</li>  //para cada nome cria um li  | o key ajuda o react a saber como o elemento esta, se foi removido, adiconado, etc

        ))   
      }     
      </ul>
    )
  }
}

export default App