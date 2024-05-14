import React, { useEffect, useState } from 'react'
import './weather.css'
import axios from 'axios'

export const Weather = () => {

  const [data,setData]=useState()
  const [search,setSearch]=useState('')

  const handlechange=(event)=>{
    setSearch(event.target.value)
  }

  const handlesubmit= async(event)=>{
    event.preventDefault()
    let response=await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=imperial&appid=0cf3d05c6cb443424f42856d18e090b3`)
    console.log(response);
    setData(response.data)

  }



  return (

    <>
   <div className='first'>
    
<form onSubmit={handlesubmit}  class="max-w-md mx-auto p-5">   
    <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
    <div class="relative">
        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
        <input onChange={handlechange} value={search?search:""} type="search" id="default-search" class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search place" required />
        <button type="submit" class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
    </div>
</form>
{data&&
<div>
<div className='flex justify-center pl-96 flex-col mt-40 '>
<div  className=' text-[35px] font-bold text-white'>{data?.name}</div>
<div className='text-[30px] font-bold text-white'>{data?.main?.temp}</div>
</div>
<div class="w-[700px] p-14 bg-white/20 border border-gray-200 rounded-lg shadow m-auto mt-44  flex flex-wrap gap-20">
   <div className='text-white text-[25px]'>
    <p>{data?.main?.feels_like}</p>
    <p>Feels like</p>

    </div> 
    <div className='text-white text-[25px]'>
    <p>{data?.main?.humidity}</p>
    <p>Humidity</p>

    </div> 
    <div className='text-white text-[25px]'>
    <p>{data?.wind?.speed}</p>
    <p>Winds</p>

    </div> 

</div>



   </div>
}
   </div>

</>
  )
}
