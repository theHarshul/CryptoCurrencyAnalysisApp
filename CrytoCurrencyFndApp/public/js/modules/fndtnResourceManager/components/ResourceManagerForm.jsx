/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
import React from 'react';
import {connect} from 'react-redux';

import Grid from 'material-ui/Grid';
import Icon from 'material-ui/Icon';
import IconButton from 'material-ui/IconButton';
import Paper from 'material-ui/Paper';
import {withStyles} from 'material-ui/styles';
import Switch from 'material-ui/Switch';
import Table, {TableBody, TableHead, TableRow, TableCell, TableFooter} from 'material-ui/Table';
import TextField from 'material-ui/TextField';
import Typography from 'material-ui/Typography';

import {loadResources, setFormValue, editResource, saveResource, cancelEdit, deleteResource, clearForm} from '../actions/moduleActions';

const styles = theme => ({root: {}});

class ResourceManagerForm extends React.Component {
    constructor() {
        super();
    }

    setFormValue(event){
        this.props.dispatch(setFormValue(event.currentTarget.id, event.currentTarget.value));
    }
    
    toggleFormValue(event){
        this.props.dispatch(setFormValue(event.currentTarget.id, !this.props.state.form[event.currentTarget.id]));
    }
    
    edit(event){
        var id = parseInt(event.currentTarget.id);
        var resource = Object.assign({}, this.props.state.resources[id]);
        this.props.dispatch(editResource(resource, id));
    }
    
    delete(event){
        var index = event.currentTarget.id;
        deleteResource(this.props.dispatch, this.props.state.resources[index], index);
    }
    
    find(event){
        
        var query={};
        if(this.props.state.form.file !== ''){
            query.file=this.props.state.form.file;
        }
        
        if(this.props.state.form.url !== ''){
            query.url=this.props.state.form.url;
        }
        
        loadResources(this.props.dispatch, query);
    }
    
    add(event){
        this.props.dispatch(clearForm());
        this.props.dispatch(editResource(this.props.state.form, -1));
    }
    
    cancel(event){
        this.props.dispatch(clearForm());
        this.props.dispatch(cancelEdit());
    }
    
    save(){
        saveResource(this.props.dispatch, this.props.state.form, this.props.state.index);
    }
    
    row(resource, index){
        return(
            <TableRow hover key={"row"+resource._id} id={"row"+resource._id} color="accent">
                <TableCell>
                    <IconButton
                        id={index}
                        onClick={this.edit.bind(this)}
                    >
                        <Icon>mode_edit</Icon>
                    </IconButton>
                    <IconButton
                        id={index}
                        onClick={this.delete.bind(this)}
                    >
                        <Icon>delete</Icon>
                    </IconButton>
                </TableCell>
                <TableCell>{resource.name}</TableCell>
                <TableCell>{resource.file}</TableCell>
                <TableCell>{resource.url}</TableCell>
                <TableCell>
                    <Switch 
                        id={index}
                        name="static"
                        checked={resource.static}
                    />
                </TableCell>
                <TableCell>
                    <Switch 
                        id={index}
                        name="public"
                        checked={resource.public}
                    />
                </TableCell>
                <TableCell>
                    <Switch 
                        id={index}
                        name="protected"
                        checked={resource.protected}
                    />
                </TableCell>
            </TableRow>
        );
    }
    
    render() {
        return (
            <Grid container>
                <Grid item xs={1}/>
                <Grid item xs={10}>
                    <Paper>
                        <Grid container justify="center">
                            <Grid item xl={12}>
                                <Typography type="display2">Resource Manager</Typography>
                            </Grid>
                        </Grid>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Action</TableCell>
                                    <TableCell>Name</TableCell>
                                    <TableCell>File/Directory</TableCell>
                                    <TableCell>URL</TableCell>
                                    <TableCell>Static</TableCell>
                                    <TableCell>Public</TableCell>
                                    <TableCell>Protected</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>
                                        <IconButton
                                            id={"search"}
                                            onClick={this.props.state.edit? this.save.bind(this) : this.find.bind(this)}
                                        >
                                            <Icon>{this.props.state.edit ? "done" : "search"}</Icon>
                                        </IconButton>
                                        <IconButton
                                            id={"cancel"}
                                            onClick={this.props.state.edit ? this.cancel.bind(this) : this.add.bind(this)}
                                        >
                                           <Icon>{this.props.state.edit ? "close" : "add"}</Icon>
                                        </IconButton>
                                    </TableCell>
                                    <TableCell>
                                        <TextField 
                                            id="name"
                                            name="name"
                                            value={this.props.state.form.name}
                                            onChange={this.setFormValue.bind(this)}
                                            label="Name"
                                            fullWidth
                                        />
                                    </TableCell>
                                    <TableCell>
                                        <TextField 
                                            id="file"
                                            name="file"
                                            value={this.props.state.form.file}
                                            onChange={this.setFormValue.bind(this)}
                                            label="Relative File"
                                            fullWidth
                                        />
                                    </TableCell>
                                    <TableCell>
                                        <TextField 
                                            id="url"
                                            name="url"
                                            value={this.props.state.form.url}
                                            onChange={this.setFormValue.bind(this)}
                                            label="Relative URL"
                                            fullWidth
                                        />
                                    </TableCell>
                                    <TableCell>
                                        <Switch 
                                            id="static"
                                            name="static"
                                            checked={this.props.state.form.static}
                                            onClick={this.toggleFormValue.bind(this)}
                                        />
                                    </TableCell>
                                    <TableCell>
                                        <Switch 
                                            id="public"
                                            name="public"
                                            checked={this.props.state.form.public}
                                            onClick={this.toggleFormValue.bind(this)}
                                        />
                                    </TableCell>
                                    <TableCell>
                                        <Switch 
                                            id="protected"
                                            name="protected"
                                            checked={this.props.state.form.protected}
                                            onClick={this.toggleFormValue.bind(this)}
                                        />
                                    </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {this.props.state.resources.map((resource, index) => this.row(resource, index))}
                            </TableBody>
                        </Table>
                    </Paper>
                </Grid>
                <Grid item xs={1}/>
            </Grid>
        );
    }
    componentDidMount() {
        loadResources(this.props.dispatch, {});
    }
}

const mapStateToProps = (state) => ({
    state: state.moduleState
});

const mapDispatchToProps = (dispatch) => ({
    dispatch: dispatch
});

export default withStyles(styles)(connect(
    mapStateToProps,
    mapDispatchToProps
)(ResourceManagerForm));