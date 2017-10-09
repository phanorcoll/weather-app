import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Forecast extends Component {
    constructor() {
        super()

        this.state = {
            city: ''
        }

        this.handleChange = this.handleChange.bind(this);
    }


    handleChange(event) {
        var value = event.target.value;

        this.setState(function () {
            return {
                city: value
            }
        });
    }

    render() {
        var match = this.props.match;

        return (
            <div className='content'>
                <div className='title'>
                    search for the weather forecast in your city
                </div>
                <div className='search'>
                    <input type='text' id='city' placeholder='St. George, Utah' onChange={this.handleChange} />

                    <Link className='btn btn--primary btn--inside' to={{ pathname: '/days', search: '?city=' + this.state.city }}>
                        Search forecast
                        </Link>
                </div>
            </div>
        )
    }
}

export default Forecast