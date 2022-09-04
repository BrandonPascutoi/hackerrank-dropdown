import React from "react";

class CountiesList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counties: [
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
        }
    }

    render() {
        const ulStyle = {
            listStyleType: 'none',
            paddingInlineStart: 0,
            margin: 0,
            width: '100%',
            height: '300px',
            overflowY: 'scroll',
            borderBottomLeftRadius: '12px'
        }
        const liItemContainer = {
            height: '50px',
            paddingLeft: '15px',
            display: 'flex',
            alignItems: 'center',
            background: '#a9c4f5',
        }
        const liStyle = {
            fontWeight: '700'
        }
        let countiesListItems = this.state.counties.map(county => {
            return (
                <div key={county} style={liItemContainer}>
                    <li style={liStyle}>{county}</li>
                </div>
            )
        })
        return (
            <ul style={ulStyle}>
                {countiesListItems}
            </ul>
        )
    }
}

export default CountiesList;