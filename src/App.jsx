import React from "react";
import InnerDiv from './components/InnerDiv'

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {menuIsOpen: false}

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick = async () => {
    await this.setState(state => ({
      menuIsOpen: !state.menuIsOpen
    }));
    console.log(this.state.menuIsOpen)
  }

  render(){

    const divStyle = {
    width: '300px',
    border: '2px solid cornflowerblue',
    borderRadius: '12px',
    position: 'absolute',
    top: '50px',
    left: '50px',
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'flex-start',
    transition: 'all 1s linear'
  }

    return (
      <div onClick={this.handleClick} style={divStyle} className="App">
        <InnerDiv/>
      </div>
    );
  }
}

export default App;