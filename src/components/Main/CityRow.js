import React, { Component } from 'react';
import { observer, inject } from 'mobx-react'
import "../../Style/CityRow.css"



@inject("CityStore")
@observer

class CityRow extends Component {


    iconsFun = () => {
        if(this.props.CityStore.icon <= 9 ){
            return "https://developer.accuweather.com/sites/default/files/0"+this.props.CityStore.icon+"-s.png"
        }else{
            return "https://developer.accuweather.com/sites/default/files/"+this.props.CityStore.icon+"-s.png"
        }
    }
    
    render() {   
        
        return (
            <div className="cityLine">
                <div className="iconPhoto"><img src={this.iconsFun()} /></div>
                <div className="cityNameAndTemp">
                    <div>{this.props.CityStore.city}</div>
                    <div>{this.props.CityStore.currentTemp}C°</div>
                </div>
                <div className="heart"><button>heart Icon</button></div>
                <div className="addToFav"><button>add to favorite</button></div>
            </div>
        );
    }
}

export default CityRow;