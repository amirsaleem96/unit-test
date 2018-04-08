import React, { Component } from 'react';
import * as actions from '../actions/index';
import { connect } from 'react-redux';

class CommentBox extends Component {
    constructor(props){
        super(props);
        this.state = {
            comment: ''
        }
    }
    handleChange(e) {
        this.setState({
            comment: e.target.value
        })
    }
    handleSubmit(e) {
        e.preventDefault();
        this.props.saveComment(this.state.comment);
        this.setState({
            comment: ''
        })
    }
    render(){
        return(
            <form onSubmit = {this.handleSubmit.bind(this)} className = 'comment-box'>
               <textarea onChange = {this.handleChange.bind(this)} value = {this.state.comment}/>
               <button action = "submit">Submit</button> 
            </form>
        )
    }
}

function mapStateToProps( state ) {
    return null;
}

function mapDispatchToProps( dispatch ) {
    return bindActionCreators({ saveComment }, dispatch);
}

export default connect(mapStateToProps, actions)(CommentBox);