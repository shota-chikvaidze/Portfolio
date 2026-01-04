import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { IoHomeOutline } from "react-icons/io5";
import { LuUser } from "react-icons/lu";
import { FaRegFolder } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { LuGithub } from "react-icons/lu";
import { MdOutlineMiscellaneousServices } from "react-icons/md";

const Layout = () => {

  const [isScrolled, setIsScrolled] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10); 
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)

  }, []) 

  return (
    <>
      <header className={`flex justify-center fixed z-40 top-0 left-0 w-full h-[70px] transition-all duration-300 ${isScrolled ? 'bg-[#1E201E]/30 backdrop-blur-md shadow-md' : 'bg-transparent'}`} >
        <div className='max-w-7xl w-full flex justify-between items-center '>

          <div>
            <h1 onClick={() => navigate('/')} className='cursor-pointer text-[1.8rem] font-[500] text-[#E3E3E3]'>SH.</h1>
          </div>

          <ul className='flex items-center gap-15 '>

            <li className='relative inline-block after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-[#E3E3E3] after:scale-x-0 after:origin-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-left text-[#E3E3E3] text-[1.2rem] font-[400]'> <Link className='flex items-center gap-1' to={'/'}> <IoHomeOutline className='text-[#E3E3E3] text-[1.2rem] font-[400]' /> Home </Link> </li>
            <li className='relative inline-block after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-[#E3E3E3] after:scale-x-0 after:origin-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-left text-[#E3E3E3] text-[1.2rem] font-[400] '> <Link className='flex items-center gap-1' to={'/about'}> <LuUser className='text-[#E3E3E3] text-[1.2rem] font-[400]' /> About </Link> </li>
            <li className='relative inline-block after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-[#E3E3E3] after:scale-x-0 after:origin-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-left text-[#E3E3E3] text-[1.2rem] font-[400] '> <Link className='flex items-center gap-1' to={'/projects'}> <FaRegFolder className='text-[#E3E3E3] text-[1.2rem] font-[400]' /> Projects </Link> </li>
            <li className='relative inline-block after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-[#E3E3E3] after:scale-x-0 after:origin-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-left text-[#E3E3E3] text-[1.2rem] font-[400] '> <Link className='flex items-center gap-1' to={'/services'}> <MdOutlineMiscellaneousServices className='text-[#E3E3E3] text-[1.2rem] font-[400]' /> Services </Link> </li>
            <li className='relative inline-block after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-[#E3E3E3] after:scale-x-0 after:origin-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-left text-[#E3E3E3] text-[1.2rem] font-[400] '> <Link className='flex items-center gap-1' to={'/contact'}> <HiOutlineMail className='text-[#E3E3E3] text-[1.2rem] font-[400]' /> Contact </Link> </li>

          </ul>

          <div>
            <Link to={'https://github.com/shota-chikvaidze'} target='_blank'> <LuGithub className=' text-[1.5rem] text-[#E3E3E3] ' /> </Link>
          </div>

        </div>
      </header>

      <div className='h-[70px]'>

      </div>
    </>
  )
}

export default Layout