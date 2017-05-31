import React, { Component } from "react";
import "./styles.css";
import Share from '../Share';
import InfoHeader from '../InfoHeader';
import Details from '../Details';
import CountDown from '../CountDown';
import AgreeToTerms from '../AgreeToTerms'

class EventBox extends Component {
  render() {
    return (
        <div className="EventBox">
            <div className="EventBox-image" style={{backgroundImage: `url(${this.props.cover})`}} ></div>
            <div className="EventBox-main">
                <div className="EventBox-main-head">
                    <Share shared={this.props.shared} />
                    <InfoHeader name={this.props.name} date={this.props.date} />
                    <Details location={this.props.location} ticketPrice={this.props.ticketPrice} />
                </div>
                <div className="EventBox-main-foot">
                    <CountDown date={this.props.date} />
                    <button className="purchase-button">Purchase Tickets</button>
                    <AgreeToTerms />
                </div>
            </div>
        </div>
    )
  }
}

export default EventBox;
