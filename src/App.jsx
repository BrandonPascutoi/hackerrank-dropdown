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
    let count = 0;
    let countiesContainer = document.querySelector('.countiesContainer')
    let menuOptions = document.querySelectorAll('.liItemContainer');
    let h1 = document.querySelector('.location');
    window.addEventListener('keyup', e => {
      e.preventDefault();
      e.stopImmediatePropagation();
      if (e.key === 'Enter') {
        if (this.state.menuIsOpen === false) {
          count = 0;
          menuOptions[0].style.backgroundColor = 'cornflowerblue'
          this.setState(() => ({
            menuIsOpen: true,
            height: '350px'
          }));
        } else if (this.state.menuIsOpen === true) {
          h1.innerHTML = menuOptions[count].innerHTML;
          menuOptions[count].style.backgroundColor = '#a9c4f5'
          this.setState(() => ({
            menuIsOpen: false,
            height: '50px'
          }));
        }
      } else if (e.key === 'Escape') {
        this.setState(() => ({
          menuIsOpen: false,
          height: '50px'
        }));
        menuOptions[count].style.backgroundColor = '#a9c4f5';
        h1.innerHTML = 'Select A Location'
      } else if (e.key === 'Down' || e.key === 'ArrowDown') {
        if (this.state.menuIsOpen === true) {
          count++;
          if (count > 31) {
            count = 0;
            menuOptions[31].style.backgroundColor = '#a9c4f5';
            countiesContainer.scrollTo(0, 0)
          } else {
            menuOptions[count - 1].style.backgroundColor = '#a9c4f5';
          }
          if (count > 2 && count < 29) {
            countiesContainer.scrollBy(0, 50)
          }
          console.log(count)
          menuOptions[count].style.backgroundColor = 'cornflowerblue';
        }
      } else if (e.key === 'Up' || e.key === 'ArrowUp') {
        if (this.state.menuIsOpen === true) {
          count--;
          if (count < 0) {
            count = 31;
            menuOptions[0].style.backgroundColor = '#a9c4f5';
            countiesContainer.scrollTo(0, countiesContainer.scrollHeight)
          } else {
            menuOptions[count + 1].style.backgroundColor = '#a9c4f5';
          }
          if (count < 28 && count > 2) {
            countiesContainer.scrollBy(0, -50)
          }
          console.log(count)
          menuOptions[count].style.backgroundColor = 'cornflowerblue';
        }
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