/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
import React from 'react';
import {connect} from 'react-redux';
import {Line, Radar, Scatter} from 'react-chartjs-2';

import Icon from 'material-ui/Icon';
import IconButton from 'material-ui/IconButton';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import Switch from 'material-ui/Switch';

import {addTicker, getPortfolioData, setPortfolioData, setFormValue} from '../actions/moduleActions';

class CryptoCurrencyChart extends React.Component {
    constructor() {
        super();
    }

    setFormValue(event){
        this.props.dispatch(setFormValue(event.currentTarget.id, event.currentTarget.value));
    }
    
    toggleFormValue(event){
        this.props.dispatch(setFormValue(event.currentTarget.id, !this.props.state.form[event.currentTarget.id]));
    }
    
    add(event){
        this.props.dispatch(clearForm());
        this.props.dispatch(addTicker(this.props.state.form.ticker));
    }
    
    render() {
        return (
            <div>
                <Grid container>
                    <Grid item xs={3}>
                        <TextField 
                            id="ticker"
                            name="ticker"
                            value={this.props.state.form.name}
                            onChange={this.setFormValue.bind(this)}
                            label="Ticker"
                            fullWidth
                        />
                        <IconButton
                            id="add"
                            onClick={this.add.bind(this)}
                        >
                           <Icon>add</Icon>
                        </IconButton>
                    </Grid>                    
                    <Grid item xs={3}>
                        <TextField 
                            id="funds"
                            name="funds"
                            value={this.props.state.form.name}
                            onChange={this.setFormValue.bind(this)}
                            label="Funds"
                            fullWidth
                        />
                    </Grid>                    
                    <Grid item xs={3}>
                        <Switch 
                            id="withFees"
                            name="withFees"
                            checked={this.props.state.form.withFees}
                            onClick={this.toggleFormValue.bind(this)}
                        />
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item xs={5}>
                        <Scatter
                            data={this.props.state.lineData}
                        />
                    </Grid>
                    <Grid item xs={2}/>
                    <Grid item xs={5}>
                        <Radar
                            data={this.props.state.radarData}
                        />
                    </Grid>
                </Grid>
            </div>
        );
    }

    componentDidMount() {
        getPortfolioData(this.props.dispatch, 10000, false, ['fund1', 'fund2']);
    }
}

const mapStateToProps = (state) => ({
    state: state.moduleState
});

const mapDispatchToProps = (dispatch) => ({
    dispatch: dispatch
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CryptoCurrencyChart);