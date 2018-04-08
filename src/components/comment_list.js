import React, { Component } from 'react';
import { connect } from 'react-redux';

const CommentList = ( props ) => {
    return(
        <div className = 'comment-list'>
            <ul className = 'list-group'>
                {
                    props.comments.map((comment, index) => {
                        return <li key = {index}>{comment}</li>
                    })
                }
            </ul>
        </div>
    )
}

function mapStateToProps( state ) {
    return { comments: state.comments };
}

export default connect(mapStateToProps)(CommentList);