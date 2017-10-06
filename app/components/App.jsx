import React, { Component } from 'react';
import Forecast from './Forecast.jsx';

import owl from '../images/weather-owl.png';

class App extends Component {
    render() {
        return (
            <div className='main-wrapper'>
                <div className='main-title'>
                    welcome to the weather owl!
                </div>
                <div className='home-wrapper'>
                    <div className='logo-container'>
                        <img src={owl} alt='weather owl reactjs app' />
                    </div>
                    <div className='content-wrapper'>
                        <Forecast />
                    </div>
                </div>
            </div>
        );
    }
}

export default App