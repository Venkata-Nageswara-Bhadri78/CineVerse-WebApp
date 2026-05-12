import React from 'react'
import { useNavigate } from 'react-router-dom'
import { MdArrowBackIosNew } from "react-icons/md";

const BackButton = () => {
    const navigate = useNavigate();

    return (
    <div className='p-2'>
        <div onClick={() => {navigate(-1)}} className='w-12 h-10 flex justify-center items-center rounded-2xl bg-black text-white cursor-pointer hover:bg-gray-800 transition-colors'>
            <MdArrowBackIosNew />
        </div>
    </div>
  )
}



export default BackButton