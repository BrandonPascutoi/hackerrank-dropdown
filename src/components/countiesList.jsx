import React, { useRef } from "react";

const CountiesList = () => {
    const counties = [
        'Antrim',
        'Armagh',
        'Carlow',
        'Cavan',
        'Clare',
        'Cork',
        'Derry',
        'Donegal',
        'Down',
        'Dublin',
        'Fermanagh',
        'Galway',
        'Kerry',
        'Kildare',
        'Kilkenny',
        'Laois',
        'Leitrim',
        'Limerick',
        'Longford',
        'Louth',
        'Mayo',
        'Meath',
        'Monaghan',
        'Offaly',
        'Roscommon',
        'Sligo',
        'Tipperary',
        'Tyrone',
        'Waterford',
        'Westmeath',
        'Wexford',
        'Wicklow'
    ]

    const liItemContainerRef = useRef(null)
    const liItem = useRef(null);
    
    const onHover = (element) => {
        element.style.backgroundColor = 'cornflowerblue'
    }

    const onHoverExit = (element) => {
        element.style.backgroundColor = '#a9c4f5'
    }

    const onClickChangeH1 = (element) => {
        let h1 = document.querySelector('.location');
        const liItem = document.querySelector('.liItem');
        h1.innerHTML = element;
    }
        
    const ulStyle = {
        listStyleType: 'none',
        paddingInlineStart: 0,
        margin: 0,
        width: '100%',
        height: '300px',
        overflowY: 'scroll'
    }
        
    const liItemContainer = {
        height: '50px',
        paddingLeft: '15px',
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#a9c4f5'
    }
        
    const liStyle = {
        fontWeight: '700'
    }
        
    let countiesListItems = counties.map(county => {
        return (
            <div ref={liItemContainerRef} key={county} style={liItemContainer} onMouseOver={(e) => onHover(e.target)} onMouseLeave={(e) => onHoverExit(e.target)} onClick={(e) => onClickChangeH1(county)}>
                <li className="liItem" ref={liItem} style={liStyle}>{county}</li>
            </div>
        )
    })
        
    return (
        <ul style={ulStyle}>
            {countiesListItems}
        </ul>
    )
}

export default CountiesList;