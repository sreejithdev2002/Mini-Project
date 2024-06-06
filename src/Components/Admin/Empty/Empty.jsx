import React from 'react';
import './Empty.css';

function Empty({message}) {
  return (
    <>
      <div className="empty">
        <h2>{message}</h2>
      </div>
    </>
  )
}

export default Empty
