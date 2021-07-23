import React from 'react'

class CommentDate extends React.Component{
    render(){
      return (
        <div className="Comment-date">
          {this.props.date}
        </div>
      )
    }
}

export default CommentDate