/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
import React from 'react';
import {Router, Route, Switch} from 'react-router-dom';
import {connect} from 'react-redux';

import AuthenticationComponent from './Authentication.jsx';
import WelcomePage from './Welcome.jsx';

class AppBody extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
                <Switch>
                    <Route exact path="/" render={() => (<WelcomePage/>)}/>
                    <Route path="/authenticate" render={() => (<AuthenticationComponent dispatch={this.props.dispatch}/>)}/>
                </Switch>
                );
    }
}

export default AppBody;