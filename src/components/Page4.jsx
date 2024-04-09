import React from 'react'
import { useEffect,useState } from 'react'
import { Link } from 'react-router-dom'
import ClipLoader from "react-spinners/ClipLoader";


const Page4 = () => {
   
  return (
    <div>
       
        <h1 className='text-center font-bold mt-6 text-3xl'>What is your math comfort level</h1>
        <p className='text-center font-normal mt-4'>Choose the highest level you feel confident in -you can always adjust later</p>
    <div className='h-screen flex flex-col text-center justify-center items-center'>
    <div className=' flex flex-row flex-wrap text-center justify-center items-center'>
        <div className='mx-2 my-2 border p-6 rounded hover:shadow-md hover:border-yellow-500  '>
            <h2>5 x 1/2</h2>
            <h4>Arithmetic</h4>
            <h4>Introductory</h4>
        </div>
        <div className='mx-2 border p-6 rounded hover:shadow-md hover:border-yellow-500'>
        <h2>5 x 1/2</h2>
            <h4>Arithmetic</h4>
            <h4>Introductory</h4>
        </div>
        <div className='mx-2 border p-6 rounded hover:shadow-md hover:border-yellow-500'>
        <h2>5 x 1/2</h2>
            <h4>Arithmetic</h4>
            <h4>Introductory</h4>
        </div>
        <div className='mx-2 border p-6 rounded hover:shadow-md hover:border-yellow-500'>
        <h2>5 x 1/2</h2>
            <h4>Arithmetic</h4>
            <h4>Introductory</h4>
        </div>
      
    </div>
    <button className='mt-16 px-10 py-2 rounded bg-black text-white border' ><Link to='/page5'>Continue</Link></button>
    </div>
    </div>
  )
}

export default Page4