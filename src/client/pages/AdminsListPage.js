import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAdmins } from '../actions';
import requireAuth from '../components/hocs/requireAuth';

class AdminsList extends Component{
    componentDidMount(){
        this.props.fetchAdmins();
    }

    renderAdmins(){
        return this.props.admins.map(admin =>{
            return <li key={admin.id}>{admin.name}</li>;
        });
    }

    render(){
        return (
            <div>
                <h2>Here's a list of admins:</h2>
                <ul>
                    {this.renderAdmins()}
                </ul>
            </div>
        );
    }
}

function mapStateToProps(state){
    return { admins: state.admins };
}

function loadData(store){
    console.log("Trying to load some data - requested from client.");
    return store.dispatch(fetchAdmins());
}

export default { 
    loadData,
    component: connect(mapStateToProps, {fetchAdmins})(requireAuth(AdminsList))
};