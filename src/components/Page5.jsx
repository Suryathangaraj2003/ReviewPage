import React from 'react'
import { Link } from 'react-router-dom'
import img5 from './img/page5_img.png'




const page5 = () => {
  return (
    <div>
        
        <div className='flex flex-col items-center justify-center md:flex-row text-left'>
        <div className='w-5/6 h-120 md:mt-32 xl:h-100 xl:w-100 '>
          <img src={img5} alt="" className='mx-auto my-auto ' />
        </div>
        <div className='p-4 2xl:mx-20'>
          <h1 className='text-4xl font-bold py-8'>You're on your way!</h1>
          
          <div className='my-4'>
          <span className='text-yellow-500 h-8 w-8 text-4xl'>&#9733;</span> 
          <span className='text-yellow-500 h-8 w-8 text-4xl'>&#9733;</span> 
          <span className='text-yellow-500 h-8 w-8 text-4xl'>&#9733;</span> 
          <span className='text-yellow-500 h-8 w-8 text-4xl'>&#9733;</span> 
          <span className='text-yellow-500 h-8 w-8 text-4xl'>&#9733;</span> 
          </div>
          <p className='text-normal'><i>"Through it's engaging and well-structured courses,Brilliant has taugh me mathematical concepts that i previously struggled to understand.I now feel confident approach both technical job interview and real world problem solving situation"</i></p>
          <p className='mt-8'>-Jacob S.</p>
        </div>
      </div>
      <div className='flex justify-center'>
        <button className='my-16 px-10 py-2 rounded bg-black text-white border'><Link to='/page6'>Continue</Link></button>
      </div>
    </div>
    
  )
}

export default page5