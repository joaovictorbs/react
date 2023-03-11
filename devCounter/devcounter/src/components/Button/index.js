import React, {Component} from "react";
import './button.css'


class Button extends Component {

  render() {
    return (
        <button
            onClick={this.props.changeCounter}
            style={{ color: this.props.color ? this.props.color : '#444'}}      //if ternario, se a propriedade color for true, usa o valor dentro dela, caso false, usa #444
        >
            { this.props.label }                    {/* recebe propriedade label */}
        </button>
    );
  }
}

export default Button;
