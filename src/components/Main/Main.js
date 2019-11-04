import React, { Component } from 'react';
import { observer, inject } from 'mobx-react'
import "../../styles/components/main.scss";
import Input from './Input';
import CityRow from './CityRow';
import FiveDays from './FiveDays';
import FavoriteBtn from './FavoriteBtn';

@inject("CityStore", "HeaderStore")
@observer

class Main extends Component {

    colorToggle = () => {
        
        let light =  "light-Mode" 
        let dark = "dark-Mode"

        let idMode = this.props.HeaderStore.colorToggle ? light : dark

        return idMode
        
    }


    render() {
        return (
            <div>
                <div className="search_fav">
                    <Input />
                    <FavoriteBtn />
                </div>

                <div className="weatherBox">
                    <div>
                        <CityRow />
                    </div>
                    <div className="fiveDaysBox" id={this.colorToggle()}>
                        {this.props.CityStore.city.fiveDays.map(d => <FiveDays day={d} key={d.id} />)}
                    </div>
                </div>


            </div>
        );
    }
}

export default Main;