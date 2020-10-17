import { LinearProgress } from '@material-ui/core';
import Axios from 'axios';
import React from 'react';
import { Component, Fragment } from "react";
import UserBox from '../components/Users/UserBox';
import UsersTable from '../components/Users/UsersTable';


class HomeContainer extends Component {

    state = {
        usersCount: 0,
        postsCount: 0,
        users: [],
        posts: [],
        loading: false

    }

    componentDidMount() {
        this.setState({loading: true})
       this.getAllUsers();
       // this.getAllPosts();
    }

    getAllUsers = () => {
        Axios.get("http://13.232.164.94:7001/studiendo/users/getAllUsers").then(res => {
            this.setState({ usersCount: res.data.data.length, users: res.data.data, loading: false })
        }).catch(err => {
            console.error(err)
        })
    }

    getAllPosts = () => {
        Axios.get("http://13.232.164.94:7001/studiendo/discussionBoard/getAllPosts/").then(res => {
            this.setState({ postsCount: res.data.data.length, posts: res.data.data })
        }).catch(err => {
            console.error(err)
        })
    }


    render() {
        return (<Fragment>
            {this.state.loading && <LinearProgress/>}
            <div className="row">
                <div className="col-md-4 offset-md-4">
                <UserBox count={this.state.usersCount} />
                </div>
            </div>
            <br/>
            
            <UsersTable users = {this.state.users}/>

        </Fragment>)
    }
}

export default HomeContainer;
