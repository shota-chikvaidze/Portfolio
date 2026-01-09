import React from 'react'
import { AiOutlineLoading3Quarters } from "react-icons/ai";


export const MainLoading = () => {
  return (
    <div className="flex items-center justify-center h-[100vh] ">
        <AiOutlineLoading3Quarters className="animate-spin text-3xl text-white" />
    </div>
  )
}

export const Loading = () => {
  return (
    <div className="flex items-center justify-center">
        <AiOutlineLoading3Quarters className="animate-spin text-3xl text-[var(--text-white)]" />
    </div>
  )
}