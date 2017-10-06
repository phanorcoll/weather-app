import React, { Component } from 'react';

export class Forecast extends Component {
    render() {
        return (
            <div className='content'>
                <div className='title'>
                    search for the weather forecast in your city
                </div>
                <div className='search'>
                    <input type='text' placeholder='St. George, Utah' />
                    <button className='btn btn--primary btn--inside'>
                        search
                    </button>
                </div>
            </div>
        )
    }
}

export default Forecast