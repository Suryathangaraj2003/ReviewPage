import React from 'react'
import page7_img from './img/page7-img.png'

const Page7 = () => {
  return (
    <div>
        <div className=''>
            <h1 className='text-center font-bold text-4xl py-4'>Learning paths based on your answer</h1>
            <h3>Choose one to get started.You can switch anytime</h3>
            
            <div className='flex flex-row my-8 text-left  '>
                
                <div className='border-2   ml-4  roundedhover:shadow-md hover:border-yellow-500 w-6/12 sm:ml-16 xl:ml-20 2xl:ml-32  rounded p-2 '>
                <h4 className='px-2 w-32 mt-[-20px] ml-8 text-center bg-yellow-500 border rounded-xl  sm:ml-12 md:ml-20 lg:ml-36 xl:ml-48
                2xl:ml-60' >Most popular</h4>
                <div className='flex flex-row'>
                    <p className='w-32  mt-8 sm:w-full flex'>Foundation Math Build your foundation skills in algebra,geometry,and probability
                    <img src={page7_img} alt="" srcset="" className='h-20 w-20 pr-6'/>
                    </p>
                    </div>
                
                </div>
                <div className='border-2 ml-2 mr-2 flex flex-row roundedhover:shadow-md hover:border-yellow-500 w-6/12 sm:mr-16 xl:mr-20 2xl:mr-32  rounded p-2 '>
                    <p><b>Mathematical THinking</b> build your foundational skills in algebra,geometry and probability</p>
                <img src={page7_img} alt="" srcset="" className='h-20 w-20 pr-6'/>
                </div>

                {/* <div className='border mx-4 flex flex-row pt-8  rounded hover:shadow-md hover:border-yellow-500'>
                    <p className=''><b>Mathematical THinking</b> build your foundational skills in algebra,geometry and probability</p>
                    <img src={page7_img} alt="" srcset="" className='h-24 w-24' />
                </div> */}
            </div>
        </div>
    </div>
  )
}

export default Page7