import React from 'react'
import { useNavigate } from 'react-router-dom'
import { MdArrowBackIosNew } from "react-icons/md";

const BackButton = () => {
    const navigate = useNavigate();

    return (
    <div className='p-2'>
        <div onClick={() => {navigate(-1)}} className='w-1/9 flex justify-center py-2 px-2 rounded-2xl bg-black text-white'>
            <MdArrowBackIosNew />
        </div>
    </div>
  )
}

export default BackButton