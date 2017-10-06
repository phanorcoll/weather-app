import React, { Component } from 'react';
import cloud from '../images/cloud-icon.png';

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
                    <div className='forecast-title'>forecast for <span>New york, New York!</span></div><img src={cloud} />
                </div>
            </div>
        )
    }
}

export default Forecast