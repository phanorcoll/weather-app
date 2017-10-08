import React, { Component } from 'react';
import cloud from '../images/cloud-icon.png';
import PropTypes from 'prop-types';
import queryString from 'query-string';
import Loading from './Loading.jsx';

export class Forecast extends Component {
    constructor() {
        super()

        this.state = {
            city: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount(){
        var cityName = queryString.parse(this.props.location.search);

        this.setState(function () {
            return {
                city: cityName.city
            }
        });
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
                    <div className='forecast-title'>forecast for <span>{this.state.city}!</span></div><img src={cloud} />
                </div>
                <Loading />
            </div>
        )
    }
}

export default Forecast