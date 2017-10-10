import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getDate, convertTemp } from '../utils/helpers.jsx'
import Day from './Day.jsx';
import { Link } from 'react-router-dom';

class Detail extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        let props = this.props.location.state;
        return (
            <div>
                <div className='detail-container'>
                    <Day day={props} cStyle='detail' />
                    <div className='info'>
                        <ul>
                            <li><span>City</span>{props.city}</li>
                            <li><span>Humidity</span>{(props.humidity)}</li>
                            <li><span>Max temp</span>{convertTemp(props.temp.max)} degrees</li>
                            <li><span>Min temp</span>{convertTemp(props.temp.min)} degrees</li>
                            <li><span>Description</span>{props.weather[0].description}</li>
                        </ul>
                    </div>

                </div>
                <div className='navigation'>
                    <Link to={{ pathname: '/days', search: '?city=' + props.city }}>
                        Back
                    </Link>
                </div>
            </div>
        )
    }
}


export default Detail