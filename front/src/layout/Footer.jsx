import React from 'react'
import { FaLinkedinIn } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className='w-full h-[100px] flex justify-center'>
        <div className='max-w-7xl w-full h-full flex justify-between items-center '>
        
            <h3 className='text-white/70 text-[12px] '>© 2025 Shota Chikvaidze</h3>

            <div className='flex gap-4'>
                <Link target='_blank' to={'https://www.linkedin.com/in/shota-chikvaidze-a6845b370/'}>
                    <FaLinkedinIn className='text-[17px] text-white/70 ' />
                </Link>
                <Link target='_blank' to={'https://github.com/shota-chikvaidze'} >
                    <FaGithub className='text-[17px] text-white/70 ' />
                </Link>
            </div>

        </div>
    </footer>
  )
}

export default Footer