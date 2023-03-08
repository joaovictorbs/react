import React, { Component } from 'react'

class Button extends Component {
    constructor(props) {
        super()
    }

  render() {
    return(
      <button>{ this.props.label } - { this.props.num }</button> //aplica propriedade label recebida 
    )
  }
}

export default Button //exporta componente Button