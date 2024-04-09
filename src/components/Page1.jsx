import React from 'react'
import { Link } from 'react-router-dom'

import pic1 from './img/pic1.png'
import pic2 from './img/p1-2.png'
import pic3 from './img/p1-3.png'
import pic4 from './img/p1-4.png'
import pic5 from './img/p1-5.jpeg'
import pic6 from './img/p1-6.jpeg'



const Page1 = () => {
  return (
    <div className='text-center font-bold mt-6'>
        <h1 className='text-4xl'>Which describes you best?</h1>
        <h4 className='text-sm my-1/3 font-normal'>This will help us personalize your experience</h4>

        <ul className='font-normal flex justify-center items-center flex-col mt-16'>

            <div className='list'> 
            <li className=' w-84 flex items-center p-2 mb-2 '>
    <img src={pic1} alt="" width={30} height={30} className="mt-2" />
    <h3 className='mx-2'><b>Student</b> or soon to be enrolled</h3>
             </li></div>
  <div className='list'>
  <li className=' w-84 flex items-center p-2 mb-2'>
    <img src={pic2} alt="" width={30} height={30} className="mt-2" />
    <h3 className='mx-2'><b>Professional</b> pursuing a career</h3>
  </li>
  </div>

  {/* Additional list items */}
  <div className='list'>
  <li className=' w-84 flex items-center p-2 mb-2 '>
    <img src={pic3} alt="" width={30} height={30} className="mt-2" />
    <h3 className='mx-2'><b>Parent</b> of a school-age child</h3>
  </li>
  </div>

<div className='list'>
  <li className=' w-84 flex items-center p-2 mb-2'>
    <img src={pic4} alt="" width={30} height={30} className="mt-2" />
    <h3 className='mx-2'><b>Lifelong learner</b> </h3>
  </li>
  </div>

<div className='list'>
  <li className=' w-84 flex items-center p-2 mb-2'>
    <img src={pic5} alt="" width={30} height={30} className="mt-2" />
    <h3 className='mx-2'><b>Teacher</b></h3>
  </li>
  </div>
<div className='list'>
  <li className=' w-84 flex items-center p-2 mb-2'>
    <img src={pic6} alt="" width={30} height={30} className="mt-2" />
    <h3 className='mx-2'><b>Other</b></h3>
  </li>
  </div>
</ul>

<button className='mt-16 px-10 py-2 rounded bg-black text-white border'><Link to='/page2'>Continue</Link></button>
    </div>
  )
}

export default Page1