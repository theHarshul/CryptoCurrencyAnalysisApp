/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
import React from 'react';

import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import Dialog, {DialogTitle, DialogContent} from 'material-ui/Dialog';
import Grid from 'material-ui/Grid';
import Table, {TableBody, TableHead, TableCell, TableRow} from 'material-ui/Table';

import Style from '../../util/FormStyle';

import {authenticate, cancelLogin} from '../actions/authenticationActions';

class Authentication extends React.Component {
    constructor() {
        super();
    }

    componentWillMount() {
//        verifyAuthenticated(this.props.dispatch, this.props.state);
    }

    login(){
        authenticate(this.props.dispatch,{
            username: this.state.username,
            password: this.state.password
        });
    }
    
    cancel(){
        cancelLogin(this.props.dispatch);
    }
    
    setPassword(event){
        this.setState({password: event.target.value});
    }

    setUsername(event){
        this.setState({username: event.target.value});
    }

    render() {
        const actions = [
        ];
        
        return (
                <div>
                    <Dialog
                        title="Authentication"
                        actions={actions}
                        open={true}
                    >
                        <DialogTitle>User Authentication</DialogTitle>
                        <DialogContent>
                                <Grid container>
                                    <Grid item xs={6}>
                                        <TextField
                                            id="username"
                                            label="Username or E-Mail"
                                            fullWidth
                                            onChange={this.setUsername.bind(this)}
                                        />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <TextField
                                            id="password"
                                            type="password"
                                            label="Password"
                                            fullWidth
                                            onChange={this.setPassword.bind(this)}
                                        />
                                    </Grid>
                                </Grid>
                                <Grid container>
                                    <Grid item xs={6}>
                                        <Button
                                            id="login"
                                            raised
                                            color="primary"
                                            onClick={this.login.bind(this)}
                                        >Login</Button>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Button
                                            id="cancel"
                                            raised
                                            color="primary"
                                            onClick={this.cancel.bind(this)}
                                        >Cancel</Button>
                                    </Grid>
                                </Grid>
                        </DialogContent>
                    </Dialog>
                </div>
        );
    }
}

export default Authentication;