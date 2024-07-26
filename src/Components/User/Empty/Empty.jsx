import React from 'react';
import './Empty.css';

function Empty({message}) {
  return (
    <>
      <div className="flex justify-center items-center h-[70vh] text-center text-[#888]">
        <h2 className='text-[3rem]'>{message}</h2>
      </div>
    </>
  )
}

export default Empty
