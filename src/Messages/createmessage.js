import React, { Component } from 'react';
import {connect} from 'react-redux';
import {createMessage, createNotification} from '../store/action/messageActions';
import {Redirect} from 'react-router-dom';

const loginStyle = {
    width: "50%",
    maxWidth: "1100px",
    margin: "100px auto",
    border: "5px solid #ddd",
    borderRadius: "5px",
    padding: "30px",
    
  }

class createmessage extends Component {
    state = {
        //user: '',
        title:'',
        content:'',
    }
    // componentDidMount = () => {
    //     const {auth} = this.props;
    //     this.setState({
    //         user : auth.name
    //     })
    // }
    handlechange = (e) => {
        this.setState({
            [e.target.id]:e.target.value
        })
    }
    handlesubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
        this.props.createMessage(this.state);
        this.props.history.push('/');
    }

  render() {
    const {auth} = this.props;
    if(!auth.uid) return <Redirect to='/signin'/>

    return (
      <div style={loginStyle} className="white">
        <form onSubmit={this.handlesubmit} className="white">
            <h5 grey-text text-darken-3>Create New Notification</h5>
            <div className="input-field">
                <label htmlFor="title">Title</label>
                <input type="text" id="title" onChange={this.handlechange}/>
            </div>
            <div className="input-field">
                <label htmlFor="content">Message Content</label>
                <textarea id="content" cols="30" rows="10" className="materialize-textarea" onChange={this.handlechange}></textarea>
            </div>
            <div className="input-field">
                <button className="btn blue lighten-1 z-depth-0">Create Message</button>
            </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
    return{
        auth:state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        createMessage:(message) => dispatch(createMessage(message)),
        createNotification:(notification) => dispatch(createNotification(notification))
    }
}

export default connect(mapStateToProps,mapDispatchToProps) (createmessage, createNotification)
