import React from 'react';
import { observer, inject } from 'mobx-react'
import "../../styles/components/main.scss";
import Input from './Input';
import CityRow from './CityRow';
import FiveDays from './FiveDays';
import FavoriteBtn from './FavoriteBtn';


const Main = inject("CityStore", "HeaderStore")(observer(function (props) {

    const colorToggle = () => {
        let light = "light-Mode"
        let dark = "dark-Mode"
        let idMode = props.HeaderStore.colorToggle ? light : dark
        return idMode
    }

    console.log(props.CityStore.city);
    
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
                <div className="fiveDaysBox" id={colorToggle()}>
                    {props.CityStore.city.fiveDays.map(d => <FiveDays day={d} key={d.id} />)}
                </div>
            </div>
        </div>
    );
}))

export default Main;