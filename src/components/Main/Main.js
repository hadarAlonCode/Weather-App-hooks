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

    colorToggle=()=>{
        if(this.props.HeaderStore.colorToggle){
            return "light-Mode"
        }else{
            return "dark-Mode"
        }
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