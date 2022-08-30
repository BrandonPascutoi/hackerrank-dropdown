import React from "react";
import InnerDiv from './components/InnerDiv'

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){

    const divStyle = {
    height: '50px',
    width: '300px',
    border: '2px solid cornflowerblue',
    borderRadius: '12px',
    position: 'absolute',
    top: '50px',
    left: '50px',
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'flex-start'
  }

    return (
      <div style={divStyle} className="App">
        <InnerDiv/>
      </div>
    );
  }
}

export default App;