import React, { Component } from 'react';
import './styles.css';
import AgreeSign from './agree.svg';

class AgreeToTerms extends Component {
    render() {
        return(
            <div className="AgreeToTerms">
                <img src={AgreeSign} alt="Agree"/>
                <p>I agree to the <a href="#" >terms & conditions</a></p>
            </div>
        )
    }
}

export default AgreeToTerms;