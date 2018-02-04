/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
import React from 'react';
import {connect} from 'react-redux';
import Paper from 'material-ui/Paper';

class Welcome extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    render() {
        return (
                <div>
                    <h1>Welcome {this.props.state.user ? this.props.state.user.name.first : 'Friend'}</h1>
                </div>
                );
    }
}

const mapStateToProps = (state) => ({
    state: {user: state.userState.user}
});

const mapDispatchToProps = (dispatch) => ({
    dispatch: dispatch
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Welcome);