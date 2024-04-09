import React from 'react'
import { Link } from 'react-router-dom'
import pic1 from './img/p2-1.png'
import pic2 from './img/p2-2.png'
import pic3 from './img/p2-3.png'
import pic4 from './img/p2-4.png'
import pic5 from './img/p2-5.png'


const Page1 = () => {
  return (
    <div className='text-center font-bold mt-6'>
        <h1 className='text-4xl'>Which are you most interested in?</h1>
        <h4 className='text-sm my-1/3 font-normal mt-2 mx-8'>Choose just one.This will help us get you started(but won't limit your experience)</h4>

        <ul className='font-normal flex justify-center items-center flex-col mt-16'>

            <div className='w-3/5 border my-2  rounded rounded hover:shadow-md hover:border-yellow-500'> 
            <li className=' w-84 flex items-center p-2 mb-2'>
    <img src={pic1} alt="" width={30} height={30} className="mt-2" />
    <h3 className='mx-2'>Learning specific skills to advance my career</h3>
             </li></div>
  <div className='w-3/5 border my-2 rounded rounded hover:shadow-md hover:border-yellow-500'>
  <li className=' w-84 flex items-center p-2 mb-2'>
    <img src={pic2} alt="" width={30} height={30} className="mt-2" />
    <h3 className='mx-2'>Exploring new topics I'm interested in</h3>
  </li>
  </div>

  {/* Additional list items */}
  <div className='w-3/5 border my-2  rounded rounded hover:shadow-md hover:border-yellow-500'>
  <li className=' w-84 flex items-center p-2 mb-2 '>
    <img src={pic3} alt="" width={30} height={30} className="mt-2" />
    <h3 className='mx-2'>Refreshing my math foundation</h3>
  </li>
  </div>

<div className='w-3/5 border my-2  rounded rounded hover:shadow-md hover:border-yellow-500'>
  <li className=' w-84 flex items-center p-2 mb-2'>
    <img src={pic4} alt="" width={30} height={30} className="mt-2" />
    <h3 className='mx-2'>Exercising my brain to stay sharp</h3>
  </li>
  </div>

<div className='w-3/5 border my-2  rounded rounded hover:shadow-md hover:border-yellow-500'>
  <li className=' w-84 flex items-center p-2 mb-2'>
    <img src={pic5} alt="" width={30} height={30} className="mt-2" />
    <h3 className='mx-2'>Something else</h3>
  </li>
  </div>
{/* <div className='w-3/5 border my-2  rounded'>
  <li className=' w-84 flex items-center p-2 mb-2'>
    <img src="../download.jpeg" alt="" width={30} height={30} className="mr-2" />
    <h3><b>Other</b></h3>
  </li>
  </div> */}
</ul>
<Link to='/page3'>
<button className='mt-16 px-10 py-2 rounded bg-black text-white border'>Continue</button></Link>
    </div>
  )
}

export default Page1