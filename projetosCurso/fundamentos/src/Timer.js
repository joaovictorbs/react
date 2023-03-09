import React, { Component } from 'react'

class Timer extends Component {
    constructor(props) {
        super();

        this.state = {      //cria estado timer vazio
            timer: '01'
        }
    }

    //MOMENTO DE MONTAGEM
    componentDidMount() {       //executa antes de componente ser chamado
        setInterval(() => {     //funcao de intervalo de tempo
            this.setState({ timer: new Date().toLocaleTimeString() })       //atualiza estado com hora atual do computador                          
        }, 1000);               //executa código depois de 1 segundo
    }

    //MOMENTO DE ATUALIZACAO
    componentDidUpdate() {      //cada vez que o componente for renderizado novamente, executa funcao | atualizar um estado é ser renderizado
        console.log('Componente atualizou')
    }

    //MOMENTO DE DESMONTAGEM
    componentWillUnmount() {    //cada vez que o componente deixa de aparecer na minha tela, ele e desmontado
        console.log('Componente desmontado')
    }

    render() {
        return(
            <main>
                <h1>Hora: { this.state.timer } </h1>
            </main>
        )
    }
}

export default Timer 