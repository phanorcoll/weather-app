import React, { Component } from 'react';
import Forecast from './Forecast.jsx';
import Days from './Days.jsx';
import Detail from './Detail.jsx';

import {
    ReactRouter,
    BrowserRouter as Router,
    Route,
    Switch,
    Nav,
} from 'react-router-dom';

import owl from '../images/weather-owl.png';

class App extends Component {
    render() {
        return (
            <div className='main-wrapper'>
                <div className='main-title'>
                    welcome to the weather owl!
                </div>
                <div className='home-wrapper'>
                    <div className='logo-container'>
                        <img src={owl} alt='weather owl reactjs app' />
                    </div>
                    <div className='content-wrapper'>
                        <Router>
                            <Switch>
                                <Route exact path='/' component={Forecast} />
                                <Route path='/days' component={Days} />
                                <Route path='/details/:city' component={Detail} />
                                <Route render={function () {
                                    return <p>Not Found</p>
                                }} />
                            </Switch>
                        </Router>
                    </div>
                </div>
            </div>
        );
    }
}

export default App