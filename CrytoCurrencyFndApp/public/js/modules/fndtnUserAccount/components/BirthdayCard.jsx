/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
import React from 'react';

import Card, {CardActions, CardHeader, CardMedia, CardTitle, CardContent} from 'material-ui/Card';
import Collapse from 'material-ui/transitions/Collapse';
import Grid from 'material-ui/Grid';
import Icon from 'material-ui/Icon';
import TextField from 'material-ui/TextField';

import {saveBirthday} from '../actions/moduleActions';

var DateTimeFormat = new Intl.DateTimeFormat('en-US', {day: "numeric", month: "numeric", year: "numeric"});

class BirthdayCard extends React.Component {
    constructor() {
        super();
    }
    
    save(nullValue, birthday){
        this.props.dispatch(saveBirthday(birthday.toISOString()));
    }

    render() {
        return (
            <Card>
                <CardContent>
                    <Grid container>
                        <Grid item xs={1}><Icon>cake</Icon></Grid>
                        <Grid item xs={1}>Birthday</Grid>
                        <Grid item xs={9}>
                            <TextField 
                                id="birthday"
                                onChange={this.save.bind(this)}
                                value={"Crap"}
                            />
                        </Grid>
                        <Grid item xs={1}/>
                    </Grid>
                </CardContent>
            </Card>
        );
    }
}

export default BirthdayCard;