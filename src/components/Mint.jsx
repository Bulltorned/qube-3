import React, { useState, useEffect } from 'react'
import { useFileUpload } from 'use-file-upload'
import { ToggleSlider }  from "react-toggle-slider";


const Mint = () => {
    const [file, selectFile] = useFileUpload()
    const [active, setActive] = useState(false);
    const [supply, setSupply] = useState(null);
    const [nama, setNama] = useState("")
    const [price, setPrice] = useState(null)
    const [desc, setDesc] = useState("")

    useEffect(() => {
        console.log(supply, nama)
      }, );
    
  return (
    <div>
        <form action="">
        <div className=' text-xl py-7 px-5 font-bold hover:transition ease-in-out w-full text-[#D9DBD8]'>
                <select name="" id="collection" className='w-full text-[#6e6e6e] bg-[#D9DBD8]'>
                    <option value="edition">EDITION</option>
                    <option value="single">SINGLE</option>
                    <option value="pack">PACK</option>
                </select>
                <div className='pt-4'>
                    <h1 className='text-[#D9DBD8]'>SELECT COLLECTION / TOKEN</h1>
                    <div className='mx-auto pt-4 flex flex-grow'>
                        <div className='box-content h-20 w-20 pt-4 mr-4 border bg-[#D9DBD8] hover:shadow-xl hover:border-black'></div>
                        <div className='box-content h-20 w-20 pt-4 mr-4 border bg-[#D9DBD8] hover:shadow-xl hover:border-black'></div>
                        <div className='box-content h-20 w-20 pt-4 mr-4 border bg-[#D9DBD8] hover:shadow-xl hover:border-black'></div>
                    </div>
                </div>
                <div className='pt-4 '>
                    <div className='box-content  w-xl py-4 mr-4 border bg-[#D9DBD8] text-center place-items-center'>
                        <div className='font-light text-[#FC2173] text-sm place-items-center'>PNG, GIF, WEBP, MP4 OR MP3 (MAX 100MB)</div>
                        <div>
                            <button className='bg-[#D9DBD8] border py-2 px-6 border-black hover:shadow-xl hover:border-black hover:border-2 text-center text-[#FC2173]
                            font-semibold flex flex-col mx-auto my-4' onClick={() => {
                             // Single File Upload accepts only images
                             selectFile({ accept: 'image/*' }, ({ source, name, size, file }) => {
                             // file - is the raw File Object
                            console.log({ source, name, size, file })
                            // Todo: Upload to cloud.
                             })
                             }} >         
                            Click to Upload </button>
                            {file ? ( 
                            <div className=''>
                                <img src={file.source} alt='preview' className='w-32 mx-auto'/>
                            </div>) : (
                            <span className='font-light text-sm text-[#6e6e6e]'>No file selected</span>
                            )}
                        </div>
                    </div>
                </div>
                <div className='py-4'>
                    <h2 className='pb-2 text-[#D9DBD8]'> SUPPLY </h2>
                    <input name='supply' type="number" value={supply} onChange={(e) => { setSupply(e.target.value) }} className='bg-[#D9DBD8] w-full text-black' placeholder='Enter your supply here'/>
                </div>
                <div className='py-4'>
                    <h2 className='pb-2 text-[#D9DBD8]'> LAUNCH DATE </h2>
                    <input type="date" className='bg-[#D9DBD8] text-[#6e6e6e] w-full' placeholder='Select your launch date' />
                </div>
                <div className=''>
                    <div className='flex flex-auto justify-between'>
                        Free Mint  <ToggleSlider onToggle={state => setActive(state)}/> 
                    </div>
                        {active ? "" : "" }
                </div>
                <div className='py-4'>
                    <h2 className='pb-2 text-[#D9DBD8]'> PRICE </h2>
                    <input type="number" value={price} onChange={(e) => { setPrice(e.target.value) }} className='bg-[#D9DBD8] w-full text-black' placeholder='Enter your price' />
                </div>
                <div className='py-4'>
                    <h2 className='pb-2 text-[#D9DBD8]'> NAME </h2>
                    <input name='nama' type="text" value={nama} onChange={(e) => { setNama(e.target.value) }} className='bg-[#D9DBD8] w-full text-black' placeholder='Your collection name here..' />
                </div>
                <div>
                    <h2 className='pb-2 text-[#D9DBD8]'> DESCRIPTION </h2>
                    <textarea name="description" id="description" cols="30" rows="5" className='bg-[#D9DBD8] text-black'placeholder='Your description here'
                    value={desc} onChange={(e) => { setDesc(e.target.value) }}
                    ></textarea>
                </div>
                <div>
                    <input type="submit" className='py-2 px-6 mx-auto my-2 flex bg-[#D9DBD8] text-[#FC2173] font-bold hover:border hover:border-black hover:shadow-md' />
                    {/* <button 
                    className='py-2 px-6 mx-auto my-2 flex bg-[#D9DBD8] text-[#FC2173] font-bold hover:border hover:border-black hover:shadow-md'>CREATE</button> */}
                </div>
        </div>
        </form>
     </div>
  )
}

export default Mint