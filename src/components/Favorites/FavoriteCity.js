import React, { Component } from 'react';

class FavoriteCity extends Component {
    render() {
        return (
            <div>
              {this.props.city.name}  
            </div>
        );
    }
}

export default FavoriteCity;