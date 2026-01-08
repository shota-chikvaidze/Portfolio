import React, { useEffect, useState } from 'react'
import { Link, useNavigate, NavLink } from 'react-router-dom'
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

          <ul className={`flex items-center gap-2`}>

            <li className="relative group">
              <NavLink to="/" className={({ isActive }) => isActive ? 'flex items-center justify-center w-[40px] h-[40px] bg-[#000]/10 rounded-lg' : 'flex items-center justify-center w-[40px] h-[40px] hover:bg-[#000]/20 rounded-lg'}>
                <IoHomeOutline className="text-[#E3E3E3] text-[1.3rem]" />
              </NavLink>

              <span className="absolute left-1/2 -translate-x-1/2 top-full mt-2 px-2 py-1 text-xs rounded-md bg-black/20 text-white opacity-0 translate-y-1 scale-95 group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-100 pointer-events-none transition-all duration-200 whitespace-nowrap">
                Home
              </span>
            </li>

            <li className="relative group">
              <NavLink to="/about" className={({ isActive }) => isActive ? 'flex items-center justify-center w-[40px] h-[40px] bg-[#000]/10 rounded-lg' : 'flex items-center justify-center w-[40px] h-[40px] hover:bg-[#000]/20 rounded-lg'}>
                <LuUser className='text-[#E3E3E3] text-[1.3rem] font-[400]  ' />
              </NavLink>

              <span className="absolute left-1/2 -translate-x-1/2 top-full mt-2 px-2 py-1 text-xs rounded-md bg-black/20 text-white opacity-0 translate-y-1 scale-95 group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-100 pointer-events-none transition-all duration-200 whitespace-nowrap">
                About
              </span>
            </li>

            <li className="relative group">
              <NavLink to="/projects" className={({ isActive }) => isActive ? 'flex items-center justify-center w-[40px] h-[40px] bg-[#000]/10 rounded-lg' : 'flex items-center justify-center w-[40px] h-[40px] hover:bg-[#000]/20 rounded-lg'}>
                <FaRegFolder className='text-[#E3E3E3] text-[1.3rem] font-[400]  ' />
              </NavLink>

              <span className="absolute left-1/2 -translate-x-1/2 top-full mt-2 px-2 py-1 text-xs rounded-md bg-black/20 text-white opacity-0 translate-y-1 scale-95 group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-100 pointer-events-none transition-all duration-200 whitespace-nowrap">
                Projects
              </span>
            </li>

            <li className="relative group">
              <NavLink to="/services" className={({ isActive }) => isActive ? 'flex items-center justify-center w-[40px] h-[40px] bg-[#000]/10 rounded-lg' : 'flex items-center justify-center w-[40px] h-[40px] hover:bg-[#000]/20 rounded-lg'}>
                <MdOutlineMiscellaneousServices className='text-[#E3E3E3] text-[1.3rem] font-[400]  ' />
              </NavLink>

              <span className="absolute left-1/2 -translate-x-1/2 top-full mt-2 px-2 py-1 text-xs rounded-md bg-black/20 text-white opacity-0 translate-y-1 scale-95 group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-100 pointer-events-none transition-all duration-200 whitespace-nowrap">
                Services
              </span>
            </li>

            <li className="relative group">
              <NavLink to="/contact" className={({ isActive }) => isActive ? 'flex items-center justify-center w-[40px] h-[40px] bg-[#000]/10 rounded-lg' : 'flex items-center justify-center w-[40px] h-[40px] hover:bg-[#000]/20 rounded-lg'}>
                <HiOutlineMail className='text-[#E3E3E3] text-[1.3rem] font-[400]  ' />
              </NavLink>

              <span className="absolute left-1/2 -translate-x-1/2 top-full mt-2 px-2 py-1 text-xs rounded-md bg-black/20 text-white opacity-0 translate-y-1 scale-95 group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-100 pointer-events-none transition-all duration-200 whitespace-nowrap">
                Contact
              </span>
            </li>
            
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