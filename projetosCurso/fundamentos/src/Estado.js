import { useState } from 'react'                //permite criacao de estado no componente de funcoes

function Estado() {
    const [name, setName] = useState('João');   //useState retorna um array, primeiro indice e o valor atual, e o segundo a funcao   | podemos passar desde strings ate objetos no useState
    const [age, setAge] = useState(20);     

    return(
        <div>
            <h1>Estado atual: { name } | { age }</h1>

            <button onClick={() => setName('Roberto')}>Mudar Nome</button>      {/*altera valor do estado*/}
        </div>
    );
}

export default Estado;