import React, { Component } from 'react';
import cloud from '../images/cloud-icon.png';
import PropTypes from 'prop-types';
import queryString from 'query-string';
import Loading from './Loading.jsx';
import { getCurrentWeather, getForecast } from '../utils/api.jsx';
import Day from './Day.jsx';

class Forecast extends Component {
    constructor(props) {
        super(props)

        this.state = {
            forecastData: [],
            loading: true
        }

        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        var cityName = queryString.parse(this.props.location.search);
        this.city = queryString.parse(this.props.location.search).city;

        this.setState(function () {
            return {
                loading: true
            }
        })

        getForecast(cityName.city).then((res) => {
            this.setState(function () {
                return {
                    loading: false,
                    forecastData: res,
                }
            })
        });
    }


    handleClick(city) {
        city.city = this.city;
        this.props.history.push({
          pathname: '/details/' + this.city,
          state: city,
        })
    }

    render() {
        return (
            <div className='content'>
                {this.state.loading ? <Loading /> : <div>
                    <div className='cloud'>
                        <div className='forecast-title'>forecast for <span>{this.state.forecastData.city.name}, {this.state.forecastData.city.country}!</span></div><img src={cloud} />
                    </div>
                    <div className='day-container'>
                        {this.state.forecastData.list.map(function (listItem) {
                            return <Day onClick={this.handleClick.bind(this, listItem)} key={listItem.dt} day={listItem} />
                        }, this)}
                    </div>
                </div>}
            </div>
        )
    }
}

export default Forecast