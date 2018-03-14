import React from 'react';
import './UserInput.css'

const UserInput = props => {
  return (
    <div className="UserInput">
      <h3>Change username</h3>
      <input type="text" onChange={props.changed} value={props.username}/>
    </div>
  )
}

export default UserInput;