import React from 'react'
import homeMain from '../../assets/images/newImage.jpg'
import { motion } from 'framer-motion';
import Tech from '../../data/Tech'
import { Projects } from '../projects/Projects';
import { FiGithub } from "react-icons/fi";
import { FaLinkedinIn, FaFacebookF } from "react-icons/fa6";
import { LuMail } from "react-icons/lu";

export const Home = () => {


  return (
    <>
      <section id='hero' className='w-full h-auto md:h-[450px] flex items-center justify-center mb-[50px] '>
        <div className='flex items-center justify-center w-full max-w-6xl flex-col gap-[30px] md:flex-row px-6 lg:px-2'>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className='relative group'
          >
            <div>
              <img 
                src={homeMain} 
                alt='Home image' 
                className='w-full h-auto border-4 border-[var(--bg-secondary)]  object-cover md:w-[210px] md:h-auto rounded-full transition-shadow duration-300' 
              />
            </div>
          </motion.div>

          <div className='lg:max-w-md w-full'>

            <div className='flex gap-4'>
              <span className='text-[var(--text-secondary)] font-[400] text-[14px] border border-[var(--border-color)] rounded-md px-5 h-[25px] flex items-center bg-[var(--glass-bg)]/40 ' > 15yo </span>
              <span className='text-[var(--text-secondary)] font-[400] text-[14px] border border-[var(--border-color)] rounded-md px-5 h-[25px] flex items-center bg-[var(--glass-bg)]/40 ' > Passionate </span>
              <span className='text-[var(--text-secondary)] font-[400] text-[14px] border border-[var(--border-color)] rounded-md px-5 h-[25px] flex items-center bg-[var(--glass-bg)]/40 ' > Disciplined </span>
            </div>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className='text-[var(--text-primary)] text-[2.4rem] lg:text-[3rem] font-[700] capitalize'
            >
              Hey I'm Shota 
            </motion.p>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className='text-[var(--text-primary)] py-2'
            >
              I'm a web developer based in Georgia with over two years of experience building clean, efficient web applications using React and Node.js, focused on performance, structure, and continuous improvement.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className='flex gap-3 py-2'
            >

              <a href='/CV.pdf' className='flex items-center justify-center w-[140px] h-[35px] bg-[var(--bg-accent)] text-[var(--text-primary)] rounded-xl border border-[var(--border-color)] text-[15px] cursor-pointer hover:border-[var(--border-color)]/50 transition ' download > Download CV </a>
              <a target='_blank' rel='noopener noreferrer' href='https://github.com/shota-chikvaidze' className='p-2 border border-[var(--border-color)] rounded-md '> <FiGithub className='text-[var(--text-primary)] ' /> </a>
              <a target='_blank' rel='noopener noreferrer' href='https://www.linkedin.com/in/shota-chikvaidze-a6845b370/' className='p-2 border border-[var(--border-color)] rounded-md '> <FaLinkedinIn className='text-[17px] text-white/70 ' /> </a>
              <a target='_blank' rel='noopener noreferrer' href='https://www.facebook.com/shota.chikvaidze.90' className='p-2 border border-[var(--border-color)] rounded-md '> <FaFacebookF className='text-[17px] text-white/70 ' /> </a>
              <a target='_blank' rel='noopener noreferrer' href='mailto:shchikvaidze1@gmail.com' className='p-2 border border-[var(--border-color)] rounded-md '> <LuMail className='text-[17px] text-white/70 ' /> </a>
                    

            </motion.div>
          </div>

        </div>
      </section>

      <Projects />


      <section id='tech' className='w-full h-auto my-20 flex justify-center '>
        <div className='max-w-6xl w-full px-4'>

            <motion.h2 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className='text-5xl font-[700] mb-6 tracking-tight text-[var(--text-white)]'>
              Tech Stack
            </motion.h2>

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
              {Tech?.map((tech, index) => (
                <motion.div 
                  key={tech.name}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className='group rounded-xl border border-[var(--border-color)] transition hover:border-[var(--border-color)]/50 hover:bg-[var(--glass-overlay)]/50'
                >
                  <div className='flex items-center justify-start w-auto h-[60px] p-4 gap-2'>
                    <div 
                      className='text-[var(--text-secondary)] transition group-hover:scale-110 text-2xl'
                      style={{ color: tech.color }}
                    >
                      {tech.icon}
                    </div>
                    <div>
                      <h3 className='text-[var(--text-white)] font-[500] text-xs mb-0.5'>{tech.name}</h3>
                      <p className='font-[300] text-[13px] text-gray-400 '> {tech.type} </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

          </div>
      </section>

        
      <section id='about' className='w-full py-20 flex justify-center px-4'>
        <div className='w-full max-w-6xl px-4 md:px-0 space-y-6'>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className='rounded-2xl border border-[var(--border-color)] p-8 md:p-12'
          >
            <h2 className='text-3xl md:text-4xl font-bold text-[var(--text-white)] mb-6'>About me</h2>
            <div className='grid gap-6 text-[var(--text-secondary)] text-[1.05rem] leading-relaxed'>
              <p>
                
                I've been studying programming for the past two years, building projects with JavaScript and Node.js while consistently working to improve my skills.
                I code every day and focus on steady progress through real projects and practical experience. 
                So far, I've completed six projects to strengthen my foundation, 
                and I'm currently building a larger project that I plan to fully ship. 
                Alongside that, I'm learning TypeScript to write more scalable and maintainable code, 
                and I plan to start learning Python next to expand my technical range. 
                I care about writing clean, logical code and building things that are functional, 
                structured, and well thought out. For me, programming is about discipline, growth, and continuous improvement.

              </p>
            </div>
          </motion.div>

        </div>
      </section>

    </>
  )
}