import React, { Component } from 'react'
import './user.css'
import Header from '../Header/Header'
import store from '../../redux/store'

class User extends Component {
  render() {
    const { id } = this.props.match.params
    const users = store.getState().users.all
    const isFriend = store.getState().users.isFrind
    if(users.length!==0){
      const thisUser = users.find(t => t.id == id)
      console.log(thisUser);
      return (
        <div className='user'>
          <Header>用户</Header>
          <div className='userin' style={{ 'height': `${window.innerHeight -160}px` }}>
            <div className='user-avatar'></div>
            <div className='user-name'>{thisUser.userName}</div>
            <div className='user-info-card'>
              <div className='user-info-card-title'>个性签名</div>
              <div className='slogan'>{thisUser.slogn}</div>
            </div>
            <div className='add-friend-button'
              >{ isFriend }</div>
          </div>
        </div>
      )
    }else{
      return null
    }
  }
}
export default User
