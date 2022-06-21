import React, { useState } from 'react'
import Mint from './Mint'


const Hero = () => {
    const [activeTab, setActiveTab] = useState()

  return (
    <div className='bg-[#FC2173] flex space-x-5 '>
        <div className='flex w-[65%]'>
            <div className='text-[#D9DBD8] text-xl py-7 px-12 font-bold max-w-md flex flex-col hover:transition ease-in-out w-full'>
                 <button onClick={() => {setActiveTab("mint")}} className='font-extrabold hover:bg-[#D9DBD8] hover:text-[#FC2173]
                 active:text-[#6e6e6e] focus:bg-[#D9DBD8] focus:text-[#FC2173] text-left px-2 py-2 hover:transition-all'>MINT</button>
                 <button onClick={() => {setActiveTab("manage")}} className='font-extrabold hover:bg-[#D9DBD8] hover:text-[#FC2173]
                 active:text-[#6e6e6e] focus:bg-[#D9DBD8] focus:text-[#FC2173] text-left px-2 py-2 hover:transition-all'>MANAGE COLLECTION</button>
                 <button onClick={() => {setActiveTab("product")}} className='font-extrabold hover:bg-[#D9DBD8] hover:text-[#FC2173]
                 active:text-[#6e6e6e] focus:bg-[#D9DBD8] focus:text-[#FC2173] text-left px-2 py-2 hover:transition-all'>PRODUCT LIST</button>
                 <button onClick={() => {setActiveTab("post")}} className='font-extrabold hover:bg-[#D9DBD8] hover:text-[#FC2173]
                 active:text-[#6e6e6e] focus:bg-[#D9DBD8] focus:text-[#FC2173] text-left px-2 py-2 hover:transition-all'>POST</button>
            </div>
           {activeTab === "mint" && <Mint/>} 
           {/* {activeTab === "manage" && <Mint/>} 
           {activeTab === "product" && <Mint/>} 
           {activeTab === "list" && <Mint/>}  */}
        </div>
       
    </div>
  )
}

export default Hero