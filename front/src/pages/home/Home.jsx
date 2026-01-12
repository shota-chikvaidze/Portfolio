import React, { useEffect } from 'react'
import homeMain from '../../assets/images/newImage.jpg'
import { ReactTyped } from "react-typed";
import { useNavigate } from 'react-router-dom'
import Skills from '../../data/Skills';
import { motion } from 'framer-motion';
import Tech from '../../data/Tech'

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
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className='flex gap-4 items-center mb-2 text-[var(--text-primary)] text-[2rem]'
            > 
              Hey there! 
            </motion.p>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className='text-[var(--text-primary)] text-[2.4rem] lg:text-[3rem] uppercase'
            >
              I'm <span className='text-[var(--accent-primary)]'> Shota Chikvaidze </span> 
            </motion.p>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
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
              <button onClick={projNavigate} className="w-[140px] h-[35px] rounded-xl bg-[var(--bg-accent)] text-[var(--text-primary)] cursor-pointer text-[15px] border border-transparent hover:bg-transparent hover:border-[var(--border-color)] transition-all duration-300"> View Projects </button>
              <button className="w-[140px] h-[35px] bg-transparent text-[var(--text-primary)] rounded-xl border border-[var(--border-color)] text-[15px] cursor-pointer hover:border-[var(--border-color)]/50 transition "> 
                <a href='/CV.pdf' download > Download CV </a>
              </button>
              
            </motion.div>

          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className='relative group'
          >
            <div className='absolute -inset-1 bg-gradient-to-r from-[var(--accent-primary)] to-[var(--bg-accent)] rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition duration-500'></div>
            <div className='relative bg-gradient-to-br from-[var(--bg-accent)] to-[var(--bg-secondary)] rounded-2xl p-2 shadow-2xl'>
              <img 
                src={homeMain} 
                alt='Home image' 
                className='w-full h-auto  object-cover md:w-[430px] md:h-auto rounded-2xl transition-shadow duration-300' 
              />
            </div>
          </motion.div>

        </div>
      </section>

      <section className='w-full h-auto flex items-center justify-center my-[70px]'>


      <div className='grid md:grid-cols-2 gap-16 mt-16 mb-10 w-full max-w-7xl' >
          
          <div>
            <motion.h2 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className='text-2xl font-[600] text-[var(--text-white)] mb-8'
            >
              My Story
            </motion.h2>

            <div className='relative pl-8 before:content-[""] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-[2px] before:bg-gradient-to-b before:from-[var(--accent-primary)] before:via-[var(--bg-accent)] before:to-transparent'>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3 }}
                className='mb-10 relative'
              >
                <div className='absolute -left-[33px] top-1 w-3 h-3 rounded-full bg-[var(--accent-primary)] ring-4 ring-[var(--accent-primary)]/20'></div>
                <div className='text-[var(--accent-primary)] text-sm font-[500] mb-2'>THE BEGINNING</div>
                <h3 className='text-[var(--text-white)] text-xl font-[600] mb-2'>3 Month Foundation Course</h3>
                <p className='text-[var(--text-secondary)] text-sm'>Started with HTML, CSS basics and JavaScript concepts</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3 }}
                className='mb-10 relative'
              >
                <div className='absolute -left-[33px] top-1 w-3 h-3 rounded-full bg-[var(--accent-primary)] ring-4 ring-[var(--accent-primary)]/20'></div>
                <div className='text-[var(--accent-primary)] text-sm font-[500] mb-2'>DEEP DIVE</div>
                <h3 className='text-[var(--text-white)] text-xl font-[600] mb-2'>9 Month Intensive Program</h3>
                <p className='text-[var(--text-secondary)] text-sm'>Mastered HTML, CSS, JavaScript, React, Node.js & Express</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3 }}
                className='mb-10 relative'
              >
                <div className='absolute -left-[33px] top-1 w-3 h-3 rounded-full bg-[var(--accent-primary)] ring-4 ring-[var(--accent-primary)]/20'></div>
                <div className='text-[var(--accent-primary)] text-sm font-[500] mb-2'>CONTINUOUS GROWTH</div>
                <h3 className='text-[var(--text-white)] text-xl font-[600] mb-2'>Self-Driven Improvement</h3>
                <p className='text-[var(--text-secondary)] text-sm'>Building projects daily, constantly leveling up my skills</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3 }}
                className='relative'
              >
                <div className='absolute -left-[33px] top-1 w-3 h-3 rounded-full bg-[var(--accent-primary)] ring-4 ring-[var(--accent-primary)]/20'></div>
                <div className='text-[var(--accent-primary)] text-sm font-[500] mb-2'>NEXT CHAPTER</div>
                <h3 className='text-[var(--text-white)] text-xl font-[600] mb-2'>Expanding Tech Arsenal</h3>
                <p className='text-[var(--text-secondary)] text-sm'>Learning Python and Django framework for backend development</p>
              </motion.div>

            </div>
          </div>


          <div>
            <motion.h2 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className='text-2xl font-[600] text-[var(--text-white)] text-left md:text-right mb-8'
            >
              Tech Stack
            </motion.h2>
            <div className='grid grid-cols-2 gap-4'>
              {Tech?.map((tech, index) => (
                <motion.div 
                  key={tech.name}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className='group rounded-xl border border-[var(--border-color)] px-4 py-6 transition hover:border-[var(--border-color)]/50 hover:bg-[var(--glass-overlay)]/50'
                >
                  <div className='flex flex-col items-center text-center gap-2'>
                    <div 
                      className='text-[var(--text-secondary)] transition group-hover:scale-110 text-2xl'
                      style={{ color: tech.color }}
                    >
                      {tech.icon}
                    </div>
                    <div>
                      <h3 className='text-[var(--text-white)] font-[500] text-xs mb-0.5'>{tech.name}</h3>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>


        </div>

      </section>

      <section className='w-full py-20 flex justify-center'>
        <div className='w-full max-w-7xl px-4 md:px-0 grid md:grid-cols-2 gap-16 items-center'>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
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
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className='space-y-6'
            >
              <div>
                <h4 className='text-3xl md:text-[40px] font-bold text-[var(--text-primary)] leading-tight'>
                  Building Web Apps <br />
                    That Work.
                </h4>
              </div>

              <p className='text-lg text-[var(--text-primary)]/80 leading-relaxed'>
                I specialize in full-stack development with the MERN stack. 
                My focus is writing clean code, building reliable systems, and solving real problems with practical solutions.
              </p>

              <div className='flex flex-wrap gap-4 pt-4'>
                <div className='flex items-center gap-2 px-4 py-2 rounded-lg border border-white/10'>
                  <div className='w-2 h-2 rounded-full bg-[var(--accent-primary)]'></div>
                  <span className='text-sm text-[var(--text-primary)]/80'>MERN Stack</span>
                </div>
                <div className='flex items-center gap-2 px-4 py-2 rounded-lg border border-white/10'>
                  <div className='w-2 h-2 rounded-full bg-[var(--accent-primary)]'></div>
                  <span className='text-sm text-[var(--text-primary)]/80'>Full Stack</span>
                </div>
                <div className='flex items-center gap-2 px-4 py-2 rounded-lg border border-white/10'>
                  <div className='w-2 h-2 rounded-full bg-[var(--accent-primary)]'></div>
                  <span className='text-sm text-[var(--text-primary)]/80'>Always Learning</span>
                </div>
              </div>
            </motion.div>

        </div>
      </section>


    </div>
  )
}