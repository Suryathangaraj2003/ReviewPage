import React from 'react'
import { useEffect,useState } from 'react'

import ClipLoader from "react-spinners/ClipLoader";
import Page7 from './Page7';

const Page5 = () => {
    const [loading,setLoading]=useState(false)
    useEffect(()=>{
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
            
        }, 2000);
    },[])

  return (
    <div className='h-screen flex flex-row text-center justify-center items-center'>
         {
            loading?<div>
            <ClipLoader
        color={'#F37A24'}
        loading={loading}
       // cssOverride={override}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
      <h1>Finding learning path recommendation for you based on your responses</h1>
      </div>
     
      

            :<Page7 />
        }
    </div>
  )
}

export default Page5