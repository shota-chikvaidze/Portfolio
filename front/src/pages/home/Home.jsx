import React, { useEffect } from 'react'
import homeMain from '../../assets/images/newImage.jpg'
import { MdWavingHand } from "react-icons/md";
import { ReactTyped } from "react-typed";
import { useNavigate } from 'react-router-dom'
import Skills from '../../data/Skills';
import { motion } from 'framer-motion';
import { HiLightningBolt } from "react-icons/hi";
import { PiTargetDuotone } from "react-icons/pi";
import { FiTrendingUp } from "react-icons/fi";

export const Home = () => {

  const navigate = useNavigate()

  const projNavigate = () => {
    navigate('/projects')
  }



  return (
    <div className=''>
      <section className='w-full h-auto flex items-center justify-center my-[70px]'>
        <div className='flex items-center justify-between w-full max-w-7xl flex-col gap-[20px] md:flex-row px-6 lg:px-2'>

          <div className='lg:max-w-2xl w-full'>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
              className='flex gap-4 items-center mb-2 text-[var(--text-primary)] text-[2rem]'
            > 
              Hey there! 
            </motion.p>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className='text-[var(--text-primary)] text-[2.4rem] lg:text-[3rem] uppercase'
            >
              I'm <span className='text-[var(--accent-primary)]'> Shota Chikvaidze </span> 
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
                typeSpeed={55}
                backSpeed={30}
                loop
                className='text-[1.2rem] text-[var(--text-primary)]'
              />
            </motion.p>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
              className='text-[var(--text-primary)] py-2'
            >
              I'm a web developer based in Georgia with over two years of experience building clean, efficient web applications using React and Node.js, focused on performance, structure, and continuous improvement.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
              className='flex gap-3 py-2'
            >
              <button onClick={projNavigate} className="w-[140px] h-[35px] rounded-xl bg-[var(--bg-accent)] text-[var(--text-primary)] cursor-pointer text-[15px] border border-transparent hover:bg-transparent hover:border-[var(--border-color)] transition-all duration-300"> View Projects </button>
              <button className="w-[140px] h-[35px] bg-transparent text-[var(--text-primary)] rounded-xl border border-[var(--border-color)] text-[15px] cursor-pointer hover:border-[var(--border-color)]/50 transition "> 
                <a href='/CV.pdf' download > Download CV </a>
              </button>
              
            </motion.div>

          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className='relative group'
          >
            <div className='absolute -inset-1 bg-gradient-to-r from-[var(--accent-primary)] to-[var(--bg-accent)] rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition duration-500 animate-pulse'></div>
            <div className='relative bg-gradient-to-br from-[var(--bg-accent)] to-[var(--bg-secondary)] rounded-2xl p-2 shadow-2xl transform hover:scale-105 transition-all duration-500'>
              <img 
                src={homeMain} 
                alt='Home image' 
                className='w-full h-auto  object-cover md:w-[430px] md:h-auto rounded-2xl transition-shadow duration-300' 
              />
            </div>
          </motion.div>

        </div>
      </section>

      <section className='w-full py-20 flex justify-center'>
        <div className='w-full max-w-7xl px-4 md:px-0 grid md:grid-cols-2 gap-16 items-center'>

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3, margin: "0px 0px -100px 0px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className='space-y-8'
            >
              <div className='border-l-4 border-[var(--accent-primary)] pl-6 py-3'>
                <h5 className='text-2xl font-semibold text-[var(--text-primary)] mb-3'>Performance First</h5>
                <p className='text-[var(--text-secondary)] text-lg'>Clean, optimized code that scales</p>
              </div>

              <div className='border-l-4 border-[var(--accent-primary)] pl-6 py-3'>
                <h5 className='text-2xl font-semibold text-[var(--text-primary)] mb-3'>Solution Focused</h5>
                <p className='text-[var(--text-secondary)] text-lg'>Turning problems into working products</p>
              </div>

              <div className='border-l-4 border-[var(--accent-primary)] pl-6 py-3'>
                <h5 className='text-2xl font-semibold text-[var(--text-primary)] mb-3'>Continuous Growth</h5>
                <p className='text-[var(--text-secondary)] text-lg'>Leveling up through daily practice</p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3, margin: "0px 0px -100px 0px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className='space-y-6'
            >
              <div>
                <h4 className='text-3xl md:text-[40px] font-bold text-[var(--text-primary)] leading-tight'>
                  Building Web Apps <br />
                  <span className='bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-primary-hover)] bg-clip-text text-transparent'>
                    That Work.
                  </span>
                </h4>
              </div>

              <p className='text-lg text-[var(--text-primary)]/80 leading-relaxed'>
                I specialize in full-stack development with the MERN stack. 
                My focus is writing clean code, building reliable systems, and solving real problems with practical solutions.
              </p>

              <div className='flex flex-wrap gap-4 pt-4'>
                <div className='flex items-center gap-2 px-4 py-2 rounded-lg bg-[var(--bg-secondary)]/30 border border-white/10 tranistion duration-300 hover:-translate-y-2'>
                  <div className='w-2 h-2 rounded-full bg-[var(--accent-primary)] animate-pulse'></div>
                  <span className='text-sm text-[var(--text-primary)]/80'>MERN Stack</span>
                </div>
                <div className='flex items-center gap-2 px-4 py-2 rounded-lg bg-[var(--bg-secondary)]/30 border border-white/10 tranistion duration-300 hover:-translate-y-2'>
                  <div className='w-2 h-2 rounded-full bg-[var(--accent-primary)] animate-pulse'></div>
                  <span className='text-sm text-[var(--text-primary)]/80'>Full Stack</span>
                </div>
                <div className='flex items-center gap-2 px-4 py-2 rounded-lg bg-[var(--bg-secondary)]/30 border border-white/10 tranistion duration-300 hover:-translate-y-2'>
                  <div className='w-2 h-2 rounded-full bg-[var(--accent-primary)] animate-pulse'></div>
                  <span className='text-sm text-[var(--text-primary)]/80'>Always Learning</span>
                </div>
              </div>
            </motion.div>

        </div>
      </section>

      <section className='w-full py-10'>
        <div className='max-w-7xl mx-auto px-4 md:px-0'>
          <motion.h3 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className='text-2xl font-semibold text-[var(--text-primary)] mb-7'
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
                className="cursor-pointer relative overflow-hidden flex items-center gap-4 rounded-xl bg-[var(--bg-secondary)] border border-white/10 p-4 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 before:absolute before:inset-0 before:bg-[var(--bg-accent)]/20 before:transition-transform before:duration-300 before:translate-y-0 hover:before:-translate-y-full before:z-0 ">
                <div className='flex-shrink-0'>{skill.icon}</div>
                <div>
                  <div className='font-semibold text-[var(--text-primary)]'>{skill.name}</div>
                  <div className='text-sm text-[var(--text-secondary)] mt-1'>{skill.desc}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}