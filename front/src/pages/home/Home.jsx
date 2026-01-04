import React from 'react'
import homeMain from '../../assets/images/newImage.jpg'
import { MdWavingHand } from "react-icons/md";
import { ReactTyped } from "react-typed";
import { useNavigate } from 'react-router-dom'
import Skills from '../../data/Skills';
import { motion } from 'framer-motion';

export const Home = () => {

  const navigate = useNavigate()

  const projNavigate = () => {
    navigate('/projects')
  }

  const contNavigate = () => {
    navigate('/contact')
  }

  return (
    <>
      <section className='w-full h-100 flex items-center justify-center min-h-[650px] '>
        <div className='flex items-center justify-between w-full max-w-7xl'>

          <div className='max-w-2xl'>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
              className='flex gap-4 items-center mb-2 text-[#E3E3E3] text-[2rem]'
            > 
              Hey there! <MdWavingHand className='wave' /> 
            </motion.p>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className='text-[#E3E3E3] text-[3rem] uppercase'
            >
              I'm <span className='text-[#647cd5]'> Shota Chikvaidze </span> 
            </motion.p>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              className="py-2"
            >
              <ReactTyped
                strings={[
                  "MERN Stack Developer",
                  "React Front-End Specialist",
                  "Node.js and Express Back-End Builder"
                ]}
                typeSpeed={70}
                backSpeed={50}
                loop
                className='text-[1.2rem] text-[#E3E3E3]'
              />
            </motion.p>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
              className='text-[#E3E3E3] py-2'
            >
              I build performant, accessible web apps with a focus on clean code, UX and pragmatic architecture. I enjoy crafting apps that scale and are pleasent to work on.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
              className='flex gap-3 py-2'
            >
              <button onClick={projNavigate} className="w-[140px] h-[35px] rounded-xl bg-[#456882] text-white cursor-pointer text-[15px] border border-transparent hover:bg-transparent hover:border-white/10 transition-all duration-300"> View Projects </button>
              <button onClick={contNavigate} className='w-[140px] h-[35px] bg-transparent text-[#E3E3E3] rounded-xl border border-white/10 text-[15px] cursor-pointer hover:border-white/40 transition '>Contact</button>
            </motion.div>

          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className='relative group'
          >
            <div className='absolute -inset-1 bg-gradient-to-r from-[#647cd5] to-[#456882] rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition duration-500 animate-pulse'></div>
            <div className='relative bg-gradient-to-br from-[#456882] to-[#234C6A] rounded-2xl p-2 shadow-2xl transform hover:scale-105 transition-all duration-500'>
              <img 
                src={homeMain} 
                alt='Coding guy image' 
                className='w-[430px] rounded-xl h-auto  transition-shadow duration-300' 
              />
            </div>
          </motion.div>

        </div>
      </section>

      <section className='w-full h-auto flex justify-center'>
        <div className=' w-full max-w-7xl flex flex-col min-h-[400px] gap-4 text-[#E3E3E3] '>

          <motion.h4 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className='py-5 uppercase text-[2rem]'
          >
            Get to Know Me
          </motion.h4>

          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className='tracking-[2px]'
          >
            I'm Shota - a web developer with a strong focus on building fast, clean, and functional applications. I work mainly with <span className='text-[#647cd5] font-semibold'> React and Node.js, </span> and I enjoy turning ideas into real, well-structured products. I care about writing maintainable code, designing clear user experiences, and constantly improving both my skills and the quality of my work.
          </motion.p>

          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className='tracking-[2px]'
          >
            Programming isn't something I do casually - it's what I <span className='text-[#647cd5] font-semibold'> actively study, practice, and level up in every day. </span> I like creating things that solve real problems, look good, and perform even better. My mindset is simple: build, break, learn, improve.
          </motion.p>

          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className='tracking-[2px]'
          >
            Right now, I'm expanding my skills, taking on more complex projects, and moving toward full-stack mastery - one step at a time.
          </motion.p>

        </div>
      </section>

      <section className='w-full py-10'>
        <div className='max-w-7xl mx-auto px-4'>
          <motion.h3 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className='text-2xl font-semibold text-slate-100 mb-7'
          >
            Main Skills
          </motion.h3>
          <div className='grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
            {Skills.map((skill, index) => (
              <motion.div 
                key={skill.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
                className="cursor-pointer relative overflow-hidden flex items-center gap-4 rounded-xl bg-[#234C6A] border border-white/10 p-4 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 before:absolute before:inset-0 before:bg-[#456882]/20 before:transition-transform before:duration-300 before:translate-y-0 hover:before:-translate-y-full before:z-0 ">
                <div className='flex-shrink-0'>{skill.icon}</div>
                <div>
                  <div className='font-semibold text-slate-100'>{skill.name}</div>
                  <div className='text-sm text-slate-300 mt-1'>{skill.desc}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </>
  )
}
