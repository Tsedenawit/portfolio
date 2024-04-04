import React from 'react';

export default function Port(props){
  return(
    <div>
      <h1 className='text-center mb-10 text-5xl'><b>Projects</b></h1>
      <div className='flex justify-between ml-20 mr-20'>
    <div className=' size-1/5 bg-white p-8 rounded-lg drop-shadow-lg'>
      <div>
      <img className='mb-5' src={props.img}>
      </img>
      </div>
      <h2 className='mb-5 text-center text-xl'> <b>{props.name}</b></h2>
      <p className='text-center'>
      {props.par}
      </p>
    </div>
    </div>
    </div>
  )
}