import React from "react";
import InnerDiv from './components/InnerDiv'



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuIsOpen: false,
      height: '50px'
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick = () => {
    if (this.state.menuIsOpen == false) {
        this.setState(state => ({
        menuIsOpen: !state.menuIsOpen,
        height: '350px'
      }))
    } else {
      this.setState(state => ({
        menuIsOpen: !state.menuIsOpen,
        height: '50px'
      }))
    }
  }
  render(){
    const divStyle = {
      height: this.state.height,
      width: '300px',
      border: '2px solid cornflowerblue',
      borderRadius: '12px',
      position: 'absolute',
      top: '50px',
      left: '50px',
      cursor: 'pointer',
      display: 'flex',
      justifyContent: 'flex-start',
      transition: 'all 0.1s linear'
    }
    return (
      <div onClick={this.handleClick} style={divStyle} className="App">
        <InnerDiv/>
      </div>
    );
  }
}

export default App;