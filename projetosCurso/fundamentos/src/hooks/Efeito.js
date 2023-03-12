import { useEffect, useState } from 'react' //useEffect trabalha com os ciclos de vida do componente

export function Efeito() {
    
    const [count, setCount] = useState(0);
    const [name, setName] = useState('');

    useEffect(() => {                       //executa com cada renderização no componente
        console.log('Foi executado');

        return () => {                      //executa quando componente é desmontado ou sofre atualização, faz limpeza da ultima execução do useEffect
            console.log('Desmontado');
        }
    }, [name])                              //array de dependecias do useEffect | array vazio so executa uma vez quando o componente e montado  | podemos observar elementos para reexecutar
    
    return(
        <>
            <h1>{ count }</h1>
            <button onClick={() => setCount(state => state + 1)}>Aumentar</button>  {/* pega setCount, o valor do estado e adiciona + 1 */} {/* a cada click o useEffect e executado */}
            <input value={ name } onChange={e => setName(e.target.value)} />  {/* pega valor do momento */}
        </>
    )
}