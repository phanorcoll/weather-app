import React, { Component } from 'react';
import cloud from '../images/icons/cloudy.svg';
import PropTypes from 'prop-types';
import { getDate } from '../utils/helpers.jsx'

class Day extends Component {
    constructor(props) {
        super(props)

    }
    render() {
        let date = getDate(this.props.day.dt);
        return (
            <div onClick={this.props.onClick} className={this.props.cStyle}>
                <img src={cloud} alt="weather owl" />
                <div>
                    {date}
                </div>
            </div>
        )
    }
}

Day.propTypes = {
    day: PropTypes.object.isRequired
}

Day.defaultProps = {
    cStyle: 'data'
}

export default Day