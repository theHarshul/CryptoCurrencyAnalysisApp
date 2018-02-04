/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
import React from 'react';

import Grid from 'material-ui/Grid';
import IconButton from 'material-ui/IconButton';
import Icon from 'material-ui/Icon';
import List, {
  ListItem,
  ListItemAvatar,
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText,
} from 'material-ui/List';
import Switch from 'material-ui/Switch';
import Typography from 'material-ui/Typography';
import TextField from 'material-ui/TextField';

import Table, {TableBody, TableHead, TableRow, TableCell, TableFooter} from 'material-ui/Table';

import { withStyles } from 'material-ui/styles';
import {loadAvailableResources, toggleResourceRight, updateRoleResource, addRoleResource, deleteRoleResource} from '../actions/moduleActions.js';

const styles = theme => ({
    root:{
        width: '100%',
        backgroundColor: theme.palette.background.paper,
        position: 'relative',
        overflow: 'auto',
        maxHeight: 750
    }
});

class AccessControlManagerResources extends React.Component {
    constructor() {
        super();
    }
    
    filterResourceList(event){
        var query = {};
        if(event.currentTarget.value){
            query.name = event.currentTarget.value;
        }
        loadAvailableResources(this.props.dispatch, query);
    }
    
    toggleRoleResourceRight(event){
        var token = event.currentTarget.id.split(":");
        updateRoleResource(this.props.dispatch, token[0], this.props.roleResources[token[1]]);
    }
    
    addResource(event){
        addRoleResource(this.props.dispatch, this.props.selectedRole, this.props.availableResources[event.currentTarget.id]);
    }
    
    deleteResource(event){
        deleteRoleResource(this.props.dispatch, event.currentTarget.id, this.props.selectedRole);
    }
    
    resourceListItem(resource, index){
        return(
                <ListItem onClick={this.selectedResource.bind(this)} key={resource._id}>
                    <listItemText primary={resource.name}/>
                </ListItem>
        );
    }

    roleResourceRow(roleResource, index){
        return(
            <ListItem button key={roleResource._id}>
              <ListItemText
                primary={roleResource.resource.name}
              />
              <ListItemSecondaryAction>
                Get<Switch id={'get:'+index} checked={roleResource.get} onClick={this.toggleRoleResourceRight.bind(this)}/>
                Put<Switch id={'put:'+index} checked={roleResource.put} onClick={this.toggleRoleResourceRight.bind(this)}/>
                Post<Switch id={'post:'+index} checked={roleResource.post} onClick={this.toggleRoleResourceRight.bind(this)}/>
                Delete<Switch id={'delete:'+index} checked={roleResource.delete} onClick={this.toggleRoleResourceRight.bind(this)}/>
                <IconButton aria-label="Delete" id={roleResource._id} onClick={this.deleteResource.bind(this)}>
                    <Icon>delete</Icon>
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
        );
    }
    
    availableResourceRow(resource, index){
        return(
            <ListItem button key={resource._id}>
                <ListItemIcon>
                    <Icon>{resource.static? "web": "settings_applications"}</Icon>
                </ListItemIcon>
                <ListItemText
                  primary={resource.name}
                />
                <ListItemSecondaryAction>
                    <IconButton
                        id={index}
                        onClick={this.addResource.bind(this)}
                    >
                        <Icon>add</Icon>
                    </IconButton>
                </ListItemSecondaryAction>
            </ListItem>
        );
    }

    render() {
        const {classes} = this.props;
        return (
            <Grid container>
                <Grid item xs={8}>
                    <Typography type="title">
                        Assinged
                    </Typography>
                    <List>
                        {this.props.roleResources.map((resource, index) => this.roleResourceRow(resource, index))}
                    </List>
                </Grid>
                <Grid item xs={4}>
                    <Typography type="title">
                        Available
                    </Typography>
                    <TextField 
                       id="resourceFilter"
                       name="resourceFilter"
                       value={this.props.resourceFilter}
                       onChange={this.filterResourceList.bind(this)}
                       label="Name"
                       fullWidth
                   />
                   <List className={classes.root}>
                        {this.props.availableResources.map((resource, index) => this.availableResourceRow(resource, index))}
                   </List>
                </Grid>
            </Grid>
        );
    }
}

export default withStyles(styles)(AccessControlManagerResources);