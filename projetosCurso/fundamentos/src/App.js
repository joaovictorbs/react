//Componente de Funcao
 function App() {
   return (
     <div>
       Hello World: Function <br/><br/>
       <Button title="Entrar" numero={10}/>
     </div>
   );
 }

//function Button(props) {                  //com componentes de funcao definimos as props aqui ao inves de montar um construtor igual na classe
//function Button({ title, numero }) {      //podemos omitir a nomenclatura props. e apenas passar a propriedade
const Button = ({ title, numero }) => {        //podemos criar componentes como se fossem constantes, basta adicionar o const e a => (arrowFunction)
  return (
    <button>{ title } - { numero }</button>
  )
}


//Componente de Classe
/*
import React, { Component } from "react";

class App extends Component {
  render() {
    return (
      <div>
        Hello World: Class
      </div>
    )
  }
}
*/

export default App;