import React from 'react'

class Avatar extends React.Component{
    render(){
      return (
          <img className="Avatar"
            src={this.props.author.avatarUrl}
            alt={this.props.author.name}
          /> 
        ) 
    }
}

export default Avatar