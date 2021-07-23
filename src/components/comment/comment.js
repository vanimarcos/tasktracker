import React from 'react'

import Avatar from './../avatar/avatar'
import UserInfoName from './../userinfoname/userinfoname'

import CommentText from './../commenttext/commenttext'
import CommentDate from './../commentdate/commentdate'

class Comment extends React.Component{
    render(){
      return (
        <div className="Comment">
          <div className="UserInfo">
            <Avatar author={this.props.author}/>
            <UserInfoName name={this.props.author}/>
          </div>
          <CommentText text={this.props.text}/>
          <CommentDate date={this.props.date}/>
        </div>
      )
    }
}

export default Comment