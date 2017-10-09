import React, { Component } from 'react';
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
                <img className='imgsize' src={require('../images/icons/'+this.props.day.weather[0].icon+'.svg')} alt="weather owl" />
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
    cStyle: 'data grow'
}

export default Day