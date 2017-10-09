import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getDate } from '../utils/helpers.jsx'
import Day from './Day.jsx';

class Detail extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        let props=this.props.location.state;
        console.log(props)
        return (
            <div className='detail-container'>
                <Day day={props} cStyle='detail' />
                <div className='info'>
                    <ul>
                        <li><span>City</span>{props.city}</li>
                        <li><span>Clouds</span>{props.clouds}</li>
                        <li><span>Humidity</span>{props.humidity}</li>
                        <li><span>Pressure</span>{props.pressure}</li>
                        <li><span>Rain</span>{props.rain}</li>
                        <li>{props.weather[0].description}</li>
                    </ul>
                </div>
            </div>
        )
    }
}


export default Detail