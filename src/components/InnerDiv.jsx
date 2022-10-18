import React from "react";

const innerDivStyle = {
    height: '50px',
    width: '90%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
}

const h1Style = {
    listStyleType: 'none',
    paddingInlineStart: 0,
    fontSize: '20px',
    WebkitTouchCallout: 'none',
    WebkitUserSelect: 'none',
    khtmlUserSelect: 'none',
    MozUserSelect: 'none',
    msUserSelect: 'none',
    UserSelect: 'none'
}
        
const svgStyle = {
    height: '30px'
}

class InnerDiv extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            h1: 'Select A Location'
        }
    }
    render(){
        return (
            <div style={innerDivStyle} className="InnerDiv">
                <h1 className="location" style={h1Style}>{this.state.h1}</h1>
                <svg style={svgStyle} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 122.88 122.88"><title>round-line-bottom-arrow</title><path d="M122.85,61.45h0A61.39,61.39,0,0,0,61.45,0V0h0V0A61.38,61.38,0,0,0,0,61.43H0v0H0a61.35,61.35,0,0,0,61.4,61.38v0h0v0a61.34,61.34,0,0,0,61.38-61.4ZM61.44,91,33.92,60.47H51.5V39.2H71.38V60.47H89L61.44,91Zm48.28-29.54h0a48.36,48.36,0,0,1-48.27,48.29v0h0v0A48.35,48.35,0,0,1,13.14,61.47h0v0h0A48.27,48.27,0,0,1,61.41,13.14v0h0v0a48.3,48.3,0,0,1,48.27,48.3Z"/></svg>
            </div>
        )
    }
}

export default InnerDiv;