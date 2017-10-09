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
        return (
            <div className='detail-container'>
                <Day day={props} cStyle='detail' />
                <div className='info'>
                    <ul>
                        <li><a href='#'>City</a>{props.city}</li>
                        <li><a href='#'>Humidity</a>{props.humidity}</li>
                        <li><a href='#'>Max temp</a>{props.temp.max}</li>
                        <li><a href='#'>Min temp</a>{props.temp.min}</li>
                        <li><a href='#'>Description</a>{props.weather[0].description}</li>
                    </ul>
                </div>
            </div>
        )
    }
}


export default Detail