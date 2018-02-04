/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
import React from 'react';
import {connect} from 'react-redux';

import AppBar from 'material-ui/AppBar';
import Button from 'material-ui/Button';
import Chip from 'material-ui/Chip';
import Divider from 'material-ui/Divider';
import Drawer from 'material-ui/Drawer';
import IconButton from 'material-ui/IconButton';
import Icon from 'material-ui/Icon';
import {MenuItem} from 'material-ui/Menu';
import Toolbar from 'material-ui/Toolbar';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import {withStyles} from 'material-ui/styles';

import AppSideNav from './AppSideNav.jsx';

import {openMenuDrawer, closeMenuDrawer} from '../actions/menuActions';

import injectTapEventPlugin from 'react-tap-event-plugin';

const styles = theme => ({
    root: {
        marginTop: theme.spacing.unit*3,
        width:'100%'
    },
    flex: {
        flex:1
    },
    menuButton:{
        marginLeft:-12,
        marginRight:20
    }
});

injectTapEventPlugin();

class AppHeader extends React.Component {
    constructor() {
        super();
    }
    
    openDrawer(event){
        this.props.dispatch(openMenuDrawer());
    }

    closeDrawer(event){
        this.props.dispatch(closeMenuDrawer());
    }
    
    render() {
        return (
            <div className={this.props.classes.root}>
                <AppBar position="fixed">
                    <Toolbar>
                        <IconButton
                            className={this.props.classes.menuButton}
                            onClick={this.openDrawer.bind(this)}
                            color="contrast"
                            arial-label="Menu"
                        >
                            <Icon>menu</Icon>
                        </IconButton>
                        <Typography
                            color="inherit"
                            className={this.props.classes.flex}
                            type="title"
                        >
                            Gass-N-Go
                        </Typography>
                        <Button
                            color="contrast"
                        >Login</Button>
                    </Toolbar>
                </AppBar>
                <Drawer
                    open={this.props.state.drawerOpen}
                    onRequestClose={this.closeDrawer.bind(this)}
                >
                    <AppSideNav/>
                </Drawer>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    state: {
        token: state.authenticationState.token,
        drawerOpen: state.menuState.drawerOpen,
        drawerDocked: state.menuState.drawerDocked
    }
});

const mapDispatchToProps = (dispatch) => ({
    dispatch: dispatch
});

export default withStyles(styles)(connect(
    mapStateToProps,
    mapDispatchToProps
)(AppHeader));