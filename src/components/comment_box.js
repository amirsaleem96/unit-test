import React, { Component } from 'react';

class CommentBox extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }
    render(){
        return(
            <div className = 'comment-box'>
               <textarea></textarea>
               <button>Submit</button> 
            </div>
        )
    }
}

export default CommentBox;