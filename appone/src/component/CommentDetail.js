import React from 'react'
import ReactDom from 'react-dom'

const CommentDetail = (props) =>{
    return(
            <div class="comment">
                <a href="/" class="avatar">
                    <img alt="avatar" src={props.avatar}/>
                </a>
                <div class="content">
                    <a class="author">{props.author}</a>
                    <div class="metadata">
                        <span class="date">Today at 5:42PM</span>
                    </div>
                    <div class="text">
                        How artistic!
                    </div>
                    <div class="actions">
                        <a class="reply">Reply</a>
                    </div>
                </div>
            </div>
    )
}
export default CommentDetail;