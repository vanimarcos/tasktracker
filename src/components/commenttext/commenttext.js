import React from 'react'

class CommentText extends React.Component{
    render(){
      return (
        <div className="Comment-text">
          {this.props.text}
        </div>
      )
    }
}

export default CommentText