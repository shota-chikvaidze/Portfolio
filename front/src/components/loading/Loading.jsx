import React from 'react'
import { AiOutlineLoading3Quarters } from "react-icons/ai";


const Loading = () => {
  return (
    <div className="flex items-center justify-center">
        <AiOutlineLoading3Quarters className="animate-spin text-3xl text-white" />
    </div>
  )
}

export default Loading