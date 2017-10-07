import React, { Component } from 'react';
import cloud from '../images/cloud-icon.png';
import PropTypes from 'prop-types';

export class Forecast extends Component {
    constructor() {
        super()

        this.state = {
            city: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleChange(event) {
        var value = event.target.value;

        this.setState(function () {
            return {
                city: value
            }
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log(this.state.city);
    }

    render() {
        return (
            <div className='content'>
                <div className='cloud'>
                    <div className='forecast-title'>forecast for <span>{this.props.city}!</span></div><img src={cloud} />
                </div>
            </div>
        )
    }
}

Forecast.propTypes = {
    city: PropTypes.string.isRequired
}

Forecast.defaultProps = {
    city: 'Merida'
}

export default Forecast