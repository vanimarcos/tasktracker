import React from 'react'

class UserInfoName extends React.Component{
    render(){
      return (
          <div className="UserInfo-name">
            {this.props.author.name}
          </div>
      )       
    }
}
export default UserInfoName