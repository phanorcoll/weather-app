import React, { Component } from 'react';
import Link from 'react-router-dom';

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
                <div className='title'>
                    search for the weather forecast in your city
                </div>
                <div className='search'>
                    <form onSubmit={this.handleSubmit}>
                        <input type='text' id='city' placeholder='St. George, Utah' onChange={this.handleChange} />
                        <button className='btn btn--primary btn--inside' stype='submit' disabled={!this.state.city}>
                            search forecast
                    </button>
                    </form>
                </div>
            </div>
        )
    }
}

export default Forecast