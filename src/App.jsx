import React from "react";
import InnerDiv from './components/InnerDiv';
import CountiesList from "./components/countiesList";

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

  componentDidMount() {
    window.addEventListener('keydown', e => {
      if (e.key === 'Enter') {
        this.setState(() => ({
          menuIsOpen: true,
          height: '350px'
        }))
      } else if (e.key === 'Escape') {
        this.setState(() => ({
          menuIsOpen: false,
          height: '50px'
        }))
      }
    });
  }

  render() {
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
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'center',
      transition: 'all 0.1s linear',
      overflow: 'hidden'
    }

    return (
      <div onClick={this.handleClick} style={divStyle} className="App">
        <InnerDiv/>
        <CountiesList/>
      </div>
    );
  }
}

export default App;