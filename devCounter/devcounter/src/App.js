import React, {Component} from "react";
import Header from './components/Header';
import Footer from './components/Footer';
import Button from './components/Button'; //ja entende que esta importando o index.js
import './styles.css';

class App extends Component {

  constructor(props){
    super()

    this.state = {
      counter: 0
    }

    this.handleAdd = this.handleAdd.bind(this)
    this.handleSubtract = this.handleSubtract.bind(this)
    this.handleReset = this.handleReset.bind(this)
  }

  handleAdd() {
    this.setState(state => ({       //se depende do valor atual do estado, assim que deve ser feito
      counter: state.counter + 1
    })) 
  }

  handleSubtract() {
    this.setState(state => ({
      counter: state.counter - 1
    })) 
  }

  handleReset() {
    this.setState(state => ({
      counter: 0
    }))   
  }


  render() {
    return (
      <div className="container"> {/*div principal*/}
        <Header />                        {/*componente Header*/}

        <main>
          <div className="display">
            <span>{ this.state.counter }</span>
          </div>

          <div className="buttons-container">
            <Button label="-1" changeCounter={ this.handleSubtract } color="red"/>
            <Button label="Zerar" changeCounter={ this.handleReset }/>
            <Button label="+1" changeCounter={ this.handleAdd } color="green"/>
          </div>
        </main>

        <Footer />                        {/*componente Footer*/}
      </div>
    );
  }
}

export default App;
