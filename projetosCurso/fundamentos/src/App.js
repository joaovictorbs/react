import React, { Component } from 'react'

// const names = ['Luis', 'Natalia', 'João', 'Maria', 'Camila', 'Felipe']  //lista

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
]  //lista

class App extends Component { 
  constructor(props) {
    super()
  }

  render() {                  
    return(     
      <ul>
      {
        names.map((person, index) => (  
          <li key={index}>
            <span>Nome: { person.name }</span>, <span> Idade: { person.age }</span>
          </li>
        ))   
      }     
      </ul>
    )
  }
}

export default App