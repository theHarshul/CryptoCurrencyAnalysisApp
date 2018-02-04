/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
import React from 'react';
import {connect} from 'react-redux';
import {Line, Radar, Scatter} from 'react-chartjs-2';

import {addTicker, getPortfolioData, setPortfolioData} from '../actions/moduleActions';

class CryptoCurrencyChart extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <Scatter
                    data={this.props.state.lineData}
                    options={this.props.state.lineOptions}
                />
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