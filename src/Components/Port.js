import React from 'react';

export default function Port(props){
  const parts =[{
  img:"../images/project.jpg" ,
  name:"Bus ticket reservation" ,
  par:"Lorem ipsum dolor sit amet,consectetur adipiscing elit. Duis accumsan enim a consectetur aliquam.Proin at ligula sed dolor pellentesque malesuada."
  }]
  return(
    
    <div>
      <h1 className='text-center mb-10 text-5xl'><b>Projects</b></h1>
      {parts.map((part)=>{
    <div className='flex justify-between ml-20 mr-20 row-span-3'>
    <div className=' size-1/5 bg-white p-8 rounded-lg drop-shadow-lg'>
      <div>
      <img className='mb-5' src={part.img}>
      </img>
      </div>
      <h2 className='mb-5 text-center text-xl'> <b>{part.name}</b></h2>
      <p className='text-center'>
      {part.par}
      </p>
    </div>
    </div>
        
      })}
      
  
    </div>
  )
}