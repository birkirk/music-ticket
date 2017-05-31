import React, { Component } from 'react';
import './styles.css';

const countDownTime = {
    days: 17, // TODO use props
    hours: 23, // TODO use props
    mins: 46, // TODO use props
}

class CountDown extends Component {
    render() {
        const { date } = this.props;
        return(
            <div className="CountDown">
                <p><span>{countDownTime.days}</span>days</p>
                <p><span>{countDownTime.hours}</span>hours</p>
                <p><span>{countDownTime.mins}</span>mins</p>
            </div>
        )
    }
}

export default CountDown;