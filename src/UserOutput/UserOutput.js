import React from 'react';
import './UserOutput.css';

const UserOutput = props => {
  return (
    <div className="UserOutput">
      <p><strong>{props.username}</strong></p>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo porro itaque officiis.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, nulla.</p>
    </div>
  )
}

export default UserOutput;