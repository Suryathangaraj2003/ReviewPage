import React from 'react';
import page3_pic from './img/page3-pic.png';
import { Link } from 'react-router-dom';

const Page3 = () => {
  return (
    <>
      <div className='flex flex-col items-center justify-center md:flex-row text-left'>
        <div className='w-5/6 h-80 md:mt-32 xl:h-100 xl:w-100 '>
          <img src={page3_pic} alt="" className='mx-auto my-auto ' />
        </div>
        <div className='p-4 2xl:mx-20'>
          <h1 className='text-4xl font-bold py-8'>You're in the right place</h1>
          <p className='text-normal'>Brilliant gets you hands-on help to improve your professional skills and knowledge. You'll interact with concepts and solve fun problems in math, science, and computer science.</p>
        </div>
      </div>
      <div className='flex justify-center'>
        <button className='my-16 px-10 py-2 rounded bg-black text-white border'><Link to='/page4'>Continue</Link></button>
      </div>
    </>
  );
};

export default Page3;
