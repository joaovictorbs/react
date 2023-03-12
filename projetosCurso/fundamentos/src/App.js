// import Estado from "./Estado";
import { useState } from 'react';
import { Efeito } from './hooks/Efeito'

 function App() {
  const [show, setShow] = useState(true)

   return (
     <>
     {
      show && <Efeito />    // so mostra componente em tela se show for verdadeiro
     }

     <button onClick={() => setShow(false)}>Desmontar componente</button>
    </>
   );
 }

export default App;