import React, { Component } from 'react';
import "../../Style/Input.css"


class Input extends Component {
    render() {
        return (
            <div className="mainInput">
                <input className="input" placeholder="Search Weather..."></input>                
                <button>Search!</button>

            </div>
        );
    }
}

export default Input;