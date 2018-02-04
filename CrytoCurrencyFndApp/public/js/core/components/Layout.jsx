/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
import React from 'react';
import {Router, Link, Route, Switch} from 'react-router-dom';
import {connect} from 'react-redux';

import Grid from 'material-ui/Grid';
import {withStyles} from 'material-ui/styles';
import Paper from 'material-ui/Paper';

const styles = theme => ({
    root: {
      flexGrow: 1,
      marginTop: 30
    },
    layoutPaper:{
        marginTop: '70px'
    }
});
import AppHeader from './AppHeader.jsx';
import AppBody from './AppBody.jsx';
import AppFooter from './AppFooter.jsx';

import {login, logout} from '../actions/authenticationActions';

class Layout extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <Router history={this.props.state.history}>
                <div className={this.props.classes.root}>
                    <AppHeader/>
                    <Paper elevation={5} className={this.props.classes.layoutPaper}>
                        <AppBody dispatch={this.props.dispatch}/>
                        <AppFooter/>
                    </Paper>
                </div>
            </Router>
       );
    }
}

const mapStateToProps = (state) => ({
    state: {history: state.navigationState.history}
});

const mapDispatchToProps = (dispatch) => ({
    dispatch: dispatch
});

export default withStyles(styles)(connect(
    mapStateToProps,
    mapDispatchToProps
)(Layout));