import React, { Component } from 'react';
import { observer, inject } from 'mobx-react'
import "../../styles/components/main.scss";

import Input from './Input';
import CityRow from './CityRow';
import FiveDays from './FiveDays';
import FavoriteBtn from './FavoriteBtn';

@inject("CityStore")
@observer



class Main extends Component {
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
                    <div>
                        {this.props.CityStore.city.fiveDays.map(d => <FiveDays day={d} key={d.id} />)}
                    </div>
                </div>


                {/* <div>{this.props.CityStore.city}</div>
                <div>{this.props.CityStore.cityKey}</div>
                <div>{this.props.CityStore.weatherText}</div>
                <div>{this.props.CityStore.currentTemp}</div>
                <div>{this.props.CityStore.unit}</div> */}

            </div>
        );
    }
}

export default Main;