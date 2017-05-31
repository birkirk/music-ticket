import React, { Component } from 'react';
import './styles.css';

class InfoHeader extends Component {
    render() {
        return(
            <div className="InfoHeader">
                <h1>{this.props.name}</h1>
                <div className="InfoHeader-date">
                    <div className="circle InfoHeader-pink-circle">
                        <h2>{this.props.date.day}</h2>
                        <h3>{this.props.date.month}</h3>
                    </div>
                    <div className="circle InfoHeader-purple-circle"></div>
                </div>
            </div>
        )
    }
}

export default InfoHeader;