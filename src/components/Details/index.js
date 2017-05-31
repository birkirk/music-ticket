import React, { Component } from 'react';
import './styles.css';
import DollarSign from './dol.svg';
import LocationIcon from './loc.svg';

class Details extends Component {
    render() {
        const { ticketPrice } = this.props;
        return(
            <div className="Details">
                <div className="Details-location Details-block">
                    <img src={LocationIcon} alt="location"/>
                    <p className="Details-block-head">{this.props.location.building}</p>
                    <p className="Details-block-main">{this.props.location.country}</p>
                </div>
                <div className="Details-price Details-block">
                    <img src={DollarSign} alt=""/>
                    <p className="Details-block-head">Ticket Price</p>
                    <p className="Details-block-main">${ticketPrice.amount.toFixed(2)} {ticketPrice.currency}</p>
                </div>
            </div>
        )
    }
}

export default Details;