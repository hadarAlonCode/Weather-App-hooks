import React, { Component } from 'react';
import moment from 'moment'

class FiveDays extends Component {
    render() {

        return (
            <div >
               <div>{moment(this.props.day.day).format('dddd')}</div> 
               <div>{this.props.day.minTemp} C°</div> 
            </div>
        );
    }
}

export default FiveDays;